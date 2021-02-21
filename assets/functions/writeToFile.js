const fs = require('fs');
const generateReadme = require('./generateReadme');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateReadme(data), err => {
    if (err) throw err;
    console.log('Readme successfully created.  See "README.md" to see output');
  });
}

module.exports = writeToFile;
