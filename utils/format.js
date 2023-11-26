/**
 * Convert an object into a URL query string.
 * @category Utils
 * @param {Object} obj - The object to convert.
 * @returns {string} A URL query string representation of the object.
 * @example
 * const params = { provinceCode: 11, regionCode: 08 };
 * const queryString = objectToQueryString(params);
 * // Result: 'provinceCode=11&regionCode=08'
 */
function objectToQueryString(obj) {
    /**
     * Convert an object into a URL query string.
     * @param {Object} obj - The object to convert.
     * @returns {string} A URL query string representation of the object.
     */
    return Object.entries(obj)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }

module.exports = {
    objectToQueryString
};