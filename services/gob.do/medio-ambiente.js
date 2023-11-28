const FetchService = require('../fetchService.js');

/**
 * AmbienteGob Class
 * 
 * Represents a client for interacting with various endpoints of "Solicitudes Autorizaciones Ambientales".
 * This class extends the FetchService class and provides methods for different use cases.
 * <br /><br />Full API specs: <a href="https://apisolicitudambiental.ambiente.gob.do/swagger/index.html" target="_blank">https://apisolicitudambiental.ambiente.gob.do</a>
 *
 * @category Gob.do
 * @class
 * @extends FetchService
 */
class AmbienteGob extends FetchService {
  constructor(apiKey) {
    super(apiKey);
    this.apiDomain = `https://apisolicitudambiental.ambiente.gob.do`;
  }

  /**
   * Authenticate user with UlticabinetLogin.
   * @param {Object} authRequest - The authentication request data.
   * @returns {Promise} A Promise that resolves with the authentication result.
   */
  ulticabinetLogin(authRequest) {
    const endpoint = `${this.apiDomain}/api/Auth/UlticabinetLogin`;
    return this.postData(endpoint, {}, authRequest);
  }

  /**
   * Get document by documentTypeId and document.
   * @param {number} documentTypeId - The document type ID.
   * @param {string} document - The document value.
   * @returns {Promise} A Promise that resolves with the document data.
   */
  getDocument(documentTypeId, document) {
    const endpoint = `${this.apiDomain}/api/Auth/${documentTypeId}/${document}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get document by document.
   * @param {string} document - The document value.
   * @returns {Promise} A Promise that resolves with the document data.
   */
  getDocumentByDocument(document) {
    const endpoint = `${this.apiDomain}/api/Auth/${document}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get person by cedula.
   * @param {string} document - The document value (cedula).
   * @returns {Promise} A Promise that resolves with the person data.
   */
  getPersonByCedula(document) {
    const endpoint = `${this.apiDomain}/api/Auth/PersonByCedula/${document}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get categories with optional parameters.
   * @param {Object} params - Additional parameters for the request.
   * @returns {Promise} A Promise that resolves with the categories data.
   */
  getCategories(params) {
    const endpoint = `${this.apiDomain}/api/Categoria`;
    return this.fetchData(endpoint, params);
  }

  /**
   * Create a new category.
   * @param {Object} categoryDto - The category data.
   * @returns {Promise} A Promise that resolves with the result of the creation.
   */
  createCategory(categoryDto) {
    const endpoint = `${this.apiDomain}/api/Categoria`;
    return this.postData(endpoint, categoryDto);
  }

  /**
   * Get category by ID.
   * @param {number} id - The category ID.
   * @returns {Promise} A Promise that resolves with the category data.
   */
  getCategoryById(id) {
    const endpoint = `${this.apiDomain}/api/Categoria/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Update category by ID.
   * @param {number} id - The category ID.
   * @param {Object} categoryDto - The updated category data.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateCategoryById(id, categoryDto) {
    const endpoint = `${this.apiDomain}/api/Categoria/${id}`;
    return this.putData(endpoint, categoryDto);
  }

  /**
   * Delete category by ID.
   * @param {number} id - The category ID.
   * @returns {Promise} A Promise that resolves with the result of the deletion.
   */
  deleteCategoryById(id) {
    const endpoint = `${this.apiDomain}/api/Categoria/${id}`;
    return this.deleteData(endpoint, 'delete');
  }

  /**
   * Partially update category by ID.
   * @param {number} id - The category ID.
   * @param {Object[]} operations - The update operations.
   * @returns {Promise} A Promise that resolves with the result of the partial update.
   */
  updateCategoryPartiallyById(id, operations) {
    const endpoint = `${this.apiDomain}/api/Categoria/update/${id}`;
    return this.fetchData(endpoint, operations);
  }

  /**
   * Get comments for a document with external ID.
   * @param {string} externalId - The external ID of the document.
   * @returns {Promise} A Promise that resolves with the comments data.
   */
  getDocumentCommentsByExternalId(externalId) {
    const endpoint = `${this.apiDomain}/api/DocumentoComentario/DocumentoId/${externalId}`;
    return this.fetchData(endpoint);
  }

  /**
   * Get document comments with optional parameters.
   * @param {Object} params - Additional parameters for the request.
   * @returns {Promise} A Promise that resolves with the document comments data.
   */
  getDocumentComments(params) {
    const endpoint = `${this.apiDomain}/api/DocumentoComentario`;
    return this.fetchData(endpoint, params);
  }

  /**
   * Create a new document comment.
   * @param {Object} commentDto - The document comment data.
   * @returns {Promise} A Promise that resolves with the result of the creation.
   */
  createDocumentComment(commentDto) {
    const endpoint = `${this.apiDomain}/api/DocumentoComentario`;
    return this.postData(endpoint, commentDto);
  }

  /**
   * Get document comment by ID.
   * @param {number} id - The document comment ID.
   * @returns {Promise} A Promise that resolves with the document comment data.
   */
  getDocumentCommentById(id) {
    const endpoint = `${this.apiDomain}/api/DocumentoComentario/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Update document comment by ID.
   * @param {number} id - The document comment ID.
   * @param {Object} commentDto - The updated document comment data.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateDocumentCommentById(id, commentDto) {
    const endpoint = `${this.apiDomain}/api/DocumentoComentario/${id}`;
    return this.putData(endpoint, commentDto);
  }

  /**
   * Delete document comment by ID.
   * @param {number} id - The document comment ID.
   * @returns {Promise} A Promise that resolves with the result of the deletion.
   */
  deleteDocumentCommentById(id) {
    const endpoint = `${this.apiDomain}/api/DocumentoComentario/${id}`;
    return this.deleteData(endpoint, 'delete');
  }

  /**
   * Partially update document comment by ID.
   * @param {number} id - The document comment ID.
   * @param {Object[]} operations - The update operations.
   * @returns {Promise} A Promise that resolves with the result of the partial update.
   */
  updateDocumentCommentPartiallyById(id, operations) {
    const endpoint = `${this.apiDomain}/api/DocumentoComentario/update/${id}`;
    return this.fetchData(endpoint, operations);
  }

  /**
   * Get historical documents with optional parameters.
   * @param {Object} params - Additional parameters for the request.
   * @returns {Promise} A Promise that resolves with the historical documents data.
   */
  getHistoricalDocuments(params) {
    const endpoint = `${this.apiDomain}/api/DocumentoHistorico`;
    return this.fetchData(endpoint, params);
  }

  /**
   * Create a new historical document.
   * @param {Object} historicalDocumentDto - The historical document data.
   * @returns {Promise} A Promise that resolves with the result of the creation.
   */
  createHistoricalDocument(historicalDocumentDto) {
    const endpoint = `${this.apiDomain}/api/DocumentoHistorico`;
    return this.postData(endpoint, historicalDocumentDto);
  }

  /**
   * Get historical document by document ID.
   * @param {number} documentoSolicitudId - The document ID.
   * @returns {Promise} A Promise that resolves with the historical document data.
   */
  getHistoricalDocumentByDocumentId(documentoSolicitudId) {
      const endpoint = `${this.apiDomain}/api/DocumentoHistorico/GetByDocumentoId/${documentoSolicitudId}`;
      return this.fetchData(endpoint);
  }

  /**
   * Get historical document by ID.
   * @param {number} id - The document ID.
   * @returns {Promise} A Promise that resolves with the historical document data.
   */
  getHistoricalDocumentById(id) {
    const endpoint = `${this.apiDomain}/api/DocumentoHistorico/${id}`;
    return this.fetchData(endpoint);
  }

  /**
   * Update historical document by ID.
   * @param {number} id - The document ID.
   * @param {Object} documentDto - The updated historical document data.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateHistoricalDocumentById(id, documentDto) {
    const endpoint = `${this.apiDomain}/api/DocumentoHistorico/${id}`;
    return this.putData(endpoint, documentDto);
  }

  /**
   * Delete historical document by ID.
   * @param {number} id - The document ID.
   * @returns {Promise} A Promise that resolves with the result of the deletion.
   */
  deleteHistoricalDocumentById(id) {
    const endpoint = `${this.apiDomain}/api/DocumentoHistorico/${id}`;
    return this.deleteData(endpoint);
  }

  /**
   * Update historical document by ID using patch method.
   * @param {number} id - The document ID.
   * @param {Object[]} operations - The update operations.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateHistoricalDocumentByIdUsingPatch(id, operations) {
    const endpoint = `${this.apiDomain}/api/DocumentoHistorico/update/${id}`;
    return this.patchData(endpoint, operations);
  }

  /**
   * Change document state by ID using patch method.
   * @param {number} id - The document ID.
   * @param {Object[]} operations - The update operations.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  changeDocumentStateByIdUsingPatch(id, operations) {
    const endpoint = `${this.apiDomain}/api/DocumentoSolicitud/CambiarEstadoDocumento/${id}`;
    return this.patchData(endpoint, operations);
  }

  /**
   * Sign document by ID.
   * @param {string} id - The document ID.
   * @param {Object[]} documentDto - The document data.
   * @returns {Promise} A Promise that resolves with the result of the signing.
   */
  signDocumentById(id, documentDto) {
    const endpoint = `${this.apiDomain}/api/DocumentoSolicitud/FirmarDocumento/${id}`;
    return this.postData(endpoint, documentDto);
  }

  /**
   * Callback for document.
   * @param {Object} callbackDto - The callback data.
   * @returns {Promise} A Promise that resolves with the result of the callback.
   */
  documentCallback(callbackDto) {
    const endpoint = `${this.apiDomain}/api/DocumentoSolicitud/DocumentoCallback`;
    return this.postData(endpoint, callbackDto);
  }

  /**
   * Get users viafirma.
   * @returns {Promise} A Promise that resolves with the users data.
   */
  getUsersViafirma() {
    const endpoint = `${this.apiDomain}/api/DocumentoSolicitud/GetUsersViafirma`;
    return this.getData(endpoint);
  }

  /**
   * Get document requests with optional parameters.
   * @param {Object} params - Additional parameters for the request.
   * @returns {Promise} A Promise that resolves with the document requests data.
   */
  getDocumentRequests(params) {
    const endpoint = `${this.apiDomain}/api/DocumentoSolicitud`;
    return this.getData(endpoint, params);
  }

  /**
   * Create a new document request.
   * @param {Object} documentSolicitudDto - The document request data.
   * @returns {Promise} A Promise that resolves with the result of the creation.
   */
  createDocumentRequest(documentSolicitudDto) {
    const endpoint = `${this.apiDomain}/api/DocumentoSolicitud`;
    return this.postData(endpoint, documentSolicitudDto);
  }

  /**
   * Get document by ID.
   * @param {number} id - The document ID.
   * @returns {Promise} A Promise that resolves with the document data.
   */
  getDocumentById(id) {
    const endpoint = `${this.apiDomain}/api/DocumentoSolicitud/${id}`;
    return this.getData(endpoint);
  }

  /**
   * Update document by ID.
   * @param {number} id - The document ID.
   * @param {Object} documentDto - The updated document data.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateDocumentById(id, documentDto) {
    const endpoint = `${this.apiDomain}/api/DocumentoSolicitud/${id}`;
    return this.putData(endpoint, documentDto);
  }

  /**
   * Delete document by ID.
   * @param {number} id - The document ID.
   * @returns {Promise} A Promise that resolves with the result of the deletion.
   */
  deleteDocumentById(id) {
    const endpoint = `${this.apiDomain}/api/DocumentoSolicitud/${id}`;
    return this.deleteData(endpoint);
  }

  /**
   * Update document by ID using patch method.
   * @param {number} id - The document ID.
   * @param {Object[]} operations - The update operations.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateDocumentByIdUsingPatch(id, operations) {
    const endpoint = `${this.apiDomain}/api/DocumentoSolicitud/update/${id}`;
    return this.patchData(endpoint, operations);
  }

  /**
   * Get available states by solicitud ID.
   * @param {number} solicitudId - The solicitud ID.
   * @returns {Promise} A Promise that resolves with the available states data.
   */
  getAvailableStatesBySolicitudId(solicitudId) {
    const endpoint = `${this.apiDomain}/api/Estado/EstadosDisponibles/${solicitudId}`;
    return this.getData(endpoint);
  }

  /**
   * Get available states by solicitud ID.
   * @param {number} solicitudId - The solicitud ID.
   * @returns {Promise} A Promise that resolves with the available states data.
   */
  getAvailableStatesBySolicitudId(solicitudId) {
    const endpoint = `${this.apiDomain}/api/Estado/EstadosDisponibles/${solicitudId}`;
    return this.getData(endpoint);
  }

  /**
   * Get states with optional parameters.
   * @param {Object} params - Additional parameters for the request.
   * @returns {Promise} A Promise that resolves with the states data.
   */
  getStates(params) {
    const endpoint = `${this.apiDomain}/api/Estado`;
    return this.getData(endpoint, params);
  }

  /**
   * Create a new state.
   * @param {Object} estadoDto - The state data.
   * @returns {Promise} A Promise that resolves with the result of the creation.
   */
  createState(estadoDto) {
    const endpoint = `${this.apiDomain}/api/Estado`;
    return this.postData(endpoint, estadoDto);
  }

  /**
   * Get state by ID.
   * @param {number} id - The state ID.
   * @returns {Promise} A Promise that resolves with the state data.
   */
  getStateById(id) {
    const endpoint = `${this.apiDomain}/api/Estado/${id}`;
    return this.getData(endpoint);
  }

  /**
   * Update state by ID.
   * @param {number} id - The state ID.
   * @param {Object} estadoDto - The updated state data.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateStateById(id, estadoDto) {
    const endpoint = `${this.apiDomain}/api/Estado/${id}`;
    return this.putData(endpoint, estadoDto);
  }

  /**
   * Delete state by ID.
   * @param {number} id - The state ID.
   * @returns {Promise} A Promise that resolves with the result of the deletion.
   */
  deleteStateById(id) {
    const endpoint = `${this.apiDomain}/api/Estado/${id}`;
    return this.deleteData(endpoint);
  }

  /**
   * Update state by ID using patch method.
   * @param {number} id - The state ID.
   * @param {Object[]} operations - The update operations.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateStateByIdUsingPatch(id, operations) {
    const endpoint = `${this.apiDomain}/api/Estado/update/${id}`;
    return this.patchData(endpoint, operations);
  }

  /**
   * Get total to pay for a solicitud.
   * @param {number} idSolicitud - The solicitud ID.
   * @returns {Promise} A Promise that resolves with the total to pay data.
   */
  getTotalToPayForSolicitud(idSolicitud) {
    const endpoint = `${this.apiDomain}/api/Facturacion/ShowTotalToPay/${idSolicitud}`;
    return this.getData(endpoint);
  }

  /**
   * Get total to pay for a solicitud.
   * @param {Object} solicitudConsultaDto - The solicitud data.
   * @returns {Promise} A Promise that resolves with the total to pay data.
   */
  getTotalToPayForSolicitud(solicitudConsultaDto) {
    const endpoint = `${this.apiDomain}/api/Facturacion/ShowTotalToPaySolicitud`;
    return this.postData(endpoint, solicitudConsultaDto);
  }

  /**
   * Confirm payment for an invoice.
   * @param {number} invoiceId - The invoice ID.
   * @param {Object} invoiceDtoBody - The invoice data.
   * @returns {Promise} A Promise that resolves with the result of the confirmation.
   */
  confirmPaymentForInvoice(invoiceId, invoiceDtoBody) {
    const endpoint = `${this.apiDomain}/api/Facturacion/ConfirmPago/${invoiceId}`;
    return this.postData(endpoint, invoiceDtoBody);
  }

  /**
   * Get groups with optional parameters.
   * @param {Object} params - Additional parameters for the request.
   * @returns {Promise} A Promise that resolves with the groups data.
   */
  getGroups(params) {
    const endpoint = `${this.apiDomain}/api/Grupo`;
    return this.getData(endpoint, params);
  }

  /**
   * Create a new group.
   * @param {Object} gruposDto - The group data.
   * @returns {Promise} A Promise that resolves with the result of the creation.
   */
  createGroup(gruposDto) {
    const endpoint = `${this.apiDomain}/api/Grupo`;
    return this.postData(endpoint, gruposDto);
  }

  /**
   * Get group by ID.
   * @param {number} id - The group ID.
   * @returns {Promise} A Promise that resolves with the group data.
   */
  getGroupById(id) {
    const endpoint = `${this.apiDomain}/api/Grupo/${id}`;
    return this.getData(endpoint);
  }

  /**
   * Update group by ID.
   * @param {number} id - The group ID.
   * @param {Object} gruposDto - The updated group data.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateGroupById(id, gruposDto) {
    const endpoint = `${this.apiDomain}/api/Grupo/${id}`;
    return this.putData(endpoint, gruposDto);
  }

  /**
   * Delete group by ID.
   * @param {number} id - The group ID.
   * @returns {Promise} A Promise that resolves with the result of the deletion.
   */
  deleteGroupById(id) {
    const endpoint = `${this.apiDomain}/api/Grupo/${id}`;
    return this.deleteData(endpoint);
  }

  /**
   * Update group by ID using patch method.
   * @param {number} id - The group ID.
   * @param {Object[]} operations - The update operations.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateGroupByIdUsingPatch(id, operations) {
    const endpoint = `${this.apiDomain}/api/Grupo/update/${id}`;
    return this.patchData(endpoint, operations);
  }

  /**
   * Get invoices with optional parameters.
   * @param {Object} params - Additional parameters for the request.
   * @returns {Promise} A Promise that resolves with the invoices data.
   */
  getInvoices(params) {
    const endpoint = `${this.apiDomain}/api/Invoice`;
    return this.getData(endpoint, params);
  }

  /**
   * Create a new invoice.
   * @param {Object} invoiceDto - The invoice data.
   * @returns {Promise} A Promise that resolves with the result of the creation.
   */
  createInvoice(invoiceDto) {
    const endpoint = `${this.apiDomain}/api/Invoice`;
    return this.postData(endpoint, invoiceDto);
  }

  /**
   * Get invoice by ID.
   * @param {number} id - The invoice ID.
   * @returns {Promise} A Promise that resolves with the invoice data.
   */
  getInvoiceById(id) {
    const endpoint = `${this.apiDomain}/api/Invoice/${id}`;
    return this.getData(endpoint);
  }

  /**
   * Update invoice by ID.
   * @param {number} id - The invoice ID.
   * @param {Object} invoiceDto - The updated invoice data.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateInvoiceById(id, invoiceDto) {
    const endpoint = `${this.apiDomain}/api/Invoice/${id}`;
    return this.putData(endpoint, invoiceDto);
  }

  /**
   * Delete invoice by ID.
   * @param {number} id - The invoice ID.
   * @returns {Promise} A Promise that resolves with the result of the deletion.
   */
  deleteInvoiceById(id) {
    const endpoint = `${this.apiDomain}/api/Invoice/${id}`;
    return this.deleteData(endpoint);
  }

  /**
   * Update invoice by ID using patch method.
   * @param {number} id - The invoice ID.
   * @param {Object[]} operations - The update operations.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateInvoiceByIdUsingPatch(id, operations) {
    const endpoint = `${this.apiDomain}/api/Invoice/update/${id}`;
    return this.patchData(endpoint, operations);
  }

  /**
   * Get solicitud with optional parameters.
   * @param {Object} params - Additional parameters for the request.
   * @returns {Promise} A Promise that resolves with the solicitud data.
   */
  getSolicitud(params) {
    const endpoint = `${this.apiDomain}/api/Solicitud`;
    return this.getData(endpoint, params);
  }

  /**
   * Create a new solicitud.
   * @param {Object} solicitudDto - The solicitud data.
   * @returns {Promise} A Promise that resolves with the result of the creation.
   */
  createSolicitud(solicitudDto) {
    const endpoint = `${this.apiDomain}/api/Solicitud`;
    return this.postData(endpoint, solicitudDto);
  }

  /**
   * Get solicitud by ID.
   * @param {number} id - The solicitud ID.
   * @returns {Promise} A Promise that resolves with the solicitud data.
   */
  getSolicitudById(id) {
    const endpoint = `${this.apiDomain}/api/Solicitud/${id}`;
    return this.getData(endpoint);
  }

  /**
   * Update solicitud by ID.
   * @param {number} id - The solicitud ID.
   * @param {Object} solicitudDto - The updated solicitud data.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateSolicitudById(id, solicitudDto) {
    const endpoint = `${this.apiDomain}/api/Solicitud/${id}`;
    return this.putData(endpoint, solicitudDto);
  }

  /**
   * Delete solicitud by ID.
   * @param {number} id - The solicitud ID.
   * @returns {Promise} A Promise that resolves with the result of the deletion.
   */
  deleteSolicitudById(id) {
    const endpoint = `${this.apiDomain}/api/Solicitud/${id}`;
    return this.deleteData(endpoint);
  }

  /**
   * Get solicitud by external ID.
   * @param {string} externalId - The external ID of the solicitud.
   * @returns {Promise} A Promise that resolves with the solicitud data.
   */
  getSolicitudByExternalId(externalId) {
    const endpoint = `${this.apiDomain}/api/Solicitud/SolicitudByExternalId/${externalId}`;
    return this.getData(endpoint);
  }

  /**
   * Get solicitudes by usuario.
   * @param {string} documento - The documento of the usuario.
   * @returns {Promise} A Promise that resolves with the solicitud data.
   */
  getSolicitudesByUsuario(documento) {
    const endpoint = `${this.apiDomain}/api/Solicitud/SolicitudesByUsuario/${documento}`;
    return this.getData(endpoint);
  }

  /**
   * Get archivos by solicitud ID.
   * @param {number} solicitudId - The solicitud ID.
   * @returns {Promise} A Promise that resolves with the archivos data.
   */
  getArchivosBySolicitudId(solicitudId) {
    const endpoint = `${this.apiDomain}/api/Solicitud/ArchivosBySolicitudId/${solicitudId}`;
    return this.getData(endpoint);
  }

  /**
   * Get documento by external ID.
   * @param {string} externalId - The external ID of the documento.
   * @returns {Promise} A Promise that resolves with the documento data.
   */
  getDocumentoByExternalId(externalId) {
    const endpoint = `${this.apiDomain}/api/Solicitud/GetDocumento/${externalId}`;
    return this.getData(endpoint);
  }

  /**
   * Upload documento as base64 by external ID.
   * @param {string} externalId - The external ID of the documento.
   * @param {Object} fileDto - The file data in base64 format.
   * @returns {Promise} A Promise that resolves with the result of the upload.
   */
  uploadDocumentoB64ByExternalId(externalId, fileDto) {
    const endpoint = `${this.apiDomain}/api/Solicitud/SubirDocumentoB64/${externalId}`;
    return this.putData(endpoint, fileDto);
  }

  /**
   * Save invoice.
   * @param {Object} invoicePdfB64Dto - The invoice data in base64 format.
   * @returns {Promise} A Promise that resolves with the result of the save operation.
   */
  saveInvoice(invoicePdfB64Dto) {
    const endpoint = `${this.apiDomain}/api/Solicitud/SaveInvoice`;
    return this.postData(endpoint, invoicePdfB64Dto);
  }

  /**
   * Upload document.
   * @param {Object} formData - The form data containing the document information.
   * @returns {Promise} A Promise that resolves with the result of the upload.
   */
  uploadDocumento(formData) {
    const endpoint = `${this.apiDomain}/api/Solicitud/SubirDocumento`;
    return this.postData(endpoint, formData);
  }

  /**
   * Get file by ID.
   * @param {string} id - The file ID.
   * @returns {Promise} A Promise that resolves with the file data.
   */
  getFileById(id) {
    const endpoint = `${this.apiDomain}/api/Solicitud/File/${id}`;
    return this.getData(endpoint);
  }

  /**
   * Get historical solicitud by ID.
   * @param {number} solicitudId - The solicitud ID.
   * @returns {Promise} A Promise that resolves with the historical solicitud data.
   */
  getHistoricoSolicitudById(solicitudId) {
    const endpoint = `${this.apiDomain}/api/Solicitud/HistoricoSolicitudById/${solicitudId}`;
    return this.getData(endpoint);
  }

  /**
   * Generate documents for solicitud.
   * @param {Object} generarDocumento - The generarDocumento data.
   * @returns {Promise} A Promise that resolves with the result of the generation.
   */
  generateDocumentos(generarDocumento) {
    const endpoint = `${this.apiDomain}/api/Solicitud/GenerarDocumentos`;
    return this.postData(endpoint, generarDocumento);
  }

  /**
   * Get missing documents by ID.
   * @param {number} id - The solicitud ID.
   * @returns {Promise} A Promise that resolves with the missing documents data.
   */
  getDocumentosFaltantesById(id) {
    const endpoint = `${this.apiDomain}/api/Solicitud/DocumentosFaltantes/${id}`;
    return this.getData(endpoint);
  }

  /**
   * Change solicitud status by external ID.
   * @param {string} externalId - The external ID of the solicitud.
   * @param {number} statusId - The status ID to change to.
   * @returns {Promise} A Promise that resolves with the result of the status change.
   */
  cambiarEstadoSolicitudByExternalId(externalId, statusId) {
    const endpoint = `${this.apiDomain}/api/Solicitud/CambiarEstadoSolicitudByExternalId/${externalId}`;
    const queryParams = { statusId };
    return this.patchData(endpoint, queryParams);
  }

  /**
   * Confirm payment by external ID.
   * @param {string} externalId - The external ID of the solicitud.
   * @param {Object} pagoExternalRequestDto - The payment data.
   * @returns {Promise} A Promise that resolves with the result of the payment confirmation.
   */
  confirmPagoByExternalId(externalId, pagoExternalRequestDto) {
    const endpoint = `${this.apiDomain}/api/Solicitud/ConfirmPagoByExternalId/${externalId}`;
    return this.patchData(endpoint, pagoExternalRequestDto);
  }

  /**
   * Change solicitud status by ID.
   * @param {number} id - The solicitud ID.
   * @param {Array} operations - The array of operations.
   * @returns {Promise} A Promise that resolves with the result of the status change.
   */
  cambiarEstadoSolicitudById(id, operations) {
    const endpoint = `${this.apiDomain}/api/Solicitud/CambiarEstadoSolicitud/${id}`;
    const requestBody = {
      operations: operations
    };
    return this.patchData(endpoint, requestBody);
  }

  /**
   * Add comentario to solicitud.
   * @param {Object} comentarioDto - The comentario data.
   * @returns {Promise} A Promise that resolves with the result of adding the comentario.
   */
  agregarComentario(comentarioDto) {
    const endpoint = `${this.apiDomain}/api/Solicitud/AgregarComentario`;
    return this.postData(endpoint, comentarioDto);
  }

  /**
   * Change solicitud categoria by ID.
   * @param {number} id - The solicitud ID.
   * @param {Array} operations - The array of operations.
   * @returns {Promise} A Promise that resolves with the result of the categoria change.
   */
  cambiarCategoriaById(id, operations) {
    const endpoint = `${this.apiDomain}/api/Solicitud/CambiarCategoria/${id}`;
    const requestBody = {
      operations: operations
    };
    return this.patchData(endpoint, requestBody);
  }

  /**
   * Change solicitud monto inversion by ID.
   * @param {number} id - The solicitud ID.
   * @param {Array} operations - The array of operations.
   * @returns {Promise} A Promise that resolves with the result of the monto inversion change.
   */
  cambiarMontoInversionById(id, operations) {
    const endpoint = `${this.apiDomain}/api/Solicitud/CambiarMontoInversion/${id}`;
    const requestBody = {
      operations: operations
    };
    return this.patchData(endpoint, requestBody);
  }

  /**
   * Exonerate payment by ID.
   * @param {number} id - The solicitud ID.
   * @param {Array} operations - The array of operations.
   * @returns {Promise} A Promise that resolves with the result of the payment exoneration.
   */
  exonerarPagoById(id, operations) {
    const endpoint = `${this.apiDomain}/api/Solicitud/ExonerarPago/${id}`;
    const requestBody = {
      operations: operations
    };
    return this.patchData(endpoint, requestBody);
  }

  /**
   * Assign solicitud.
   * @param {Object} asignacionDto - The asignacion data.
   * @returns {Promise} A Promise that resolves with the result of the assignment.
   */
  asignarSolicitud(asignacionDto) {
    const endpoint = `${this.apiDomain}/api/Solicitud/asignarSolicitud`;
    return this.postData(endpoint, asignacionDto);
  }

  /**
   * Delete asignacion by ID.
   * @param {number} idAsignacion - The asignacion ID.
   * @returns {Promise} A Promise that resolves with the result of the deletion.
   */
  eliminarAsignacionById(idAsignacion) {
    const endpoint = `${this.apiDomain}/api/Solicitud/eliminarAsignacion/${idAsignacion}`;
    return this.deleteData(endpoint);
  }

  /**
   * Get asignaciones by solicitud ID.
   * @param {number} solicitudId - The solicitud ID.
   * @returns {Promise} A Promise that resolves with the asignaciones data.
   */
  getAsignacionesBySolicitudId(solicitudId) {
    const endpoint = `${this.apiDomain}/api/Solicitud/asignaciones/${solicitudId}`;
    return this.getData(endpoint);
  }

  /**
   * Change solicitud status by external ID.
   * @param {string} externalId - The external ID of the solicitud.
   * @param {number} statusId - The status ID to change to.
   * @returns {Promise} A Promise that resolves with the result of the status change.
   */
  cambiarEstadoSolicitudByExternalId(externalId, statusId) {
    const endpoint = `${this.apiDomain}/api/Solicitud/ChangeStatusByExternalId/${externalId}`;
    const requestBody = {
      statusId: statusId
    };
    return this.patchData(endpoint, requestBody);
  }

  /**
   * Confirm payment by external ID.
   * @param {string} externalId - The external ID of the solicitud.
   * @param {Object} pagoExternalRequestDto - The payment data.
   * @returns {Promise} A Promise that resolves with the result of the payment confirmation.
   */
  confirmPagoByExternalId(externalId, pagoExternalRequestDto) {
    const endpoint = `${this.apiDomain}/api/Solicitud/ConfirmPaymentByExternalId/${externalId}`;
    return this.postData(endpoint, pagoExternalRequestDto);
  }

  /**
   * Change solicitud status by ID.
   * @param {number} id - The solicitud ID.
   * @param {Array} operations - The array of operations.
   * @returns {Promise} A Promise that resolves with the result of the status change.
   */
  cambiarEstadoSolicitudById(id, operations) {
    const endpoint = `${this.apiDomain}/api/Solicitud/ChangeStatusById/${id}`;
    const requestBody = {
      operations: operations
    };
    return this.patchData(endpoint, requestBody);
  }

  /**
   * Add comentario to solicitud.
   * @param {Object} comentarioDto - The comentario data.
   * @returns {Promise} A Promise that resolves with the result of adding the comentario.
   */
  agregarComentario(comentarioDto) {
    const endpoint = `${this.apiDomain}/api/Solicitud/AddComentario`;
    return this.postData(endpoint, comentarioDto);
  }

  /**
   * Change solicitud categoria by ID.
   * @param {number} id - The solicitud ID.
   * @param {Array} operations - The array of operations.
   * @returns {Promise} A Promise that resolves with the result of the categoria change.
   */
  cambiarCategoriaById(id, operations) {
    const endpoint = `${this.apiDomain}/api/Solicitud/ChangeCategoriaById/${id}`;
    const requestBody = {
      operations: operations
    };
    return this.patchData(endpoint, requestBody);
  }

  /**
   * Change solicitud monto inversion by ID.
   * @param {number} id - The solicitud ID.
   * @param {Array} operations - The array of operations.
   * @returns {Promise} A Promise that resolves with the result of the monto inversion change.
   */
  cambiarMontoInversionById(id, operations) {
    const endpoint = `${this.apiDomain}/api/Solicitud/ChangeMontoInversionById/${id}`;
    const requestBody = {
      operations: operations
    };
    return this.patchData(endpoint, requestBody);
  }

  /**
   * Exonerate payment by ID.
   * @param {number} id - The solicitud ID.
   * @param {Array} operations - The array of operations.
   * @returns {Promise} A Promise that resolves with the result of the payment exoneration.
   */
  exonerarPagoById(id, operations) {
    const endpoint = `${this.apiDomain}/api/Solicitud/ExonerarPagoById/${id}`;
    const requestBody = {
      operations: operations
    };
    return this.patchData(endpoint, requestBody);
  }

  /**
   * Assign solicitud.
   * @param {Object} asignacionDto - The asignacion data.
   * @returns {Promise} A Promise that resolves with the result of the assignment.
   */
  asignarSolicitud(asignacionDto) {
    const endpoint = `${this.apiDomain}/api/Solicitud/AsignarSolicitud`;
    return this.postData(endpoint, asignacionDto);
  }

  /**
   * Delete asignacion by ID.
   * @param {number} idAsignacion - The asignacion ID.
   * @returns {Promise} A Promise that resolves with the result of the deletion.
   */
  eliminarAsignacionById(idAsignacion) {
    const endpoint = `${this.apiDomain}/api/Solicitud/EliminarAsignacionById/${idAsignacion}`;
    return this.deleteData(endpoint);
  }

  /**
   * Get asignaciones by solicitud ID.
   * @param {number} solicitudId - The solicitud ID.
   * @returns {Promise} A Promise that resolves with the asignaciones data.
   */
  getAsignacionesBySolicitudId(solicitudId) {
    const endpoint = `${this.apiDomain}/api/Solicitud/GetAsignacionesBySolicitudId/${solicitudId}`;
    return this.getData(endpoint);
  }

  /**
   * Get solicitud stats table.
   * @param {Object} solicitudTableRequestParameters - The request parameters for the stats table.
   * @returns {Promise} A Promise that resolves with the stats table data.
   */
  getSolicitudStatsTable(solicitudTableRequestParameters) {
    const endpoint = `${this.apiDomain}/api/Solicitud/Stats/Table`;
    return this.postData(endpoint, solicitudTableRequestParameters);
  }

  /**
   * Get solicitud stats filters table.
   * @returns {Promise} A Promise that resolves with the stats filters table data.
   */
  getSolicitudStatsFiltersTable() {
    const endpoint = `${this.apiDomain}/api/Solicitud/Stats/Filters/Table`;
    return this.getData(endpoint);
  }

  /**
   * Get solicitud stats filters graph.
   * @returns {Promise} A Promise that resolves with the stats filters graph data.
   */
  getSolicitudStatsFiltersGraph() {
    const endpoint = `${this.apiDomain}/api/Solicitud/Stats/Filters/Graph`;
    return this.getData(endpoint);
  }

  /**
   * Get solicitud stats graphs.
   * @param {Object} solicitudGraphsRequestParameters - The request parameters for the stats graphs.
   * @returns {Promise} A Promise that resolves with the stats graphs data.
   */
  getSolicitudStatsGraphs(solicitudGraphsRequestParameters) {
    const endpoint = `${this.apiDomain}/api/Solicitud/Stats/Graphs`;
    return this.postData(endpoint, solicitudGraphsRequestParameters);
  }

  /**
   * Get sancion by document.
   * @param {string} Documento - The document.
   * @returns {Promise} A Promise that resolves with the sancion details.
   */
  getSancionByDocument(Documento) {
    const endpoint = `${this.apiDomain}/api/Solicitud/GetSancionByDocument?Documento=${Documento}`;
    return this.getData(endpoint);
  }

  /**
   * Update solicitud by ID.
   * @param {number} id - The solicitud ID.
   * @param {Array} operations - The array of operations.
   * @returns {Promise} A Promise that resolves with the result of the update.
   */
  updateSolicitudById(id, operations) {
    const endpoint = `${this.apiDomain}/api/Solicitud/update/${id}`;
    return this.patchData(endpoint, operations);
  }


}

module.exports = AmbienteGob;
