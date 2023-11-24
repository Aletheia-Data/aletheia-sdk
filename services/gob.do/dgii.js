const { parseXml } = require('../../utils/xmlParser.js');
const FetchService = require('../fetchService.js');
const { composeSoapXml } = require('../../utils/soap.js');

/**
 * DGII Class
 * 
 * Represents a client for interacting with the DGII (Dirección General de Impuestos Internos) SOAP API.
 * This class extends the FetchService class and provides methods for various operations such as retrieving
 * taxpayer information, vehicle details, NCF (Número de Comprobante Fiscal), and more.
 *
 * @class
 * @extends FetchService
 */
class DGII extends FetchService {
  /**
   * Constructor for DGII class.
   * 
   * @constructor
   * @param {string} apiKey - The API key used for authentication with the DGII API.
   */
  constructor(apiKey) {
    super(apiKey);
    this.apiDomain = 'https://dgii.gov.do';
    this.wsdlEndpoint = '/wsMovilDGII/WSMovilDGII.asmx?WSDL';
  }

  /**
   * Calls a SOAP operation with the provided operation name and request XML.
   * Handles constructing the SOAP request, sending it, and parsing the response.
   * 
   * @async
   * @param {string} operation - The name of the SOAP operation to call.
   * @param {string} requestXml - The SOAP request XML for the operation.
   * @returns {Promise<Object>} - A Promise that resolves to the SOAP response.
   * @throws {Error} - Throws an error if there is an issue with the SOAP operation.
   */
  async callSoapOperation(operation, requestXml) {
    const endpoint = `${this.apiDomain}${this.wsdlEndpoint}`;
    const headers = {
      'Content-Type': 'application/soap+xml; charset=utf-8',
      'soapAction': `${this.apiDomain}/${operation}`,
    };

    try {
      const xmlResult = await this.postData(endpoint, requestXml, headers);
      const parsedResult = await parseXml(await xmlResult.data);
      const resultBody = parsedResult['soap:Envelope']['soap:Body'][0];
      console.log(`Result from ${operation} operation:`, JSON.stringify(resultBody, null, 2));
      const result = resultBody[`${operation}Response`][0][`${operation}Result`][0];
      xmlResult['data'] = result ? JSON.parse(result) : result;
      return xmlResult;
    } catch (error) {
      console.error(`Error calling ${operation} operation:`, error);
      throw error; // Rethrow the error for proper error handling at the higher level
    }
  }

  /**
   * Retrieves taxpayer information based on the provided RNC (Registro Nacional de Contribuyentes).
   * 
   * @param {string} rnc - The RNC for the taxpayer.
   * @returns {Promise<Object>} - A Promise that resolves to the SOAP response for the operation.
   */
  getContribuyentes(rnc) {
    const requestXml = composeSoapXml(`
      <GetContribuyentes xmlns="http://dgii.gov.do/">
        <value>${rnc}</value>
        <patronBusqueda>0</patronBusqueda>
        <inicioFilas>1</inicioFilas>
        <filaFilas>1</filaFilas>
        <IMEI>""</IMEI>
      </GetContribuyentes>
    `);

    return this.callSoapOperation('GetContribuyentes', requestXml);
  }

  /**
   * Retrieves the count of taxpayers based on the provided RNC.
   * 
   * @param {string} rnc - The RNC for the taxpayer.
   * @returns {Promise<Object>} - A Promise that resolves to the SOAP response for the operation.
   */
  getContribuyentesCount(rnc) {
    const requestXml = composeSoapXml(`
      <GetContribuyentesCount xmlns="http://dgii.gov.do/">
        <value>${rnc}</value>
        <IMEI>""</IMEI>
      </GetContribuyentesCount>
    `);

    return this.callSoapOperation('GetContribuyentesCount', requestXml);
  }

  /**
   * Retrieves document information based on the provided search parameters.
   * 
   * @param {string} codigoBusqueda - The code for the search.
   * @param {string} patronBusqueda - The search pattern.
   * @param {string} IMEI - The IMEI (International Mobile Equipment Identity) value.
   * @returns {Promise<Object>} - A Promise that resolves to the SOAP response for the operation.
   */
  getDocumento(codigoBusqueda, patronBusqueda, IMEI) {
    const requestXml = composeSoapXml(`
      <GetDocumento xmlns="http://dgii.gov.do/">
        <codigoBusqueda>${codigoBusqueda}</codigoBusqueda>
        <patronBusqueda>${patronBusqueda}</patronBusqueda>
        <IMEI>${IMEI || ''}</IMEI>
      </GetDocumento>
    `);

    return this.callSoapOperation('GetDocumento', requestXml);
  }

