const { title } = require('../data/testData');

const generateReadme = data => {
  const { title, description, installation, usage, license, contribution, tests } = data;
  return `![license badge](https://img.shields.io/badge/license-${license}-yellow)
  # ${title}
  
## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
<a href="${renderLicenseLink(license.toLowerCase())}"><img src="https://img.shields.io/badge/license-${license}-yellow" alt="license badge"></a>
${renderLicenseSection(license)}

## Contributing
${contribution}

## Tests
${tests}

## Questions
  `;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://choosealicense.com/licenses/${license}/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  switch (license.toLowerCase()) {
    case 'mit':
      return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
}

module.exports = generateReadme;
