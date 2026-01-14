import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const SHEET_ID = '1e2wop659zmbJwiv6ZXQXMPJcvMbeOzv05f-IVhTs72M';
const GOOGLE_SPREAD_API_KEY = 'AIzaSyBkUC2IfIhcOFiB1woQsh_mpMpJ8TGWJHo';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const makeJsonFromSheets = async (languageCode, sheetName) => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}?valueRenderOption=FORMATTED_VALUE&key=${GOOGLE_SPREAD_API_KEY}`;

    https
        .get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                const response = JSON.parse(data);
                console.log(`response:`, response);
                const sheetValues = response?.values;
                createLanguageFile(sheetValues, languageCode);
            });
        })
        .on('error', (e) => {
            console.error(`Error fetching data: ${e.message}`);
        });
};

const langSet = {
    en: {
        SHEET_NAME: 'Player',
        COLUMN_NAME: 'en',
    },
    ko: {
        SHEET_NAME: 'Player',
        COLUMN_NAME: 'ko',
    },
};

for (const [languageCode, settings] of Object.entries(langSet)) {
    makeJsonFromSheets(languageCode, settings.SHEET_NAME);
}

const createLanguageFile = (sheetValues, languageCode) => {
    const languageObject = {};
    const headers = sheetValues[0];
    const columnIndex = headers.indexOf(langSet[languageCode].COLUMN_NAME);

    if (columnIndex === -1) {
        console.error(`Error: Column name for language ${languageCode} not found.`);
        return;
    }

    for (let i = 1; i < sheetValues.length; i++) {
        const row = sheetValues[i];
        languageObject[row[0]] = row[columnIndex];
    }

    const jsonString = JSON.stringify(languageObject, null, 2);
    const localeDir = path.join(__dirname, 'locale');
    const filePath = path.join(localeDir, `${languageCode}.json`);

    try {
        if (!fs.existsSync(localeDir)) {
            fs.mkdirSync(localeDir, { recursive: true });
        }

        fs.writeFileSync(filePath, jsonString);
        console.log(`File "${filePath}" created successfully.`);
    } catch (error) {
        console.error('Error writing file:', error);
    }
};
