const FetchService = require('../fetchService.js');

/**
 * DGCP Class
 * 
 * Represents a client for interacting with the DGCP (Dirección General de Contrataciones Públicas) API.
 * This class extends the FetchService class and provides methods for retrieving information about government releases,
 * including details about suppliers, procuring entities, and releases related to Covid conditions.
 *
 * @category Gob.do
 * @class
 * @extends FetchService
 */
class DGCP extends FetchService {
  /**
   * Create an instance of DGCPApi service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    super(apiKey);
    this.apiDomain = 'https://api.dgcp.gob.do';
  }

  /**
   * Get total pages by releases.
   * @returns {Promise} A promise that resolves to the total pages of releases.
   */
  getReleases() {
    const endpoint = `${this.apiDomain}/api/releases`;
    return this.fetchData(endpoint);
  }

  /**
   * Get release by ID.
   * @param {string} ocid - The OCID of the release.
   * @returns {Promise} A promise that resolves to the release data.
   */
  getReleaseByOcid(ocid) {
    const endpoint = `${this.apiDomain}/api/release/${ocid}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get releases.
   * @param {string} page - The page number.
   * @returns {Promise} A promise that resolves to an array of releases.
   */
  getReleasesByPage(page) {
    const endpoint = `${this.apiDomain}/api/releases/${page}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get releases by year.
   * @param {string} year - The year of release.
   * @param {string} page - The page number.
   * @returns {Promise} A promise that resolves to an array of releases for the specified year and page.
   */
  getReleasesByYear(year, page) {
    const endpoint = `${this.apiDomain}/api/year/${year}/${page}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get total pages releases per year.
   * @param {string} year - The year of release.
   * @returns {Promise} A promise that resolves to the total pages of releases for the specified year.
   */
  getTotalPagesByYear(year) {
    const endpoint = `${this.apiDomain}/api/year/${year}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get releases by supplier.
   * @param {string} supplier - The name of the supplier.
   * @param {string} page - The page number.
   * @returns {Promise} A promise that resolves to an array of releases for the specified supplier and page.
   */
  getReleasesBySupplier(supplier, page) {
    const endpoint = `${this.apiDomain}/api/proveedor/${supplier}/${page}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get releases by procuringEntity.
   * @param {string} procuringEntity - The name of the procuringEntity.
   * @param {string} page - The page number.
   * @returns {Promise} A promise that resolves to an array of releases for the specified procuringEntity and page.
   */
  getReleasesByProcuringEntity(procuringEntity, page) {
    const endpoint = `${this.apiDomain}/api/uc/${procuringEntity}/${page}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get releases by Covid.
   * @param {boolean} condition - The condition for Covid releases.
   * @param {string} page - The page number.
   * @returns {Promise} A promise that resolves to an array of releases based on the Covid condition and page.
   */
  getReleasesByCovid(condition, page) {
    const endpoint = `${this.apiDomain}/api/covid/${page}?condition=${condition}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get total pages releases per supplier.
   * @param {string} supplier - The name of the supplier.
   * @returns {Promise} A promise that resolves to the total pages of releases for the specified supplier.
   */
  getTotalPagesBySupplier(supplier) {
    const endpoint = `${this.apiDomain}/api/proveedor/${supplier}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get total pages releases per procuringEntity.
   * @param {string} procuringEntity - The name of the procuringEntity.
   * @returns {Promise} A promise that resolves to the total pages of releases for the specified procuringEntity.
   */
  getTotalPagesByProcuringEntity(procuringEntity) {
    const endpoint = `${this.apiDomain}/api/uc/${procuringEntity}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get total pages by Covid releases.
   * @param {boolean} condition - The condition for Covid releases.
   * @returns {Promise} A promise that resolves to the total pages of releases based on the Covid condition.
   */
  getTotalPagesByCovid(condition) {
    const endpoint = `${this.apiDomain}/api/covid?condition=${condition}`;
    return this.fetchData(endpoint);
  }
}

module.exports = DGCP;
