const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const excelPath = path.join(__dirname, '../data/product-updates.xlsx');
const outputPath = path.join(__dirname, '../data/products.ts');

console.log(`Reading file from: ${excelPath}`);

try {
    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert to JSON (array of arrays)
    const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    console.log(`Found ${rawData.length} rows in sheet "${sheetName}"`);

    // Find header row (row with 'MPN' or 'Part Number')
    let headerRowIndex = -1;
    for (let i = 0; i < Math.min(10, rawData.length); i++) {
        const row = rawData[i];
        if (row && row.some(cell => cell && typeof cell === 'string' && (cell.toLowerCase().includes('mpn') || cell.toLowerCase().includes('part number')))) {
            headerRowIndex = i;
            break;
        }
    }

    if (headerRowIndex === -1) {
        console.log('Could not find header row automatically. Assuming row 0 is header.');
        headerRowIndex = 0;
    } else {
        console.log(`Found header at row ${headerRowIndex}`);
    }

    const headers = rawData[headerRowIndex].map(h => h ? h.toString().trim() : '');
    console.log('Headers:', headers);

    const products = rawData.slice(headerRowIndex + 1).map((row, index) => {
        const getVal = (keys) => {
            for (const key of keys) {
                const colIndex = headers.findIndex(h => h.toLowerCase() === key.toLowerCase());
                if (colIndex !== -1) return row[colIndex];
            }
            return undefined;
        };

        const partNumber = getVal(['MPN', 'Part Number', 'PartNumber', 'Part #', 'PN']);

        if (!partNumber) {
            return null;
        }

        const description = getVal(['DESCRIPTIONS', 'Description', 'Desc']) || '';

        // Simple category inference
        let category = 'Others';
        const descLower = description.toString().toLowerCase();
        if (descLower.includes('resistor')) category = 'Resistors';
        else if (descLower.includes('capacitor')) category = 'Capacitors';
        else if (descLower.includes('diode')) category = 'Diodes';
        else if (descLower.includes('connector')) category = 'Connectors';
        else if (descLower.includes('inductor')) category = 'Inductors';
        else if (descLower.includes('transistor')) category = 'Transistors';
        else if (descLower.includes('ic') || descLower.includes('integrated circuit')) category = 'ICs';

        return {
            partNumber: partNumber.toString(),
            description: description.toString(),
            category: category,
            manufacturer: undefined, // Not available in this Excel
            inStock: true, // Default to true
            image: undefined
        };
    }).filter(p => p !== null);

    // Generate TypeScript content
    const fileContent = `// Product data for Serente Electronics
// Categories: Resistors, Capacitors, ICs, Diodes, Connectors, Inductors, Transistors, Others
// Auto-generated from Excel import on ${new Date().toISOString()}

export interface Product {
    partNumber: string;
    description: string;
    category: string;
    manufacturer?: string;
    inStock: boolean;
    image?: string;
}

export const products: Product[] = ${JSON.stringify(products, null, 4)};

// Utilities
export const categories = [
    "Resistors",
    "Capacitors",
    "ICs", 
    "Diodes", 
    "Transistors", 
    "Connectors", 
    "Inductors",
    "Protection",
    "Audio",
    "Others"
];

export const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
};

export const searchProducts = (query: string) => {
    const lowerQuery = query.toLowerCase();
    return products.filter(product => 
        product.partNumber.toLowerCase().includes(lowerQuery) || 
        product.description.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
};

export const getFeaturedProducts = (limit: number = 8) => {
    return products.filter(p => p.inStock).slice(0, limit);
};
`;

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Successfully wrote ${products.length} products to ${outputPath}`);

} catch (error) {
    console.error('Error importing Excel:', error);
}
