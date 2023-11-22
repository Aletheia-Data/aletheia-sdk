const FetchService = require('./fetchService.js');

class Services extends FetchService {
  /**
   * Create an instance of OpenData service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    super(apiKey);
  }

  /**
   * Validate a citizen's ID card number
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
