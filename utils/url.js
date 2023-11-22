function getDomainFromUrl(url) {
    // Create a new URL object
    const urlObject = new URL(url);
  
    // Access the hostname property to get the domain
    const domain = urlObject.hostname;
  
    return domain;
  }
  
  module.exports = { getDomainFromUrl };