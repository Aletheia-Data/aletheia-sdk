const FetchService = require('./fetchService.js');
const OpenAI = require('openai');

/**
 * Services Class
 * 
 * Represents a client for interacting with various open services for the Dominican citizen.
 * This class extends the FetchService class and provides methods for different use cases.
 *
 * @category Open Services
 * @class
 * @extends FetchService
 */
class Services extends FetchService {
  /**
   * Create an instance of OpenData service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    super(apiKey);
    // Set up OpenAI API credentials
    this.openai = new OpenAI({ apiKey: 'xxx...' });
  }

  /**
  * Validate a citizen's ID card number.<br /><br />Full documentation: <a href="https://developer.digital.gob.do/apis/ff9ce928-e16e-4ea9-9ce9-28e16e1ea96e" target="_blank">https://developer.digital.gob.do/apis/ff9ce928-e16e-4ea9-9ce9-28e16e1ea96e</a>
  * @param {string} cedula - The ID number of the citizen to be validated.
  * @returns {Promise} A Promise that resolves with the validation result.
  * @example
  * // Example: Retrieve citizen data for the Dominican Republic
  * // Full documentation: https://developer.digital.gob.do/apis/ff9ce928-e16e-4ea9-9ce9-28e16e1ea96e
  * async function getCitizenData() {
  *   try {
  *     const isValid = await aletheiaSDK.services.validateCitizenCedula('XXX');
  *     console.log('Citizen Cedula:', isValid);
  *   } catch (error) {
  *     console.error('Error retrieving citizen data:', error);
  *   }
  * }
  * getCitizenData();
  * @returns {Object} Returns the validation result.
  */
  validateCitizenCedula(cedula) {
    // API endpoint for citizen data validation
    const endpoint = `https://api.digital.gob.do/v3/cedulas/${cedula}/validate`;

    return this.fetchData(endpoint);
  }

  // Function to generate an answer based on the content and question
  async generateAnswer(content, question) {
    console.log(content);
    try {
      const params = {
        messages: [
          { role: 'assistant', content: JSON.stringify(content.data) },
          { role: 'user', content: question },
        ],
        model: 'gpt-3.5-turbo',
      };
      const chatCompletion = await this.openai.chat.completions.create(params);
      return chatCompletion;
    } catch (error) {
      console.error('Error generating answer:', error);
      return null;
    }
  }
}

module.exports = Services;
