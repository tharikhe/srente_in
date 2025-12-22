const https = require('https');

const MOUSER_API_KEY = 'f980bbc0-525a-4d14-9137-53519ece38a5';

function searchMouser(partNumber) {
    const postData = JSON.stringify({
        "SearchByPartRequest": {
            "mouserPartNumber": partNumber,
            "partSearchOptions": ""
        }
    });

    const options = {
        hostname: 'api.mouser.com',
        path: `/api/v1/search/partnumber?apiKey=${MOUSER_API_KEY}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
        }
    };

    const req = https.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Status:', res.statusCode);
            try {
                const json = JSON.parse(body);
                // console.log('Body:', JSON.stringify(json, null, 2));

                if (json.SearchResults && json.SearchResults.Parts && json.SearchResults.Parts.length > 0) {
                    const part = json.SearchResults.Parts[0];
                    console.log('Found Part:', part.ManufacturerPartNumber);
                    console.log('Image URL:', part.ImagePath);
                } else {
                    console.log('No parts found or invalid response structure.');
                    console.log(JSON.stringify(json, null, 2));
                }

            } catch (e) {
                console.error('Error parsing JSON:', e);
                console.log('Raw Body:', body);
            }
        });
    });

    req.on('error', (e) => console.error(e));
    req.write(postData);
    req.end();
}

console.log('Testing Mouser API...');
searchMouser('RC0603FR-07220RL');
