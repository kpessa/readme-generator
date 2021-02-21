const { title } = require('../data/testData');
const licenses = require('../data/licenses');

const generateReadme = data => {
  const { title, description, installation, usage, license, contribution, tests } = data;
  return `${renderLicenseLink(license)}
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
${renderLicenseSection(license)}

## Contributing
${contribution}

## Tests
${tests}

## Questions
  `;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `<img src="https://img.shields.io/badge/license-${license}-yellow" alt="${license} badge">`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `<a href="https://choosealicense.com/licenses/${licenses[license].id}">${renderLicenseBadge(license)}</a>`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseLink(license)}
  <p>${licenses[license].description}</p>`;
}

module.exports = generateReadme;
