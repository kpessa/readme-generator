// TODO: Create an array of questions for user input
// ! Make more questions
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
    validate: value => {
      if (value) return true;
      return 'Please enter a valid username';
    },
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your repository's title?",
    validate: value => {
      if (value) return true;
      return 'Please enter a valid title';
    },
  },
  {
    type: 'input',
    name: 'description',
    message: "What is your repository's description?",
  },
  {
    type: 'input',
    name: 'installation',
    message: "What is your repository's installation instructions?",
  },
  {
    type: 'input',
    name: 'usage',
    message: "What is your repository's usage information?",
  },
  {
    type: 'input',
    name: 'contribution',
    message: "What is your repository's contribution guidelines?",
  },
  {
    type: 'input',
    name: 'tests',
    message: "What is your repository's test instructions?",
  },
  {
    type: 'list',
    name: 'license',
    message: 'What License did you use?',
    choices: 'MIT, GNU, Apache'.split(', '),
  },
];

module.exports = questions;
