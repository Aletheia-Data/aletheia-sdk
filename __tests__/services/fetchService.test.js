// File: __tests__/fetchService.test.js

// Import the FetchService class
const FetchService = require('../../services/fetchService');

// Mock the requests module
jest.mock('../__mocks__/requests');

// Describe block for FetchService tests
describe('FetchService', () => {
  // Test case for fetchData method
  test('fetchData method should fetch data from the API', async () => {
    // Create an instance of FetchService
    const fetchService = new FetchService('your_api_key');

    // Specify the API endpoint
    const endpoint = 'https://dummyjson.com/products/1';

    // Call the fetchData method
    const result = await fetchService.fetchData(endpoint);

    expect(result).toBeDefined();
  });

  // Test case for postData method
  test('postData method should post data to the API', async () => {
    // Create an instance of FetchService
    const fetchService = new FetchService('your_api_key');

    // Specify the API endpoint and request body
    const endpoint = 'https://dummyjson.com/products/add';
    const body = { key: 'value' };

    // Call the postData method
    const result = await fetchService.postData(endpoint, body);

    expect(result).toBeDefined();
  });
});
