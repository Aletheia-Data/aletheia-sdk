const FetchService = require('../fetchService.js');

/**
 * DigitalGob Class
 * 
 * Represents a client for interacting with the Dominican's Developer API Platform.
 *
 * @category Gob.do
 * @class
 * @extends FetchService
 */
class DigitalGob extends FetchService {
  /**
  * Create an instance of DGCPApi service.
  * @param {string} apiKey - The API key for authentication.
  */
  constructor(apiKey) {
    super(apiKey);
    this.apiDomain = 'https://developer.digital.gob.do/server/portal/environments/DEFAULT';
  }

  /**
  * Get API list.
  * @returns {Promise} A promise that resolves to the total of API on the platform.
  * @example
  * // Example: Retrieve APIs info from https://developer.digital.gob.do
  * async function getAPIs() {
  *     try {
  *       const apisList = await aletheiaSDK.opendata.gob('digital').getApis();
  *       console.log('Develper APIs:', apisList);
  *     } catch (error) {
  *       console.error('Error retrieving developer apis:', error);
  *     }
  * }
  */
  getApis() {
    const endpoint = `${this.apiDomain}/apis`;
    return this.fetchData(endpoint);
  }

  /**
  * Get API by ID.
  * @param {string} id - The ID of the API.
  * @returns {Promise} A promise that resolves to the API data.
  * @example
  * // Example: Retrieve API by ID from https://developer.digital.gob.do
  * async function getAPI() {
  *     try {
  *       const id = "ff9ce928-e16e-4ea9-9ce9-28e16e1ea96e";
  *       const apiInfo = await aletheiaSDK.opendata.gob('digital').getApisById(id);
  *       console.log('Develper API:', apiInfo);
  *     } catch (error) {
  *       console.error('Error retrieving developer api:', error);
  *     }
  * }
   */
  getApiById(id) {
    const endpoint = `${this.apiDomain}/apis/${id}`;
    return this.fetchData(endpoint);
  }
}

module.exports = DigitalGob;
