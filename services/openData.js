const FetchService = require('./fetchService.js');
const { objectToQueryString } = require('../utils/format.js');

class OpenData extends FetchService {
  /**
   * Create an instance of OpenData service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    super(apiKey);
  }
  
  /**
   * Retrieves fuel prices from the API based on the specified parameter and value.
   * @param {string} param - The parameter to filter the fuel prices by.
   * @param {string} value - The value of the parameter to filter the fuel prices by.
   * @returns {Promise} A promise that resolves to the fetched fuel prices data.
   */
  fuelPrices(param, value) {
    // API endpoint for fuel prices
    const endpoint = `https://api.digital.gob.do/v1/fuels?${param}=${value}`;

    return this.fetchData(endpoint);
  }

  /**
   * Retrieves data for various territories such as regions, provinces, municipalities, etc.
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

}

module.exports = OpenData;
