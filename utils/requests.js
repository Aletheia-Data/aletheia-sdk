const { getDomainFromUrl } = require("./url");

/**
 * Utility class for performing HTTP requests (GET, POST, PUT, DELETE).
 *
 * @category Utils
 */
class RequestUtils {
  /**
   * Perform a GET request to the specified URL.
   * @param {string} url - The URL for the GET request.
   * @param {Object} headers - The headers to include in the request.
   * @returns {Promise<Object>} A Promise that resolves with the JSON data from the GET request.
   *
   * @example
   * const url = 'https://example.com/api/data';
   * const headers = { 'Authorization': 'Bearer YOUR_TOKEN' };
   * const responseData = await RequestUtils.get(url, headers);
   * console.log('GET Response:', responseData);
   */
  static async get(url, headers) {
    try {
      const response = await fetch(url, { method: 'GET', headers });
      const data = await response.json();
      const res = {
        data,
        provider: getDomainFromUrl(url),
        endpoint: url
      };
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
   * @returns {Promise<Object|string>} A Promise that resolves with the JSON data from the POST request.
   *
   * @example
   * const url = 'https://example.com/api/data';
   * const headers = { 'Content-Type': 'application/json' };
   * const body = { key: 'value' };
   * const responseData = await RequestUtils.post(url, headers, body);
   * console.log('POST Response:', responseData);
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
      };
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
   * @returns {Promise<Object>} A Promise that resolves with the JSON data from the PUT request.
   *
   * @example
   * const url = 'https://example.com/api/data';
   * const headers = { 'Content-Type': 'application/json' };
   * const body = { key: 'updatedValue' };
   * const responseData = await RequestUtils.put(url, headers, body);
   * console.log('PUT Response:', responseData);
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
   * @returns {Promise<Object>} A Promise that resolves with the JSON data from the DELETE request.
   *
   * @example
   * const url = 'https://example.com/api/data/123';
   * const headers = { 'Authorization': 'Bearer YOUR_TOKEN' };
   * const responseData = await RequestUtils.delete(url, headers);
   * console.log('DELETE Response:', responseData);
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
