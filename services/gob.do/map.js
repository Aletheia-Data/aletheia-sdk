const FetchService = require('../fetchService.js');

/**
 * MapGob Class
 * 
 * Represents a client for interacting with the Map (Ministerio de Administración Pública) API, providing methods for retrieving open data.
 * This class extends the FetchService class and focuses on accessing data related to various services
 * using specified parameters and formats.
 *
 * @category Gob.do
 * @class
 * @extends FetchService
 */
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
