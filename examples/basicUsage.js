
const AletheiaSDK = require('../AletheiaSDK'); 
const { get } = require('../dist/bundle');

// Replace 'YOUR_API_KEY' and 'YOUR_AUTH_DOMAIN' with your actual API key and authentication domain
const apiKey = 'YOUR_API_KEY';
const authDomain = 'YOUR_AUTH_DOMAIN';

// Initialize the Aletheia SDK
const aletheiaSDK = new AletheiaSDK(apiKey, authDomain);

// Example: Authenticate a user
const username = 'exampleUser';
const password = 'examplePassword';

const authenticationResult = aletheiaSDK.authentication.authenticate(username, password);
console.log('Authentication Result:', authenticationResult);

// Example: Retrieve citizen data for the Dominican Republic
// Full documentation: https://developer.digital.gob.do/apis/ff9ce928-e16e-4ea9-9ce9-28e16e1ea96e
async function getCitizenData() {
  try {
    const isValid = await aletheiaSDK.services.validateCitizenCedula('XXX');
    console.log('Citizen Cedula:', isValid);
  } catch (error) {
    console.error('Error retrieving citizen data:', error);
  }
}

// Example: Retrieve fuel prices for the Dominican Republic
// Full documentation: https://developer.digital.gob.do/apis/fdf3319d-521e-4364-b331-9d521e636442
async function getFuelPrices() {
  try {
    const fuelPrices = await aletheiaSDK.opendata.fuelPrices('date', '2023-11-01');
    console.log('Fuel Prices:', fuelPrices);
  } catch (error) {
    console.error('Error retrieving fuel prices:', error);
  }
}

// Example: Retrieve territories for the Dominican Republic
// Full documentation: https://developer.digital.gob.do/apis/34995f58-a45f-4b9e-995f-58a45f2b9e92
async function getTerritories() {
    try {
        const provinces = await aletheiaSDK.opendata.getTerritoryData('provinces');
        console.log('Provinces:', provinces);

        const municipalities = await aletheiaSDK.opendata.getTerritoryData('municipalities', {
                provinceCode: '11',
                regionCode: '08',
        });
        console.log('Municipalities:', municipalities);
    } catch (error) {
        console.error('Error retrieving territories:', error);
    }
}

// Example: Retrieve map data for the Dominican Republic
// Full documentation: https://map.gob.do/api/datos_abiertos
async function getMapData() {
    try {
        const mapData = await aletheiaSDK.opendata.gob('map').datosAbiertos('servicios_publicos', 'json');
        console.log('Map Data:', mapData);
    } catch (error) {
        console.error('Error retrieving map data:', error);
    }
}

// Example: Retrieve DGCP data for the Dominican Republic
// Full documentation: https://map.gob.do/api/datos_abiertos
async function getDGCPData() {
    try {
        const dgcpData = await aletheiaSDK.opendata.gob('dgcp').getReleases();
        console.log('DGCP Data:', dgcpData);

        const dgcpDataOCID = await aletheiaSDK.opendata.gob('dgcp').getReleaseByOcid('ocds-6550wx-DGCP-CCC-CP-2020-0001');
        console.log('DGCP Data OCID:', dgcpDataOCID);
    } catch (error) {
        console.error('Error retrieving DGCP data:', error);
    }
}

// Example: Retrieve DGII data for the Dominican Republic
// Full documentation: https://dgii.gov.do/wsMovilDGII/WSMovilDGII.asmx
const dgiiService = aletheiaSDK.opendata.gob('dgii');
// test numbers
const rncContribuyente = '130102058';
const ncfContribuyente = 'B0100000003';
async function getDGIIContribuyentes() {
    try {
        const result = await dgiiService.getContribuyentes(rncContribuyente);
        console.log('GetContribuyentes Result:', result);
    } catch (error) {
        console.error('Error retrieving GetContribuyentes data:', error);
    }
}

