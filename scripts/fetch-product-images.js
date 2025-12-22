const fs = require('fs');
const path = require('path');
const https = require('https');

const PRODUCTS_PATH = path.join(__dirname, '../data/products.ts');
const NEXAR_API_URL = 'https://api.nexar.com/graphql';

let NEXAR_ACCESS_TOKEN = process.env.NEXAR_ACCESS_TOKEN;

if (!NEXAR_ACCESS_TOKEN) {
    try {
        const tokenPath = path.join(__dirname, '../nexar_token.txt');
        if (fs.existsSync(tokenPath)) {
            NEXAR_ACCESS_TOKEN = fs.readFileSync(tokenPath, 'utf8').trim();
            console.log('Loaded token from nexar_token.txt');
        }
    } catch (e) {
        // ignore
    }
}

if (!NEXAR_ACCESS_TOKEN) {
    console.error('Error: NEXAR_ACCESS_TOKEN environment variable is not set and nexar_token.txt not found.');
    process.exit(1);
}

// Helper to make GraphQL request
function fetchNexar(query, variables) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({ query, variables });
        const options = {
            hostname: 'api.nexar.com',
            path: '/graphql',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${NEXAR_ACCESS_TOKEN}`,
                'Content-Length': data.length
            }
        };

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(body);
                    if (res.statusCode >= 400) {
                        reject(new Error(`API Error ${res.statusCode}: ${JSON.stringify(parsed)}`));
                    } else if (parsed.errors) {
                        reject(new Error(`GraphQL Error: ${JSON.stringify(parsed.errors)}`));
                    } else {
                        resolve(parsed.data);
                    }
                } catch (e) {
                    reject(new Error(`Invalid JSON response: ${body}`));
                }
            });
        });

        req.on('error', (e) => reject(e));
        req.write(data);
        req.end();
    });
}

// Query to search for a part and get image
const SEARCH_QUERY = `
query SearchParts($q: String!) {
  supSearch(q: $q, limit: 1) {
    results {
      part {
        mpn
        media {
          url
          type
        }
      }
    }
  }
}
`;

async function main() {
    console.log('Reading products file...');
    let fileContent = fs.readFileSync(PRODUCTS_PATH, 'utf8');

    // Extract products array using regex
    // Looking for: export const products: Product[] = [...];
    const match = fileContent.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
    if (!match) {
        console.error('Error: Could not find products array in data/products.ts');
        process.exit(1);
    }

    const productsJson = match[1];
    let products;
    try {
        products = JSON.parse(productsJson);
    } catch (e) {
        console.error('Error parsing products JSON. Make sure the file contains valid JSON inside the variable assignment.');
        // Fallback: try to eval if it's not strict JSON (though import-excel.js produces JSON)
        try {
            products = eval(productsJson);
        } catch (e2) {
            console.error('Eval failed too:', e2);
            process.exit(1);
        }
    }

    console.log(`Found ${products.length} products to process.`);

    let updatedCount = 0;
    const batchSize = 5; // Process in small batches
    const delayMs = 500; // Delay between batches

    for (let i = 0; i < products.length; i += batchSize) {
        const batch = products.slice(i, i + batchSize);
        console.log(`Processing batch ${i + 1} to ${Math.min(i + batchSize, products.length)}...`);

        const promises = batch.map(async (product) => {
            if (product.image) return; // Skip if already has image

            try {
                // Search by Part Number
                const data = await fetchNexar(SEARCH_QUERY, { q: product.partNumber });
                const results = data?.supSearch?.results;

                if (results && results.length > 0) {
                    const part = results[0].part;
                    // Find a suitable image
                    // Media types can be 'IMAGE', 'datasheet', etc.
                    // We want an image.
                    // Check if media exists
                    if (part.media && part.media.length > 0) {
                        // Filter for images? The type might be "IMAGE" or similar.
                        // Let's just take the first one or look for type 'product_image' if available, but usually it's just 'IMAGE' in some schemas or just check extension.
                        // Assuming media items have a 'type' field that helps.
                        const imageMedia = part.media.find(m => m.type === 'IMAGE' || m.type === 'image') || part.media[0];

                        if (imageMedia && imageMedia.url) {
                            product.image = imageMedia.url;
                            updatedCount++;
                            // console.log(`Found image for ${product.partNumber}`);
                        }
                    }
                } else {
                    // console.log(`No hits for ${product.partNumber}`);
                }

            } catch (err) {
                console.error(`Error fetching for ${product.partNumber}:`, err.message);
            }
        });

        await Promise.all(promises);

        // Wait a bit to be nice to the API
        await new Promise(r => setTimeout(r, delayMs));
    }

    console.log(`Finished processing. Updated ${updatedCount} products.`);

    // Reconstruct file
    const newProductsJson = JSON.stringify(products, null, 4);
    const newFileContent = fileContent.replace(match[1], newProductsJson);

    fs.writeFileSync(PRODUCTS_PATH, newFileContent, 'utf8');
    console.log('Successfully updated data/products.ts');
}

main();
