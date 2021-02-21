const fs = require('fs');
const generateReadme = require('./generateReadme');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateReadme(data), err => {
    if (err) throw err;
    console.log('Readme successfully created.  See "./output/README.md" to see output');
  });
}

module.exports = writeToFile;
