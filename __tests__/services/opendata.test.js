const AletheiaSDK = require('../../AletheiaSDK');

test('Get Fuel Prices', async () => {
  const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
  const field = 'date';
  const value = '2022-11-11';
  const result = await aletheiaSDK.opendata.fuelPrices(field, value);
  expect(result).toBeDefined();
});

test('Get Provinces', async () => {
    const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
    const terrotory = 'provinces';
    const result = await aletheiaSDK.opendata.getTerritoryData(terrotory);
    expect(result).toBeDefined();
  });

test('Get Municipalities', async () => {
    const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
    const terrotory = 'municipalities';
    const params = {
        provinceCode: '11',
        regionCode: '08',
    };
    const result = await aletheiaSDK.opendata.getTerritoryData(terrotory, params);
    expect(result).toBeDefined();
  });