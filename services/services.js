const FetchService = require('./fetchService.js');

/**
 * Open Services Class
 * 
 * @category Open Services
 */
class Services extends FetchService {
  /**
   * Create an instance of OpenData service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    super(apiKey);
  }

  /**
   * Validate a citizen's ID card number.<br /><br />Full documentation: <a href="https://developer.digital.gob.do/apis/ff9ce928-e16e-4ea9-9ce9-28e16e1ea96e" target="_blank">https://developer.digital.gob.do/apis/ff9ce928-e16e-4ea9-9ce9-28e16e1ea96e</a>
   * @param {string} cedula - The ID number of the citizen to be validated.
   * @returns {Promise} A Promise that resolves with the validation result.
   */
  validateCitizenCedula(cedula) {
    // API endpoint for citizen data validation
    const endpoint = `https://api.digital.gob.do/v3/cedulas/${cedula}/validate`;

    return this.fetchData(endpoint);
  }
}

module.exports = Services;
