const FetchService = require('../fetchService.js');

/**
 * MitGob Class
 * 
 * Represents a client for interacting with the MIT (Ministerio de Trabajo de la República Dominicana) API, providing methods for retrieving open data.
 * This class extends the FetchService class and focuses on accessing data related to various services
 * using specified parameters and formats.
 * <br /><br />Full API specs: <a href="https://webapi.mt.gob.do" target="_blank">https://webapi.mt.gob.do</a>
 *
 * @category Gob.do
 * @class
 * @extends FetchService
 */
class MitGob extends FetchService {
  /**
   * Create an instance of OpenData service.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(apiKey) {
    super(apiKey);
    this.apiDomain = 'https://webapi.mt.gob.do';
  }

  /**
   * Retrieves Division Types from the API.
   * @returns {Promise} A promise that resolves to the fetched Division Types.
   *
   * @example
   * async function getMITTiposDivision() {
   *   try {
   *     const mitData = await mitGob.getTiposDivision();
   *     console.log('MIT Division Types:', mitData);
   *   } catch (error) {
   *     console.error('Error retrieving MIT Division Types:', error);
   *   }
   * }
   * getMITTiposDivision();
   */
  getTiposDivision() {
    const endpoint = `${this.apiDomain}/api/Listados/GetTiposDivision`;
    console.log(endpoint);
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves Divisiones from the API.
   * @returns {Promise} A promise that resolves to the fetched Divisiones data.
   *
   * @example
   * async function getMITDivisiones() {
   *   try {
   *     const mitData = await mitGob.getDivisiones();
   *     console.log('MIT Divisiones:', mitData);
   *   } catch (error) {
   *     console.error('Error retrieving MIT Divisiones:', error);
   *   }
   * }
   * getMITDivisiones();
   */
  getDivisiones() {
    const endpoint = `${this.apiDomain}/api/Listados/GetDivisiones`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves available years for holidays from the API.
   * @returns {Promise} A promise that resolves to the fetched available years for holidays.
   *
   * @example
   * async function getMITAvailableYears() {
   *   try {
   *     const mitData = await mitGob.getAvailableYears();
   *     console.log('MIT Available Years:', mitData);
   *   } catch (error) {
   *     console.error('Error retrieving MIT Available Years:', error);
   *   }
   * }
   * getMITAvailableYears();
   */
  getAvailableYears() {
    const endpoint = `${this.apiDomain}/api/holidays/availableyears`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves holidays from the API.
   * @returns {Promise} A promise that resolves to the fetched holidays data.
   *
   * @example
   * async function getMITHolidays() {
   *   try {
   *     const mitData = await mitGob.getHolidays();
   *     console.log('MIT Holidays:', mitData);
   *   } catch (error) {
   *     console.error('Error retrieving MIT Holidays:', error);
   *   }
   * }
   * getMITHolidays();
   */
  getHolidays() {
    const endpoint = `${this.apiDomain}/api/Holidays`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves a specific holiday by ID from the API.
   * @param {string} id - The ID of the holiday to retrieve.
   * @returns {Promise} A promise that resolves to the fetched holiday data.
   *
   * @example
   * async function getMITHolidayById() {
   *   try {
   *     const holidayId = '123';
   *     const mitData = await mitGob.getHolidayById(holidayId);
   *     console.log('MIT Holiday:', mitData);
   *   } catch (error) {
   *     console.error('Error retrieving MIT Holiday:', error);
   *   }
   * }
   * getMITHolidayById();
   */
  getHolidayById(id) {
    const endpoint = `${this.apiDomain}/api/Holidays/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves holidays based on a specified range from the API.
   * @param {string} from - The start date of the range.
   * @param {number} count - The number of holidays to retrieve.
   * @returns {Promise} A promise that resolves to the fetched holidays data within the specified range.
   *
   * @example
   * async function getMITHolidaysByRange() {
   *   try {
   *     const from = '2023-01-01';
   *     const count = 5;
   *     const mitData = await mitGob.getHolidaysByRange(from, count);
   *     console.log('MIT Holidays:', mitData);
   *   } catch (error) {
   *     console.error('Error retrieving MIT Holidays:', error);
   *   }
   * }
   * getMITHolidaysByRange();
   */
  getHolidaysByRange(from, count) {
    const endpoint = `${this.apiDomain}/api/Holidays?from=${from}&count=${count}`;
    return this.fetchData(endpoint);
  }

  /**
   * Posts a new holiday to the API.
   * @param {Object} holidayData - The data of the holiday to post.
   * @returns {Promise} A promise that resolves to the posted holiday data.
   *
   * @example
   * async function postMITHoliday() {
   *   try {
   *     const newHoliday = { name: 'New Year', date: '2023-01-01' };
   *     const mitData = await mitGob.postHoliday(newHoliday);
   *     console.log('MIT Posted Holiday:', mitData);
   *   } catch (error) {
   *     console.error('Error posting MIT Holiday:', error);
   *   }
   * }
   * postMITHoliday();
   */
  postHoliday(holidayData) {
    const endpoint = `${this.apiDomain}/api/Holidays`;
    return this.postData(endpoint, holidayData);
  }

  /**
   * Updates a specific holiday by ID in the API.
   * @param {string} id - The ID of the holiday to update.
   * @param {Object} updatedData - The updated data for the holiday.
   * @returns {Promise} A promise that resolves to the updated holiday data.
   *
   * @example
   * async function putMITHoliday() {
   *   try {
   *     const holidayId = '123';
   *     const updatedData = { name: 'Updated Year', date: '2023-01-01' };
   *     const mitData = await mitGob.putHoliday(holidayId, updatedData);
   *     console.log('MIT Updated Holiday:', mitData);
   *   } catch (error) {
   *     console.error('Error updating MIT Holiday:', error);
   *   }
   * }
   * putMITHoliday();
   */
  putHoliday(id, updatedData) {
    const endpoint = `${this.apiDomain}/api/Holidays/${id}`;
    return this.putData(endpoint, updatedData);
  }

  /**
   * Deletes a specific holiday by ID from the API.
   * @param {string} id - The ID of the holiday to delete.
   * @returns {Promise} A promise that resolves when the holiday is successfully deleted.
   *
   * @example
   * async function deleteMITHoliday() {
   *   try {
   *     const holidayId = '123';
   *     await mitGob.deleteHoliday(holidayId);
   *     console.log('MIT Holiday Deleted Successfully');
   *   } catch (error) {
   *     console.error('Error deleting MIT Holiday:', error);
   *   }
   * }
   * deleteMITHoliday();
   */
  deleteHoliday(id) {
    const endpoint = `${this.apiDomain}/api/Holidays/${id}`;
    return this.deleteData(endpoint);
  }

  /**
   * Retrieves consulta information from the API based on the specified document.
   * @param {string} documento - The document to retrieve consulta information.
   * @returns {Promise} A promise that resolves to the fetched consulta information.
   *
   * @example
   * async function getMITConsulta() {
   *   try {
   *     const documento = '123456789';
   *     const mitData = await mitGob.getConsulta(documento);
   *     console.log('MIT Consulta:', mitData);
   *   } catch (error) {
   *     console.error('Error retrieving MIT Consulta:', error);
   *   }
   * }
   * getMITConsulta();
   */
  getConsulta(documento) {
    const endpoint = `${this.apiDomain}/api/Consulta?documento=${documento}`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves Puestos information from the API based on the specified parameters.
   * @param {string} from - The start index of the Puestos data.
   * @param {number} limit - The number of Puestos data to retrieve.
   * @returns {Promise} A promise that resolves to the fetched Puestos data.
   *
   * @example
   * async function getMITPuestos() {
   *   try {
   *     const from = '0';
   *     const limit = 10;
   *     const mitData = await mitGob.getPuestos(from, limit);
   *     console.log('MIT Puestos:', mitData);
   *   } catch (error) {
   *     console.error('Error retrieving MIT Puestos:', error);
   *   }
   * }
   * getMITPuestos();
   */
  getPuestos(from, limit) {
    const endpoint = `${this.apiDomain}/api/Puestos?from=${from}&limit=${limit}`;
    return this.fetchData(endpoint);
  }

  /**
   * Retrieves a specific Puesto by ID from the API.
   * @param {string} id - The ID of the Puesto to retrieve.
   * @returns {Promise} A promise that resolves to the fetched Puesto data.
   *
   * @example
   * async function getMITPuestoById() {
   *   try {
   *     const puestoId = '123';
   *     const mitData = await mitGob.getPuestoById(puestoId);
   *     console.log('MIT Puesto:', mitData);
   *   } catch (error) {
   *     console.error('Error retrieving MIT Puesto:', error);
   *   }
   * }
   * getMITPuestoById();
   */
  getPuestoById(id) {
    const endpoint = `${this.apiDomain}/api/Puestos/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Creates a new Puesto using the API.
   * @param {Object} postData - The data to be sent for creating a new Puesto.
   * @returns {Promise} A promise that resolves to the created Puesto data.
   *
   * @example
   * async function createMITPuesto(postData) {
   *   try {
   *     const mitData = await mitGob.createPuesto(postData);
   *     console.log('MIT Created Puesto:', mitData);
   *   } catch (error) {
   *     console.error('Error creating MIT Puesto:', error);
   *   }
   * }
   * createMITPuesto({ name: 'New Puesto', department: 'HR' });
   */
  createPuesto(postData) {
    const endpoint = `${this.apiDomain}/api/Puestos`;
    return this.postData(endpoint, postData);
  }

  /**
   * Updates an existing Puesto using the API.
   * @param {string} id - The ID of the Puesto to be updated.
   * @param {Object} updateData - The data to be sent for updating the Puesto.
   * @returns {Promise} A promise that resolves to the updated Puesto data.
   *
   * @example
   * async function updateMITPuesto(puestoId, updateData) {
   *   try {
   *     const mitData = await mitGob.updatePuesto(puestoId, updateData);
   *     console.log('MIT Updated Puesto:', mitData);
   *   } catch (error) {
   *     console.error('Error updating MIT Puesto:', error);
   *   }
   * }
   * updateMITPuesto('123', { name: 'Updated Puesto' });
   */
  updatePuesto(id, updateData) {
    const endpoint = `${this.apiDomain}/api/Puestos/${id}`;
    return this.putData(endpoint, updateData);
  }

  /**
   * Deletes a Puesto by ID using the API.
   * @param {string} id - The ID of the Puesto to be deleted.
   * @returns {Promise} A promise that resolves to the deleted Puesto data.
   *
   * @example
   * async function deleteMITPuestoById(puestoId) {
   *   try {
   *     const mitData = await mitGob.deletePuestoById(puestoId);
   *     console.log('MIT Deleted Puesto:', mitData);
   *   } catch (error) {
   *     console.error('Error deleting MIT Puesto:', error);
   *   }
   * }
   * deleteMITPuestoById('123');
   */
  deletePuestoById(id) {
    const endpoint = `${this.apiDomain}/api/Puestos/${id}`;
    return this.deleteData(endpoint, id);
  }

  /**
   * Creates a new Empresa using the API.
   * @param {Object} postData - The data to be sent for creating a new Empresa.
   * @returns {Promise} A promise that resolves to the created Empresa data.
   *
   * @example
   * async function createMITEmpresa(postData) {
   *   try {
   *     const mitData = await mitGob.createEmpresa(postData);
   *     console.log('MIT Created Empresa:', mitData);
   *   } catch (error) {
   *     console.error('Error creating MIT Empresa:', error);
   *   }
   * }
   * createMITEmpresa({ name: 'New Empresa', industry: 'IT' });
   */
  async createEmpresa(postData) {
    const endpoint = `${this.apiDomain}/api/Empresas`;
    const headers = {
      'Content-Type': 'application/json'
    };
    const result = await this.postData(endpoint, postData, headers);
    return result.data;
  }

  /**
   * Retrieves data for a specific Bee by ID from the API.
   * @param {string} doc - The document ID of the Bee.
   * @returns {Promise} A promise that resolves to the fetched Bee data.
   *
   * @example
   * async function getMITBeeById(docId) {
   *   try {
   *     const mitData = await mitGob.getBeeById(docId);
   *     console.log('MIT Bee by ID:', mitData);
   *   } catch (error) {
   *     console.error('Error retrieving MIT Bee by ID:', error);
   *   }
   * }
   * getMITBeeById('456');
   */
  getBeeById(doc) {
    const endpoint = `${this.apiDomain}/api/Bee?doc=${doc}`;
    return this.fetchData(endpoint);
  }

}

module.exports = MitGob;