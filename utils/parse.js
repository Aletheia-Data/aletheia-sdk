const cheerio = require('cheerio');
const Papa = require('papaparse');

/**
 * Fetches HTML content from the specified URL, parses it using Cheerio, and extracts links with the target class.
 *
 * @param {string} url - The URL to fetch HTML content from.
 * @param {string} targetClass - The class of the elements to select and extract links.
 * @returns {Promise<Array<string>>} A promise that resolves to an array of links extracted from the HTML content.
 *
 * @example
 * const url = 'https://example.com';
 * const targetClass = 'link-class';
 * const links = await fetchAndParseHTML(url, targetClass);
 * console.log('Extracted Links:', links);
 *
 * @category Utils
 */
function fetchAndParseHTML(url, targetClass) {
  return fetch(url)
    .then(response => response.text())
    .then(html => {
      const $ = cheerio.load(html);

      // Parse HTML content using Cheerio
      // Select elements with the specified class
      const elements = $(`a.${targetClass}`);
      const formats = $(`.heading span.format-label`);

      const links = [];

      // Extract links based on the specified class and data-format attribute
      elements.each((index, element) => {
        if (formats[index].attribs['data-format'] === 'csv') {
          links.push(element.attribs.href);
        }
      });

      return links;
    })
    .catch(error => {
      console.error('Error fetching page:', error);
      throw error;
    });
}

/**
 * Fetches and parses CSV data from the specified URL using the PapaParse library.
 *
 * @param {string} url - The URL to fetch CSV data from.
 * @returns {Promise<Object>} A promise that resolves to an object representing the parsed CSV data.
 *
 * @example
 * const url = 'https://example.com/data.csv';
 * const csvData = await fetchAndParseCSV(url);
 * console.log('Parsed CSV Data:', csvData);
 *
 * @category Utils
 */
async function fetchAndParseCSV(url) {
  const headers = new Headers();
  headers.append('Content-Type', 'text/plain;');

  const csvData = await fetch(url, headers)
    .then(response => response.arrayBuffer())
    .then(buffer => {
      const decoder = new TextDecoder('iso-8859-2');
      const text = decoder.decode(buffer);
      return text;
    });

  const options = {
    header: true,
    encoding: 'UTF-8',
  };

  return Papa.parse(csvData, options);
}

module.exports = {
  fetchAndParseHTML,
  fetchAndParseCSV
};