  /**
   * Retrieves vehicle information based on the provided DATAMATRIX value.
   * 
   * @param {string} value - The DATAMATRIX value for the vehicle.
   * @param {string} IMEI - The IMEI (International Mobile Equipment Identity) value.
   * @returns {Promise<Object>} - A Promise that resolves to the SOAP response for the operation.
   */
  getVehiculoPorDATAMATRIX(value, IMEI) {
    const requestXml = composeSoapXml(`
      <GetVehiculoPorDATAMATRIX xmlns="http://dgii.gov.do/">
        <value>${value}</value>
        <IMEI>${IMEI || ''}</IMEI>
      </GetVehiculoPorDATAMATRIX>
    `);

    return this.callSoapOperation('GetVehiculoPorDATAMATRIX', requestXml);
  }

  /**
   * Retrieves NCF (Número de Comprobante Fiscal) information based on the provided RNC, NCF, and IMEI.
   * 
   * @param {string} RNC - The RNC for the taxpayer.
   * @param {string} NCF - The NCF for the transaction.
   * @param {string} IMEI - The IMEI (International Mobile Equipment Identity) value.
   * @returns {Promise<Object>} - A Promise that resolves to the SOAP response for the operation.
   */
  getNCF(RNC, NCF, IMEI) {
    const requestXml = composeSoapXml(`
      <GetNCF xmlns="http://dgii.gov.do/">
        <RNC>${RNC}</RNC>
        <NCF>${NCF}</NCF>
        <IMEI>${IMEI || ''}</IMEI>
      </GetNCF>
    `);

    return this.callSoapOperation('GetNCF', requestXml);
  }

  /**
   * Retrieves additional NCF (Número de Comprobante Fiscal) information based on extended parameters.
   * 
   * @param {string} RNC - The RNC for the taxpayer.
   * @param {string} NCF - The NCF for the transaction.
   * @param {string} rncComprador - The RNC of the buyer.
   * @param {string} codSeguridad - The security code.
   * @param {string} IMEI - The IMEI (International Mobile Equipment Identity) value.
   * @returns {Promise<Object>} - A Promise that resolves to the SOAP response for the operation.
   */
  getNCF2(RNC, NCF, rncComprador, codSeguridad, IMEI) {
    const requestXml = composeSoapXml(`
      <GetNCF2 xmlns="http://dgii.gov.do/">
        <RNC>${RNC}</RNC>
        <NCF>${NCF}</NCF>
        <rncComprador>${rncComprador}</rncComprador>
        <codSeguridad>${codSeguridad}</codSeguridad>
        <IMEI>${IMEI || ''}</IMEI>
      </GetNCF2>
    `);

    return this.callSoapOperation('GetNCF2', requestXml);
  }

  /**
   * Retrieves vehicle plate information based on the provided RNC, plate, and IMEI.
   * 
   * @param {string} RNC - The RNC for the taxpayer.
   * @param {string} Placa - The vehicle plate.
   * @param {string} IMEI - The IMEI (International Mobile Equipment Identity) value.
   * @returns {Promise<Object>} - A Promise that resolves to the SOAP response for the operation.
   */
  getPlaca(RNC, Placa, IMEI) {
    const requestXml = composeSoapXml(`
      <GetPlaca xmlns="http://dgii.gov.do/">
        <RNC>${RNC}</RNC>
        <Placa>${Placa}</Placa>
        <IMEI>${IMEI || ''}</IMEI>
      </GetPlaca>
    `);

    return this.callSoapOperation('GetPlaca', requestXml);
  }

  /**
   * Retrieves information for a specific solicitud (request) based on the provided RNC, solicitud, and IMEI.
   * 
   * @param {string} RNC - The RNC for the taxpayer.
   * @param {string} solicitud - The solicitud (request) identifier.
   * @param {string} IMEI - The IMEI (International Mobile Equipment Identity) value.
   * @returns {Promise<Object>} - A Promise that resolves to the SOAP response for the operation.
   */
  getSolicitud(RNC, solicitud, IMEI) {
    const requestXml = composeSoapXml(`
      <GetSolicitud xmlns="http://dgii.gov.do/">
        <RNC>${RNC}</RNC>
        <solicitud>${solicitud}</solicitud>
        <IMEI>${IMEI || ''}</IMEI>
      </GetSolicitud>
    `);

    return this.callSoapOperation('GetSolicitud', requestXml);
  }
}

module.exports = DGII;
