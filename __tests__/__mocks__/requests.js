// File: __mocks__/requests.js

/**
 * Mock module for RequestUtils.
 */

// Mocked data for testing
const mockedData = {
    'https://api.example.com/data': { data: 'mocked data for fetchData' },
    'https://api.example.com/post': { data: 'mocked data for postData' },
  };
  
  // Mock the get method
  async function get(url, headers) {
    // Simulate an asynchronous operation
    return new Promise((resolve) => {
      // Resolve with the mocked data for the specified URL
      resolve({ data: mockedData[url] });
    });
  }
  
  // Mock the post method
  async function post(url, headers, body) {
    // Simulate an asynchronous operation
    return new Promise((resolve) => {
      // Resolve with the mocked data for the specified URL
      resolve({ data: mockedData[url] });
    });
  }
  
  // Export the mocked methods
  module.exports = {
    get,
    post,
  };
  