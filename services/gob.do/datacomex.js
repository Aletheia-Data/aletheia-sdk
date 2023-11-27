const { fetchHTMLElemByClass } = require('../../utils/parse.js');
const FetchService = require('../fetchService.js');
const { read, utils } = require("xlsx");

/**
 * MitGob Class
 * 
 * Represents a client for interacting with the MIT (Ministerio de Trabajo de la República Dominicana) API, providing methods for retrieving open data.
 * This class extends the FetchService class and focuses on accessing data related to various services
 * using specified parameters and formats.
 * <br /><br />Full API specs: <a href="https://webapi.mt.gob.do" target="_blank">https://webapi.mt.gob.do</a>
 *
 * @category Gob.do
 * @class
 * @extends FetchService
 */
class Datacomex extends FetchService {
  /**
   * Create an instance of OpenData service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    super(apiKey);
    this.apiDomain = 'https://datacomex.micm.gob.do/dashboard';
  }

  /**
   * Retrieves Division Types from the API.
   * @returns {Promise} A promise that resolves to the fetched Division Types.
   *
   * @example
   * async function getMITTiposDivision() {
   *   try {
   *     const mitData = await mitGob.GetTiposDivision();
   *     console.log('MIT Division Types:', mitData);
   *   } catch (error) {
   *     console.error('Error retrieving MIT Division Types:', error);
   *   }
   * }
   * getMITTiposDivision();
   */
  async getImports() {
    const endpoint = `${this.apiDomain}/`;
    console.log(endpoint);
    const elems = await fetchHTMLElemByClass(endpoint, 'elementor-button-link');
    const links = [];
    elems.map((i, elem) => {
        if (!elem['attribs']['href'].includes('pdf')) {
            links.push(elem['attribs']['href']);
        }
    });

    console.log(links);
    // const url = "https://oss.sheetjs.com/test_files/RkNumber.xls";
    const url = links[1];
    const wb = read(await (await fetch(url)).arrayBuffer(), { WTF: 1 });

    /* use sheet_to_json with header: 1 to generate an array of arrays */
    const data = await utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1 });
    console.log(data);

    return elems;
  }

}

module.exports = Datacomex;