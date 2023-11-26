// Import the FetchService module
const FetchService = require('../fetchService.js');
const { fetchAndParseHTML, fetchAndParseCSV } = require('../../utils/parse.js');
const { getDomainFromUrl } = require("../../utils/url");

/**
 * Represents Datos Abiertos class, which extends the FetchService class.
 * This class provides methods to interact with the Datos Abiertos Datasets.
 * 
 * @category Datos.gob.do
 * @class
 * @extends FetchService
 */
class DatosAbiertos extends FetchService {
  /**
   * Create an instance of the Datos Abiertos service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    // Call the constructor of the parent class (FetchService)
    super(apiKey);
    // Set the API domain for Datos Abiertos
    this.apiDomain = "https://datos.gob.do/dataset";
  }

  /**
  * Retrieves and parses the dataset Datos Abiertos from the API.
  * @param {string} dataset - The name of the dataset to retrieve.
  * * @example
  * // Example: Retrieve fuel prices for the Dominican Republic
  * // Full documentation: https://developer.digital.gob.do/apis/fdf3319d-521e-4364-b331-9d521e636442
  * async function getDatosAbiertosDatasets() {
  *     try {
  *         const dataset = 'recaudaciones-sirite-2021-2022';
  *         const daData = await aletheiaSDK.opendata.gob('datos-abiertos').getDatasetJSON(dataset);
  *         console.log('Datos Abiertos Data:', daData.datasetJSON);
  *     } catch (error) {
  *         console.error('Error retrieving Datos Abiertos data:', error);
  *     }
  * }
  * getDatosAbiertosDatasets();
  * @returns {Promise} A promise that resolves to the fetched Datos Abiertos data.
  */
  async getDatasetJSON(dataset) {
    const endpoint = `${this.apiDomain}/${dataset}`;

    try {
      const datasetLink = await this.getDatasetCSVUrls(dataset);

      if (datasetLink.length > 1) {
        const promises = datasetLink.map(async (link) => {
          const datasetJSON = await fetchAndParseCSV(link);
          return {
            datasetJSON,
            provider: getDomainFromUrl(endpoint),
            datasetURL: link,
            endpoint,
          };
        });

        return Promise.all(promises);
      } else if (datasetLink.length === 1) {
        const datasetJSON = await fetchAndParseCSV(datasetLink[0]);
        return {
          datasetJSON,
          provider: getDomainFromUrl(endpoint),
          datasetURL: datasetLink,
          endpoint,
        };
      } else {
        // Adjust this part based on your requirements when no datasetLink is available
        throw new Error('No dataset link available.');
      }
    } catch (error) {
      throw error;
    }
  }

  /**
  * Retrieves and parses the dataset URLs for Datos Abiertos from the API.
  * @param {string} dataset - The name of the dataset to retrieve URLs for.
  * * * @example
  * // Example: Retrieve fuel prices for the Dominican Republic
  * // Full documentation: https://developer.digital.gob.do/apis/fdf3319d-521e-4364-b331-9d521e636442
  * async function getDatasetCSVUrls() {
  *     try {
  *         // const dataset = 'nomina-miembros-policiales-2019';
  *         // const dataset = 'trafico-2020';
  *         const dataset = 'recaudaciones-sirite-2021-2022';
  *         const daData = await aletheiaSDK.opendata.gob('datos-abiertos').getDatasetCSVUrls(dataset);
  *         console.log('Datos Abiertos Data:', daData);
  *     } catch (error) {
  *         console.error('Error retrieving Datos Abiertos data:', error);
  *     }
  * }
  * getDatasetCSVUrls();
  * @returns {Promise} A promise that resolves to an array of dataset URLs.
  */
  async getDatasetCSVUrls(dataset) {
    const endpoint = `${this.apiDomain}/${dataset}`;
    try {
      const datasetLink = await fetchAndParseHTML(endpoint, 'resource-url-analytics');
      return datasetLink;
    } catch (error) {
      throw error;
    }
  }
}

// Export the DatosAbiertos class for use in other modules
module.exports = DatosAbiertos;
