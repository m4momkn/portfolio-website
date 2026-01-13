import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist/index.html');

try {
    let html = fs.readFileSync(distPath, 'utf8');

    // Find the main CSS link
    const cssLinkRegex = /<link rel="stylesheet" crossorigin href="([^"]+)">/;
    const match = html.match(cssLinkRegex);

    if (match) {
        const fullTag = match[0];
        const cssUrl = match[1];

        console.log(`Found CSS: ${cssUrl}`);

        // Create deferred CSS tag
        const deferredTag = `<link rel="preload" href="${cssUrl}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${cssUrl}"></noscript>`;

        // Replace in HTML
        html = html.replace(fullTag, deferredTag);

        fs.writeFileSync(distPath, html);
        console.log('Successfully deferred CSS loading in dist/index.html');
    } else {
        console.warn('No CSS link found to defer.');
    }
} catch (err) {
    console.error('Error deferring CSS:', err);
    process.exit(1);
}
