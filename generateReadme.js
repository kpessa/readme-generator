const generateReadme = data => {
  return `# ${data.title}
  
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.description}
## Usage

## License

## Contributing

## Tests

## Questions
  `;
};

module.exports = generateReadme;
