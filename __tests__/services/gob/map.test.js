const AletheiaSDK = require('../../../AletheiaSDK');

// Full documentation: https://map.gob.do/api/datos_abiertos
test('Get MAP Data', async () => {
  const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
  const result = await aletheiaSDK.opendata.gob('map').datosAbiertos('servicios_publicos', 'json');
  expect(result).toBeDefined();
});