# Aletheia SDK

[![GitHub license](https://img.shields.io/github/license/Aletheia-Data/aletheia-sdk)](./LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Aletheia-Data/aletheia-sdk)](./CONTRIBUTING.md)
[![GitHub stars](https://img.shields.io/github/stars/Aletheia-Data/aletheia-sdk)](https://github.com/Aletheia-Data/aletheia-sdk/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Aletheia-Data/aletheia-sdk)](https://github.com/Aletheia-Data/aletheia-sdk/network)
[![GitHub release](https://img.shields.io/github/release/Aletheia-Data/aletheia-sdk)](https://github.com/Aletheia-Data/aletheia-sdk/releases)
[![GitHub contributors](https://img.shields.io/github/contributors/Aletheia-Data/aletheia-sdk)](https://github.com/Aletheia-Data/aletheia-sdk/graphs/contributors)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/Aletheia-Data/aletheia-sdk)](https://github.com/Aletheia-Data/aletheia-sdk/pulls)
[![GitHub last-commit](https://img.shields.io/github/last-commit/Aletheia-Data/aletheia-sdk)](https://github.com/Aletheia-Data/aletheia-sdk/commits/main)

The Aletheia SDK is a powerful software development kit designed to streamline the integration and utilization of key services and open data provided by various Dominican Republic government and private organizations. It offers a comprehensive set of tools and libraries for developers to seamlessly interact with open data, services and the Aletheia platform's datasets, accessing valuable information for applications, analysis, and decision-making.

## Installation

To install the Aletheia SDK, follow these steps:

1. Clone the repository: `git clone https://github.com/username/aletheia-sdk.git`
2. Navigate to the project directory: `cd aletheia-sdk`
3. Install dependencies: `npm install`

## Usage

To use the Aletheia SDK in your project, import the necessary modules and start using the provided functions and classes. Here's an example:

```javascript
import { Aletheia } from 'aletheia-sdk';

const aletheia = new Aletheia();

// Example: Validate a citizen's cedula
const cedulaNumber = 'XXX';
try {
  const isValid = await aletheia.services.validateCitizenCedula(cedulaNumber);
  console.log('Citizen Cedula:', isValid);
} catch (error) {
  console.error('Error validating citizen cedula:', error);
}

// Example: Retrieve data from the Ministry of Public Administration
try {
  const mapData = await aletheia.opendata.gob('map').datosAbiertos('servicios_publicos', 'json');
  console.log('Map Data:', mapData);
} catch (error) {
  console.error('Error retrieving map data:', error);
}
```

## Services

The Aletheia SDK provides services from the following providers:

| Name                                   | API URL                                    | API Specs                                   | Status       | Authentication       | Provider           |
| -------------------------------------- | ------------------------------------------ | --------------------------------------------| ------------ | ---------------------- | ------------------ |
| Validación Cedula                      | https://api.digital.gob.do/                 | [API Specs](https://developer.digital.gob.do/apis/ff9ce928-e16e-4ea9-9ce9-28e16e1ea96e)   | up-to-date   | No                     | Portal de API's Dominicano                |
| Fuel Prices                            | https://api.digital.gob.do/                 | [API Specs](https://developer.digital.gob.do/apis/fdf3319d-521e-4364-b331-9d521e636442)        | up-to-date   | No                     | Portal de API's Dominicano                |
| Territory Data                         | https://api.digital.gob.do/                 | [API Specs](https://developer.digital.gob.do/apis/34995f58-a45f-4b9e-995f-58a45f2b9e92)     | up-to-date   | No                     | Portal de API's Dominicano                |

## Open Data

The Aletheia SDK provides open data from the following API endpoints:

| Name                                   | API URL                                    | API Specs                                   | Status       | Authentication       |
| -------------------------------------- | ------------------------------------------ | --------------------------------------------| ------------ | ---------------------- |
| Ministerio de Administración Publica (MAP) | https://map.gob.do/api/                              | [API Specs](https://map.gob.do/api/datos_abiertos)                | up-to-date     | No      |
| Dirección General de Contrataciones Públicas (DGCP) | https://api.dgcp.gob.do/                         | [API Specs](https://api.dgcp.gob.do/)               | up-to-date     | No      |
| Dirección General de Impuestos Internos (DGII) | https://dgii.gov.do//wsMovilDGII/WSMovilDGII.asmx?WSDL                         | [Not Available](#)               | up-to-date     | No      |


## 💖 Special Thanks

We extend our sincere gratitude to all Dominican governments and private organizations that contribute to the public good by publishing their APIs and open data. Their commitment to transparency and accessibility empowers developers and enhances the capabilities of our development community.

A big thank you to:

- [Portal de API's Dominicano](https://developer.digital.gob.do/apis)
- [Ministerio de Administración Publica (MAP)](https://www.map.gob.do/)
- [Oficina Gubernamental de Tecnologías de la Información y Comunicación (OGTIC)](https://ogtic.gob.do/)
- [Dirección General de Contrataciones Públicas (DGCP)](https://www.dgcp.gob.do/)
- [Dirección General de Impuestos Internos (DGII)](https://dgii.gov.do/)

Your dedication to open data and public service is invaluable and greatly appreciated.


## 💖 Contributing

We welcome contributions in form of bug reports, feature requests, code changes, or documentation improvements.

Please make sure to follow our guidelines:
- [Code of Conduct →](./CODE_OF_CONDUCT.md)

For important changes please create first an (issue)[https://github.com/Aletheia-Data/aletheia-sdk/issues/new] to discuss what you would like to change.

Plase make sure that for each PR the necessary test are done.

## License

MIT License

Copyright (c) 2023 Aletheia Data

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[MIT](https://choosealicense.com/licenses/mit/)
