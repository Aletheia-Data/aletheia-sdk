const FetchService = require('../fetchService.js');

class Aletheia extends FetchService {
  /**
   * Create an instance of OpenData service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    super(apiKey);
    this.apiDomain = "https://admin.aletheiadata.org"
  }
  
  /**
   * Retrieves fuel prices from the API based on the specified parameter and value.
   * @param {string} param - The parameter to filter the fuel prices by.
   * @param {string} value - The value of the parameter to filter the fuel prices by.
   * @returns {Promise} A promise that resolves to the fetched fuel prices data.
   */
  getAletheias() {
    // API endpoint for fuel prices
    const endpoint = `${this.apiDomain}/aletheias`;

    return this.fetchData(endpoint);
  }

  getCategories() {
    // API endpoint for fuel prices
    const endpoint = `${this.apiDomain}/categories`;

    return this.fetchData(endpoint);
  }

}

module.exports = Aletheia;
