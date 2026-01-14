import fs from 'fs-extra';

async function copyTranslation() {
    try {
        await fs.copy('translation', 'dist/translation');
        console.log('Translation files copied to dist/translation');
    } catch (err) {
        console.error('Error copying translation files:', err);
    }
}

copyTranslation();
