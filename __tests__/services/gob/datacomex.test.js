const AletheiaSDK = require('../../../AletheiaSDK');

test('Get Developer Digital APIs Data', async () => {
  const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
  const result = await aletheiaSDK.opendata.gob('datacomex').getImports();
  expect(result).toBeDefined();
});