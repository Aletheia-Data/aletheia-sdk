const AletheiaSDK = require('../../../AletheiaSDK');

// Full documentation: https://webapi.mt.gob.do/
test('Get MIT Division Data', async () => {
    const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
    const result = await aletheiaSDK.opendata.gob('mit').GetTiposDivision();
    console.log('MIT Division Data:', result);
    expect(result).toBeDefined();
  });