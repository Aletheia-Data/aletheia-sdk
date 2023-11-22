const FetchService = require('../fetchService.js');

class DGII extends FetchService {
  /**
   * Create an instance of DGCPApi service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    super(apiKey);
    this.apiDomain = 'http://dgii.gov.do';
  }

  /**
   * Get total pages by releases.
   * @returns {Promise} A promise that resolves to the total pages of releases.
   */
  getContribuyentes() {
    const endpoint = `${this.apiDomain}/wsMovilDGII/WSMovilDGII.asmx?wsdl`;
    const headers = {
        'Content-Type': 'text/xml',
        SOAPAction: `${this.apiDomain}/GetContribuyentes`,
    };

    const data = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="${this.apiDomain}">
                        <soapenv:Header/>
                        <soapenv:Body>
                            <web:GetContribuyentes/>
                        </soapenv:Body>
                        </soapenv:Envelope>`;

    return this.postData(endpoint, data, headers);
  }
}

module.exports = DGII;
