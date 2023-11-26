// Import the FetchService module
const FetchService = require('../fetchService.js'); 

/**
 * Represents the Aletheia class, which extends the FetchService class.
 * This class provides methods to interact with the Aletheia API.
 * 
 * @category Aletheiadata.org
 * @extends FetchService
 */
class Aletheia extends FetchService {
  /**
   * Create an instance of the Aletheia service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    // Call the constructor of the parent class (FetchService)
    super(apiKey);
    // Set the API domain for Aletheia
    this.apiDomain = "https://admin.aletheiadata.org"
  }
  
  /**
   * Retrieves all Aletheias from the API.
   * @returns {Promise} A promise that resolves to the fetched Aletheias data.
   */
  getAletheias() {
    const endpoint = `${this.apiDomain}/aletheias`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves the count of Aletheias from the API.
   * @returns {Promise} A promise that resolves to the count of Aletheias.
   */
  getAletheiasCount() {
    const endpoint = `${this.apiDomain}/aletheias/count`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves a specific Aletheia by ID from the API.
   * @param {string} id - The ID of the Aletheia.
   * @returns {Promise} A promise that resolves to the fetched Aletheia data.
   */
  getAletheiaById(id) {
    const endpoint = `${this.apiDomain}/aletheias/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves all Alexandrias from the API.
   * @returns {Promise} A promise that resolves to the fetched Alexandrias data.
   */
  getAlexandrias() {
    const endpoint = `${this.apiDomain}/alexandrias`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves the count of Alexandrias from the API.
   * @returns {Promise} A promise that resolves to the count of Alexandrias.
   */
  getAlexandriasCount() {
    const endpoint = `${this.apiDomain}/alexandrias/count`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves a specific Alexandria by ID from the API.
   * @param {string} id - The ID of the Alexandria.
   * @returns {Promise} A promise that resolves to the fetched Alexandria data.
   */
  getAlexandriaById(id) {
    const endpoint = `${this.apiDomain}/alexandrias/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves all Categories from the API.
   * @returns {Promise} A promise that resolves to the fetched Categories data.
   */
  getCategories() {
    const endpoint = `${this.apiDomain}/categories`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves the count of Categories from the API.
   * @returns {Promise} A promise that resolves to the count of Categories.
   */
  getCategoriesCount() {
    const endpoint = `${this.apiDomain}/categories/count`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves a specific Category by ID from the API.
   * @param {string} id - The ID of the Category.
   * @returns {Promise} A promise that resolves to the fetched Category data.
   */
  getCategoryById(id) {
    const endpoint = `${this.apiDomain}/categories/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves all Departments from the API.
   * @returns {Promise} A promise that resolves to the fetched Departments data.
   */
  getDepartments() {
    const endpoint = `${this.apiDomain}/departments`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves the count of Departments from the API.
   * @returns {Promise} A promise that resolves to the count of Departments.
   */
  getDepartmentsCount() {
    const endpoint = `${this.apiDomain}/departments/count`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves a specific Department by ID from the API.
   * @param {string} id - The ID of the Department.
   * @returns {Promise} A promise that resolves to the fetched Department data.
   */
  getDepartmentById(id) {
    const endpoint = `${this.apiDomain}/departments/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves all Imports from the API.
   * @returns {Promise} A promise that resolves to the fetched Imports data.
   */
  getImports() {
    const endpoint = `${this.apiDomain}/imports`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves the count of Imports from the API.
   * @returns {Promise} A promise that resolves to the count of Imports.
   */
  getImportsCount() {
    const endpoint = `${this.apiDomain}/imports/count`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves a specific Import by ID from the API.
   * @param {string} id - The ID of the Import.
   * @returns {Promise} A promise that resolves to the fetched Import data.
   */
  getImportById(id) {
    const endpoint = `${this.apiDomain}/imports/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves all NFTs from the API.
   * @returns {Promise} A promise that resolves to the fetched NFTs data.
   */
  getNfts() {
    const endpoint = `${this.apiDomain}/nfts`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves the count of NFTs from the API.
   * @returns {Promise} A promise that resolves to the count of NFTs.
   */
  getNftsCount() {
    const endpoint = `${this.apiDomain}/nfts/count`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves a specific NFT by ID from the API.
   * @param {string} id - The ID of the NFT.
   * @returns {Promise} A promise that resolves to the fetched NFT data.
   */
  getNftById(id) {
    const endpoint = `${this.apiDomain}/nfts/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves all Sources from the API.
   * @returns {Promise} A promise that resolves to the fetched Sources data.
   */
  getSources() {
    const endpoint = `${this.apiDomain}/sources`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves the count of Sources from the API.
   * @returns {Promise} A promise that resolves to the count of Sources.
   */
  getSourcesCount() {
    const endpoint = `${this.apiDomain}/sources/count`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves a specific Source by ID from the API.
   * @param {string} id - The ID of the Source.
   * @returns {Promise} A promise that resolves to the fetched Source data.
   */
  getSourceById(id) {
    const endpoint = `${this.apiDomain}/sources/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves all Uploads from the API.
   * @returns {Promise} A promise that resolves to the fetched Uploads data.
   */
  getUploads() {
    const endpoint = `${this.apiDomain}/upload/files`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves the count of Uploads from the API.
   * @returns {Promise} A promise that resolves to the count of Uploads.
   */
  getUploadsCount() {
    const endpoint = `${this.apiDomain}/upload/files/count`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves a specific Upload by ID from the API.
   * @param {string} id - The ID of the Upload.
   * @returns {Promise} A promise that resolves to the fetched Upload data.
   */
  getUploadById(id) {
    const endpoint = `${this.apiDomain}/upload/files/${id}`;
    return this.fetchData(endpoint);
  }
}

// Export the Aletheia class for use in other modules
module.exports = Aletheia;
