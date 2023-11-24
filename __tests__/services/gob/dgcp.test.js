const AletheiaSDK = require('../../../AletheiaSDK');

// Full documentation: https://api.dgcp.gob.do/api/docs/
test('Get DGCP Data - Get Release', async () => {
  const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
  const result = await aletheiaSDK.opendata.gob('dgcp').getReleases();
  expect(result).toBeDefined();
});

test('Get DGCP Data - Get Release by OCID', async () => {
    const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
    const OCID = 'ocds-6550wx-DGCP-CCC-CP-2020-0001';
    const result = await aletheiaSDK.opendata.gob('dgcp').getReleaseByOcid(OCID);
    expect(result).toBeDefined();
  }, 20000);