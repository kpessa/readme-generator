const licenses = require('./licenses');

// TODO: Create an array of questions for user input
// ! Make more questions
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'github username?',
    validate: value => {
      if (value) return true;
      return 'Please enter a valid username';
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'email?',
    validate: value => {
      if (value) return true;
      return 'Please enter a valid username';
    },
  },
  {
    type: 'input',
    name: 'title',
    message: "repository's title?",
    validate: value => {
      if (value) return true;
      return 'Please enter a valid title';
    },
  },
  {
    type: 'input',
    name: 'description',
    message: "repository's description?",
  },
  {
    type: 'input',
    name: 'installation',
    message: 'installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'usage information?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'test instructions?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'license?',
    choices: Object.keys(licenses),
  },
];

module.exports = questions;
