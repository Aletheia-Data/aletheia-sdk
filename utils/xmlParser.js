const xml2js = require('xml2js');

/**
 * Parses an XML string using the xml2js library, converting it into a JavaScript object.
 *
 * @param {string} xmlString - The XML string to be parsed.
 * @returns {Promise<Object>} A promise that resolves with the JavaScript object representation of the parsed XML.
 *
 * @example
 * const exampleXml = '<root><element>Value</element></root>';
 * const parsedObject = await parseXml(exampleXml);
 * console.log('Parsed XML Object:', parsedObject);
 *
 * @category Utils
 */
function parseXml(xmlString) {
  return xml2js.parseStringPromise(xmlString)
    .then(function (result) {
      return result;
    })
    .catch(function (err) {
      // Failed
      console.error('Error parsing XML:', err);
      throw err;
    });
}

module.exports = { parseXml };
