const fs = require('fs');

/**
 * Extracts the domain from the provided URL.
 *
 * @param {string} url - The URL from which to extract the domain.
 * @returns {string} The domain extracted from the URL.
 *
 * @example
 * const exampleUrl = 'https://www.example.com/path/to/resource';
 * const domain = getDomainFromUrl(exampleUrl);
 * console.log('Extracted Domain:', domain); // Output: 'www.example.com'
 *
 * @category Utils
 */
function getDomainFromUrl(url) {
  // Create a new URL object
  const urlObject = new URL(url);

  // Access the hostname property to get the domain
  const domain = urlObject.hostname;

  return domain;
}

async function downloadFile(url) {
  try {

    return await fetch(url)
      .then( res => res.blob() )
      .then( async blob => {
        const arrayBuffer = await blob.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const fileName = url.substring(url.lastIndexOf('/') + 1);
        const fileExtension = fileName.split('.').pop(); // Extract file extension
        const fullFileName = `${fileName.replace(/\.[^/.]+$/, '')}.${fileExtension}`;
        const destinationPath = `__temp__/${fullFileName}`;
        await fs.promises.writeFile(destinationPath, buffer);
        console.log(`File downloaded and saved to: ${fullFileName}`);
        return destinationPath
      });
    
  } catch (error) {
    console.error('Error generating answer:', error);
    return null;
  }
}

module.exports = { getDomainFromUrl, downloadFile };