async function getDGIIContribuyentesCount() {
    try {
        const result = await dgiiService.getContribuyentesCount(rncContribuyente);
        console.log('GetContribuyentesCount Result:', result);
    } catch (error) {
        console.error('Error retrieving GetContribuyentesCount data:', error);
    }
}

async function getDGIIDocumento() {
    try {
        const codigoBusqueda = 'ABC123';
        const patronBusquedaDocumento = 1;
        const imeiDocumento = 'your_imei_value';
        const result = await dgiiService.getDocumento(codigoBusqueda, patronBusquedaDocumento, imeiDocumento);
        console.log('GetDocumento Result:', result);
    } catch (error) {
        console.error('Error retrieving GetDocumento data:', error);
    }
}

async function getDGIIVehiculoPorDATAMATRIX() {
    try {
        const valueVehiculo = 'DATAMATRIX123';
        const imeiVehiculo = 'your_imei_value';
        const result = await dgiiService.getVehiculoPorDATAMATRIX(valueVehiculo, imeiVehiculo);
        console.log('GetVehiculoPorDATAMATRIX Result:', result);
    } catch (error) {
        console.error('Error retrieving GetVehiculoPorDATAMATRIX data:', error);
    }
}

async function getDGIINCF() {
    try {
        const imeiNCF = 'your_imei_value';
        const result = await dgiiService.getNCF(rncContribuyente, ncfContribuyente, imeiNCF);
        console.log('GetNCF Result:', result);
    } catch (error) {
        console.error('Error retrieving GetNCF data:', error);
    }
}

async function getDGIINCF2() {
    try {
        const rncComprador = '130102058';
        const codSeguridad = '789012';
        const imeiNCF2 = 'your_imei_value';
        const result = await dgiiService.getNCF2(rncContribuyente, ncfContribuyente, rncComprador, codSeguridad, imeiNCF2);
        console.log('GetNCF2 Result:', result);
    } catch (error) {
        console.error('Error retrieving GetNCF2 data:', error);
    }
}

async function getSolicitud() {
    try {
        const solicitud = 'SOLICITUD123';
        const IMEI = 'your_imei_value';
        const dgiiData = await aletheiaSDK.opendata.gob('dgii').getSolicitud(rncContribuyente, solicitud, IMEI);
        console.log('Solicitud Data:', dgiiData);
    } catch (error) {
        console.error('Error retrieving Solicitud data:', error);
    }
}


async function getAletheias() {
    try {
        const dgiiData = await aletheiaSDK.opendata.ale().getUploads();
        console.log('Solicitud Data:', dgiiData);
    } catch (error) {
        console.error('Error retrieving Solicitud data:', error);
    }
}

async function getDatosAbiertosDataset() {
    try {
        // const dataset = 'nomina-miembros-policiales-2019';
        const dataset = 'trafico-2020';
        const daData = await aletheiaSDK.opendata.gob('datos-abiertos').getDatasetJSON(dataset);
        console.log('Datos Abiertos Data:', daData.datasetJSON);
    } catch (error) {
        console.error('Error retrieving Datos Abiertos data:', error);
    }
}

async function getDatosAbiertosDatasets() {
    try {
        const dataset = 'recaudaciones-sirite-2021-2022';
        const daData = await aletheiaSDK.opendata.gob('datos-abiertos').getDatasetJSON(dataset);
        console.log('Datos Abiertos Data:', daData.datasetJSON);
    } catch (error) {
        console.error('Error retrieving Datos Abiertos data:', error);
    }
}

async function getDatasetCSVUrls() {
    try {
        // const dataset = 'nomina-miembros-policiales-2019';
        // const dataset = 'trafico-2020';
        const dataset = 'recaudaciones-sirite-2021-2022';
        const daData = await aletheiaSDK.opendata.gob('datos-abiertos').getDatasetCSVUrls(dataset);
        console.log('Datos Abiertos Data:', daData);
    } catch (error) {
        console.error('Error retrieving Datos Abiertos data:', error);
    }
}


