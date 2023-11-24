const xml2js = require('xml2js');

function parseXml(xmlString) {
    return xml2js.parseStringPromise(xmlString).then(function (result) {
        return result;
      })
      .catch(function (err) {
        // Failed
        console.log(err);
        throw err;
      });
  }
  
  module.exports = { parseXml };