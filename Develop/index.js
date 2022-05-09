// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'email',
    message: 'Enter email address?',
    default: "trevorHilimire@gmail.com"
  },
  {
    type: 'input',
    name: 'title',
    message: "Project's name?"
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a discription of the project eg- motivation for building, problmes it solves, what you learned..'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to apply to this project?',
    choices: ["GNUGPLv3 -lets people do almost anything they want with your project, except distributing closed source versions" ,
           "MITLicense: It lets people do almost anything they want with your project, like making and distributing closed source versions",
           "ApacheV2 - Companies may include the licensed code in software they sell",
           "none"]
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use'
  },
  {
    type: 'input',
    name: 'usageScreenshotPath',
    message: 'Include relative path for any media you would like displayed in usage section seperated by commas **with no spaces**. ex-"assets/images/screenshot.png,assets/images/screenshot2.png"',
    default: "No"
  },

  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include as well. '
  },
  {
    type: 'input',
    name: 'features',
    message: 'If your project has a lot of features, list them here seperated by commas'
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(data => {
    writeToFile('README.md', generateMarkdown({ ...data }));
  });
}

// Function call to initialize app
init();
// inquirer.prompt(questions).then(responses => {console.log(responses.license[0])})