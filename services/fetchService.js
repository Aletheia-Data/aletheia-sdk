const RequestUtils = require('../utils/requests');

class FetchService {
  /**
   * Create an instance of FetchService.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   * Fetch data from the specified API endpoint.
   * @param {string} endpoint - The API endpoint to fetch data from.
   * @returns {Promise} A Promise that resolves with the fetched data.
   */
  fetchData(endpoint) {
    const apiUrl = `${endpoint}`;

    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
    };

    // Use request utility function for making HTTP GET requests
    return RequestUtils.get(apiUrl, headers);
  }
}

module.exports = FetchService;
