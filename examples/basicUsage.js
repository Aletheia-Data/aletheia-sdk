
const AletheiaSDK = require('../AletheiaSDK'); 
const { get } = require('../utils/requests');

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
getSolicitud();

