const AletheiaSDK = require('../../AletheiaSDK');

test('Get Citizen Data', async () => {
  const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
  const cedula = 'XXX';
  const result = await aletheiaSDK.services.validateCitizenCedula(cedula);
  expect(result).toBeDefined();
});
