const FetchService = require('./fetchService.js');
const { objectToQueryString } = require('../utils/format.js');
const MapGob = require('./gob.do/map.js');
const DGCP = require('./gob.do/dgcp.js');
const DGII = require('./gob.do/dgii.js');
const Aletheia = require('./aletheia');

/**
 * Open Data Class
 * 
 * @category Open Data
 */
class OpenData extends FetchService {
  /**
   * Create an instance of OpenData service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    super(apiKey);
    this.mapGob = new MapGob(apiKey);
    this.dgcp = new DGCP(apiKey);
    this.dgii = new DGII(apiKey);
    this.aletheia = new Aletheia();
  }
  
  /**
  * Retrieves fuel prices from the API based on the specified parameter and value.<br /><br />Full documentation: <a href="https://developer.digital.gob.do/apis/fdf3319d-521e-4364-b331-9d521e636442" target="_blank">https://developer.digital.gob.do/apis/fdf3319d-521e-4364-b331-9d521e636442</a>
  * @param {string} param - The parameter to filter the fuel prices by.
  * @param {string} value - The value of the parameter to filter the fuel prices by.
  * @returns {Promise} A promise that resolves to the fetched fuel prices data.
  * @example
  * // Example: Retrieve fuel prices for the Dominican Republic
  * // Full documentation: https://developer.digital.gob.do/apis/fdf3319d-521e-4364-b331-9d521e636442
  * async function getFuelPrices() {
  *   try {
  *     const fuelPrices = await aletheiaSDK.opendata.fuelPrices('date', '2023-11-01');
  *     console.log('Fuel Prices:', fuelPrices);
  *   } catch (error) {
  *     console.error('Error retrieving fuel prices:', error);
  *   }
  * }
  * getFuelPrices();
  * @returns {Object} Returns information regarding fuel prices in the dominican republic.
   */
  fuelPrices(param, value) {
    // API endpoint for fuel prices
    const endpoint = `https://api.digital.gob.do/v1/fuels?${param}=${value}`;

    return this.fetchData(endpoint);
  }

  /**
   * Retrieves data for various territories such as regions, provinces, municipalities, etc. <br /><br />Full documentation: <a href="https://developer.digital.gob.do/apis/34995f58-a45f-4b9e-995f-58a45f2b9e92" target="_blank">https://developer.digital.gob.do/apis/34995f58-a45f-4b9e-995f-58a45f2b9e92</a>
   * @param {string} territoryType - The type of territory to retrieve (e.g., 'regions', 'provinces').
   * @param {Object} params - Additional parameters to include in the request.
   * @returns {Promise} A promise that resolves to the fetched territory data.
   */
  getTerritoryData(territoryType, params) {
    const queryString = params ? objectToQueryString(params) : '';
    // API endpoint for territories
    const endpoint = `https://api.digital.gob.do/v1/territories/${territoryType}?${queryString}`;

    return this.fetchData(endpoint);
  }

  gob(gob) {
    switch (gob) {
      case 'map':
        return this.mapGob;
      case 'dgcp':
        return this.dgcp;
      case 'dgii':
        return this.dgii;
      default:
        return "invalid service";
    }
  }

  ale() {
    return this.aletheia;
  }

}

module.exports = OpenData;
