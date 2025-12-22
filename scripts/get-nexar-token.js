const https = require('https');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

const CLIENT_ID = '15d4f731-b48a-480b-8826-fbee2035fb94';
const CLIENT_SECRET = 'zu7tLPCa93pKB6B_AVIAzk2Yj7RyqzfBLyVS';

function getToken() {
    const postData = querystring.stringify({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        scope: 'supply.domain design.domain'
    });

    const options = {
        hostname: 'identity.nexar.com',
        path: '/connect/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
        }
    };

    const req = https.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            if (res.statusCode === 200) {
                const json = JSON.parse(body);
                const tokenPath = path.join(__dirname, '../nexar_token.txt');
                fs.writeFileSync(tokenPath, json.access_token);
                console.log('Token saved to ' + tokenPath);
            } else {
                console.error('Failed to get token:', res.statusCode, body);
            }
        });
    });

    req.on('error', (e) => console.error(e));
    req.write(postData);
    req.end();
}

getToken();
