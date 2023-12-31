const FetchService = require('./fetchService.js');
const { objectToQueryString } = require('../utils/format.js');
const MapGob = require('./gob.do/map.js');
const DGCP = require('./gob.do/dgcp.js');
const DGII = require('./gob.do/dgii.js');
const Aletheia = require('./aletheia');
const DatosAbiertos = require('./gob.do/datos-abiertos.js');
const MitGob = require('./gob.do/mit.js');
const DigitalGob = require('./gob.do/digital.js');
const AmbienteGob = require('./gob.do/medio-ambiente.js');
 
/**
 * Open Data Class
 * 
 * Represents methods for accessing open data provided by the Dominican Republic government or private organizations.
 * This class extends the FetchService class and includes specialized modules for different open data providers, such as MapGob, DGCP, DGII, and Aletheia.
 *
 * @category Open Data
 * @class
 * @extends FetchService
 */
class OpenData extends FetchService {
  /**
   * Create an instance of OpenData service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    super(apiKey);
    this.mapGob = new MapGob();
    this.dgcp = new DGCP();
    this.dgii = new DGII();
    this.aletheia = new Aletheia();
    this.datosAbiertos = new DatosAbiertos();
    this.mitGob = new MitGob();
    this.digitalGob = new DigitalGob();
    this.ambienteGob = new AmbienteGob();
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

  /**
  * UNOFFICIAL: https://github.com/Erinxon/api-bancos-republica-dominicana
  * Retrieves a list of banks from the API.
  * <br /><br />Full documentation: <a href="https://banks.fly.dev/swagger/index.html" target="_blank">https://banks.fly.dev/swagger/index.html</a>
  * 
  * @async
  * @returns {Promise<Object>} - A Promise that resolves to the list of banks.
  * @throws {Error} - Throws an error if there is an issue with the API request.
  * @example
  * async function getDominicanBanks() {
  *   try {
  *     const banks = await aletheiaSDK.opendata.getBanks();
  *     console.log('Dominican Banks:', banks);
  *   } catch (error) {
  *     console.error('Error retrieving fuel prices:', error);
  *   }
  * }
  * getDominicanBanks();
  */
  async getBanks() {
    const endpoint = `https://banks.fly.dev/api/Banks`;

    return this.fetchData(endpoint);
  }

  /**
  * UNOFFICIAL: https://github.com/Erinxon/api-bancos-republica-dominicana
  * Retrieves detailed information about a bank based on the provided URL.
  * <br /><br />Full documentation: <a href="https://banks.fly.dev/swagger/index.html" target="_blank">https://banks.fly.dev/swagger/index.html</a>
  * 
  * @async
  * @param {string} linkDetail - The URL link of the bank's details.
  * @returns {Promise<Object>} - A Promise that resolves to the detailed information about the bank.
  * @throws {Error} - Throws an error if there is an issue with the API request.
  * @example
  * async function getDominicanBankDetails() {
  *   try {
  *     const linkDetail = 'https://sb.gob.do/supervisados/entidades-de-intermediacion-financiera/banreservas/';
  *     const bankDetails = await aletheiaSDK.opendata.getBankDetail(linkDetail);
  *     console.log('Dominican Bank:', bankDetails);
  *   } catch (error) {
  *     console.error('Error retrieving fuel prices:', error);
  *   }
  * }
  * getDominicanBankDetails();
  */
  async getBankDetail(linkDetail) {
    const endpoint = `https://banks.fly.dev/api/Banks/Detail?URL=${encodeURIComponent(linkDetail)}`;

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
      case 'datos-abiertos':
        return this.datosAbiertos;
      case 'mit':
        return this.mitGob;
      case 'digital':
        return this.digitalGob;
      case 'ambiente':
        return this.ambienteGob;
      default:
        return "invalid provider";
    }
  }

  ale() {
    return this.aletheia;
  }

}

module.exports = OpenData;
