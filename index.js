// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const testData = require('./testData');
const generateReadme = require('./generateReadme');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your repository's title?",
    validate: value => {
      if (value) return true;
      return 'Please enter a valid title';
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateReadme(data), err => {
    if (err) throw err;
    console.log('Readme successfully created.  See "README.md" to see output');
  });
}

// TODO: Create a function to initialize app
function init() {
  const args = process.argv.slice(2, process.argv.length);
  let answers = '';
  if (args.includes('-t') || args.includes('test')) {
    answers = testData;
  } else {
    inquirer.prompt(questions).then(answers => {
      console.log('\nAnswers:');
      console.log(JSON.stringify(answers, null, '  '));
    });
  }

  writeToFile('./README.md', answers);
}

// Function call to initialize app
init();
