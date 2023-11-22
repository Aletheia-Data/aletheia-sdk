const Auth = require('./services/auth.js');
const OpenData = require('./services/openData.js');
const Services = require('./services/services.js');

class AletheiaSDK {
  /**
   * Create an instance of AletheiaSDK.
   * @param {string} apiKey - The API key for authentication.
   * @param {string} authDomain - The authentication domain for AletheiaSDK.
   */
  constructor(apiKey, authDomain) {
    this.authentication = new Auth(apiKey, authDomain);
    this.services = new Services(apiKey);
    this.opendata = new OpenData(apiKey);
  }
}

module.exports = AletheiaSDK;
