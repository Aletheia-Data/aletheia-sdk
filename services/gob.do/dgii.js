const { parseXml } = require('../../utils/xmlParser.js');
const FetchService = require('../fetchService.js');
const { composeSoapXml } = require('../../utils/soap.js');

class DGII extends FetchService {
  constructor(apiKey) {
    super(apiKey);
    this.apiDomain = 'https://dgii.gov.do';
    this.wsdlEndpoint = '/wsMovilDGII/WSMovilDGII.asmx?WSDL';
  }

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
      const result = resultBody[`${operation}Response`][0][`${operation}Result`][0];
      xmlResult['data'] = result ? JSON.parse(result) : result;
      return xmlResult;
    } catch (error) {
      console.error(`Error calling ${operation} operation:`, error);
      throw error; // Rethrow the error for proper error handling at the higher level
    }
  }

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

  getContribuyentesCount(rnc) {
    const requestXml = composeSoapXml(`
      <GetContribuyentesCount xmlns="http://dgii.gov.do/">
        <value>${rnc}</value>
        <IMEI>""</IMEI>
      </GetContribuyentesCount>
    `);

    return this.callSoapOperation('GetContribuyentesCount', requestXml);
  }

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

  getVehiculoPorDATAMATRIX(value, IMEI) {
    const requestXml = composeSoapXml(`
      <GetVehiculoPorDATAMATRIX xmlns="http://dgii.gov.do/">
        <value>${value}</value>
        <IMEI>${IMEI || ''}</IMEI>
      </GetVehiculoPorDATAMATRIX>
    `);

    return this.callSoapOperation('GetVehiculoPorDATAMATRIX', requestXml);
  }

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
