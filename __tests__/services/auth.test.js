const AletheiaSDK = require('../../AletheiaSDK');

test('Authenticate User', async () => {
  const aletheiaSDK = new AletheiaSDK('YOUR_API_KEY', 'YOUR_AUTH_DOMAIN');
  const result = await aletheiaSDK.authentication.authenticate(aletheiaSDK, 'exampleUser', 'examplePassword');
  expect(result).toBeTruthy();
});
