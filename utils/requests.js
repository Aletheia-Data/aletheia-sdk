const { getDomainFromUrl } = require("./url");

class RequestUtils {
  /**
   * Perform a GET request to the specified URL.
   * @param {string} url - The URL for the GET request.
   * @param {Object} headers - The headers to include in the request.
   * @returns {Promise} A Promise that resolves with the JSON data from the GET request.
   */
  static async get(url, headers) {
    try {
      const response = await fetch(url, { method: 'GET', headers });
      const data = await response.json();
      const res = {
        data,
        provider: getDomainFromUrl(url),
        endpoint: url
      }
      return res;
    } catch (error) {
      console.error('Error making GET request:', error);
      throw error;
    }
  }

  /**
   * Perform a POST request to the specified URL.
   * @param {string} url - The URL for the POST request.
   * @param {Object} headers - The headers to include in the request.
   * @param {Object} body - The JSON data to include in the request body.
   * @returns {Promise} A Promise that resolves with the JSON data from the POST request.
   */
  static async post(url, headers, body) {
    try {
      const response = await fetch(url, { 
        method: 'POST', 
        headers, 
        body
      });
      const data = await headers['Content-Type'] === 'application/soap+xml; charset=utf-8' ? response.text() : response.json();
      const res = {
        data,
        provider: getDomainFromUrl(url),
        endpoint: url
      }
      return res;
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }
  }

  /**
   * Perform a PUT request to the specified URL.
   * @param {string} url - The URL for the PUT request.
   * @param {Object} headers - The headers to include in the request.
   * @param {Object} body - The JSON data to include in the request body.
   * @returns {Promise} A Promise that resolves with the JSON data from the PUT request.
   */
  static async put(url, headers, body) {
    try {
      const response = await fetch(url, { method: 'PUT', headers, body: JSON.stringify(body) });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error making PUT request:', error);
      throw error;
    }
  }

  /**
   * Perform a DELETE request to the specified URL.
   * @param {string} url - The URL for the DELETE request.
   * @param {Object} headers - The headers to include in the request.
   * @returns {Promise} A Promise that resolves with the JSON data from the DELETE request.
   */
  static async delete(url, headers) {
    try {
      const response = await fetch(url, { method: 'DELETE', headers });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error making DELETE request:', error);
      throw error;
    }
  }
}

module.exports = RequestUtils;
