// TODO: Include packages needed for this application
// * DONE
const fs = require('fs');
const inquirer = require('inquirer');
let questions = require('./assets/data/questions');
const test = require('./assets/test/editor');
const testData = require('./assets/data/testData');
const writeToFile = require('./assets/functions/writeToFile');

async function loadPrompts() {
  inquirer.prompt(questions).then(answers => {
    writeToFile('.output/README.md', answers);
  });
}

// TODO: Create a function to initialize app
async function init() {
  const args = process.argv.slice(2, process.argv.length);
  let answers = '';

  switch (true) {
    case args.includes('-t') || args.includes('test'):
      test();
      break;
    case args.includes('-td') || args.includes('testData'):
      answers = testData;
      writeToFile('./output/README.md', answers);
      break;
    default:
      answers = await loadPrompts();
  }
}

// Function call to initialize app
init();
