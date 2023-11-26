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

module.exports = { getDomainFromUrl };
