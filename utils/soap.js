const composeSoapXml = (soapBody) => {
    const soapHeader =
      '<?xml version="1.0" encoding="utf-8"?>' +
      '<soap12:Envelope ' +
      'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
      'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
      'xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
      '<soap12:Body>';

    const soapClosing =
      '</soap12:Body>' +
      '</soap12:Envelope>';

    return soapHeader + soapBody + soapClosing;
  };

  module.exports = { composeSoapXml };