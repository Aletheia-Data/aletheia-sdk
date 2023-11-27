const AletheiaSDK = require('../../../AletheiaSDK');

test('Get Developer Digital APIs Data', async () => {
  const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
  const result = await aletheiaSDK.opendata.gob('digital').getApis();
  expect(result).toBeDefined();
});

test('Get Developer Digital API Data', async () => {
    const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
    const id = "ff9ce928-e16e-4ea9-9ce9-28e16e1ea96e";
    const result = await aletheiaSDK.opendata.gob('digital').getApisById(id);
    expect(result).toBeDefined();
  });