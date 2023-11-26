const cheerio = require('cheerio');
const Papa = require('papaparse');

function fetchAndParseHTML(url, targetClass) {
    return fetch(url)
      .then(response => response.text())
      .then(html => {
        
        const $ = cheerio.load(html);
        // Parse HTML content using DOMParser
        // Select elements with the specified class
        const elements = $(`a.${targetClass}`);
        const formats = $(`.heading span.format-label`);

        const links = [];
        // Print or process the selected elements
        elements.each((index, element) => {
          if (formats[index].attribs['data-format'] === 'csv') {
            links.push(element.attribs.href);
          }
        });
        return links;
      })
      .catch(error => {
        console.error('Error fetching page:', error);
        return error;
      });
  }

async function fetchAndParseCSV(url) {
  const headers = new Headers();
  headers.append('Content-Type','text/plain;');

  const csvData = await fetch(url, headers)
    .then(function (response) {
      return response.arrayBuffer();
    })
    .then(function (buffer) {
        const decoder = new TextDecoder('iso-8859-2');
        const text = decoder.decode(buffer);
        return text;
    });

  const options = {
    header: true,
    encoding: "UTF-8"
  };
  return Papa.parse(csvData, options)
}

module.exports = {
    fetchAndParseHTML,
    fetchAndParseCSV
};