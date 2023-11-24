const AletheiaSDK = require('../../../AletheiaSDK');
const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');

// Variables
const rncContribuyente = '130102058';
const codigoBusqueda = 'ABC123';
const patronBusquedaDocumento = 1;
const valueVehiculo = 'DATAMATRIX123';
const rncComprador = rncContribuyente;
const ncfContribuyente = 'B0100000003';
const codSeguridad = '789012';
const solicitud = 'SOLICITUD123';
const IMEI = 'your_imei_value';

test('Get DGII Contribuyente', async () => {
    const result = await aletheiaSDK.opendata.gob('dgii').getContribuyentes(rncContribuyente);
    expect(result).toBeDefined();
});

test('Get DGII Contribuyente Count', async () => {
    const result = await aletheiaSDK.opendata.gob('dgii').getContribuyentesCount(rncContribuyente);
    expect(result).toBeDefined();
}, 20000);

test('Get DGII Documento', async () => {
    const result = await aletheiaSDK.opendata.gob('dgii').getDocumento(codigoBusqueda, patronBusquedaDocumento, IMEI);
    expect(result).toBeDefined();
});

test('Get DGII DATAMATRIX', async () => {
    const result = await aletheiaSDK.opendata.gob('dgii').getVehiculoPorDATAMATRIX(valueVehiculo, IMEI);
    expect(result).toBeDefined();
}, 10000);

test('Get DGII NFC', async () => {
    const result = await aletheiaSDK.opendata.gob('dgii').getNCF(rncContribuyente, ncfContribuyente, IMEI);
    expect(result).toBeDefined();
});

test('Get DGII NFC2', async () => {
    const result = await aletheiaSDK.opendata.gob('dgii').getNCF2(rncContribuyente, ncfContribuyente, rncComprador, codSeguridad, IMEI);
    expect(result).toBeDefined();
});

test('Get DGII Solicitud', async () => {
    const result = await aletheiaSDK.opendata.gob('dgii').getSolicitud(rncContribuyente, solicitud, IMEI);
    expect(result).toBeDefined();
});
