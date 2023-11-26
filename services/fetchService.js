const RequestUtils = require('../utils/requests');
/**
 * FetchService Class
 * 
 * TBD
 * @ignore
 * @category Authentication
 * @class
 * @extends FetchService
 */
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
   * @ignore
   * @param {string} endpoint - The API endpoint to fetch data from.
   * @returns {Promise} A Promise that resolves with the fetched data.
   */
  fetchData(endpoint) {
    const apiUrl = `${endpoint}`;

      
    // TODO: handle - Authorization: `Bearer ${this.apiKey}`,
    const headers = {
      
    };

    // Use request utility function for making HTTP GET requests
    return RequestUtils.get(apiUrl, headers);
  }

  /**
   * Post data from the specified API endpoint.
   * @ignore
   * @param {string} endpoint - The API endpoint to Post data from.
   * @returns {Promise} A Promise that resolves with the Posted data.
   */
  postData(endpoint, body, headers) {
    const apiUrl = `${endpoint}`;

    // Use request utility function for making HTTP GET requests
    return RequestUtils.post(apiUrl, headers || {
      Authorization: `Bearer ${this.apiKey}`,
    }, body);
  }
}

module.exports = FetchService;
