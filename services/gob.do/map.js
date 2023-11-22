const FetchService = require('../fetchService.js');

class MapGob extends FetchService {
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
  datosAbiertos(service, format) {
    if (!service || !format) {
      return "missing parameters";
    }
    // API endpoint for fuel prices
    const endpoint = `https://map.gob.do/api/datos_abiertos/data=${service}&format=${format}`;

    return this.fetchData(endpoint);
  }

}

module.exports = MapGob;