async function getMITDivision() {
    try {
        // disabling ssl verification as without it the method trows an error: UNABLE_TO_VERIFY_LEAF_SIGNATURE
        // https://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
        // TODO: find a better solution
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
        const mitData = await aletheiaSDK.opendata.gob('mit').getTiposDivision();
        console.log('MIT Division Data:', mitData);
    } catch (error) {
        console.error('Error retrieving MIT data:', error);
    }
}

async function getMITDivisiones() {
    try {
        // disabling ssl verification as without it the method trows an error: UNABLE_TO_VERIFY_LEAF_SIGNATURE
        // https://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
        // TODO: find a better solution
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
        const mitData = await aletheiaSDK.opendata.gob('mit').getDivisiones();
        console.log('MIT Division Data:', mitData);
    } catch (error) {
        console.error('Error retrieving MIT data:', error);
    }
}

async function getMITAvailableYears() {
    try {
        // disabling ssl verification as without it the method trows an error: UNABLE_TO_VERIFY_LEAF_SIGNATURE
        // https://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
        // TODO: find a better solution
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
        const mitData = await aletheiaSDK.opendata.gob('mit').getAvailableYears();
        console.log('MIT Division Data:', mitData);
    } catch (error) {
        console.error('Error retrieving MIT data:', error);
    }
}

async function createMITEmpresa() {
    try {
        // disabling ssl verification as without it the method trows an error: UNABLE_TO_VERIFY_LEAF_SIGNATURE
        // https://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
        // TODO: find a better solution
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
        const params = {
            "nombre": "Aletheia",
            "rnc": "123456789",
            "tipo": "1",
            "direccion": "Calle 1",
            "telefono": "8091234567",
            "correo": "test@text.com"
        }
        const mitEmpresaData = await aletheiaSDK.opendata.gob('mit').createEmpresa(params);
        console.log('MIT Empresa Data:', mitEmpresaData);
    } catch (error) {
        console.error('Error retrieving MIT data:', error);
    }
}

async function getConsultaMIT() {
    try {
        // disabling ssl verification as without it the method trows an error: UNABLE_TO_VERIFY_LEAF_SIGNATURE
        // https://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
        // TODO: find a better solution
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
        const mitEmpresaData = await aletheiaSDK.opendata.gob('mit').getConsulta('40253515910');
        console.log('MIT Empresa Data:', mitEmpresaData);
    } catch (error) {
        console.error('Error retrieving MIT data:', error);
    }
}

// Example: Retrieve APIs info from https://developer.digital.gob.do
async function getAPIs() {
    try {
      const apisList = await aletheiaSDK.opendata.gob('digital').getApis();
      console.log('Develper APIs:', apisList);
    } catch (error) {
      console.error('Error retrieving developer apis:', error);
    }
}

async function getAPI() {
    try {
      const id = "ff9ce928-e16e-4ea9-9ce9-28e16e1ea96e";
      const apiInfo = await aletheiaSDK.opendata.gob('digital').getApiById(id);
      console.log('Develper APIs:', apiInfo);
    } catch (error) {
      console.error('Error retrieving developer api:', error);
    }
}

async function getAmbiente(){
    const ambiente = await aletheiaSDK.opendata.gob('ambiente').getDocumentComments();
    console.log('Ambiente:', ambiente.data);
}

// getAmbiente();

async function getBanks(){
    const banks = await aletheiaSDK.opendata.getBanks();
    console.log('Banks:', banks.data);
}

getBanks();


// Call the methods
// getCitizenData();
// getFuelPrices();
// getTerritories();
// getMapData();
// getDGCPData();
// getDGIIContribuyentes();
// getDGIIContribuyentesCount();
// getDGIIDocumento();
// getDGIIVehiculoPorDATAMATRIX();
// getDGIINCF();
// getDGIINCF2();
// getSolicitud();
// getAletheias();
// getDatosAbiertosDataset();
// getDatosAbiertosDatasets();
// getDatasetCSVUrls();
// getMITDivision();
// getCitizenData();
// getMITDivisiones();
// getMITAvailableYears();
// createMITEmpresa();
//getConsultaMIT()
// getAPIs();
// getAPI();