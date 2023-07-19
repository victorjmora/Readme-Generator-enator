const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate a badge for the chosen license
function generateLicenseBadge(license) {
    return `![License](https://img.shields.io/badge/License-${license}-green.svg)`;
}

// Function to generate a notice for the chosen license
function generateLicenseNotice(license) {
    let notice = "";
    switch (license) {
        case 'MIT':
            notice = "This application is covered under the MIT License.";
            break;
        case 'GNU GPLv3':
            notice = "This application is covered under the GNU GPLv3 License.";
            break;
        case 'Apache License 2.0':
            notice = "This application is covered under the Apache License 2.0.";
            break;
        default:
            notice = "";
    }
    return notice;
}

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What would you like the description to be?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What would you like the content of the Installation section to have?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Anything else you want to type under Usage?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed in this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What will the Tests section content be?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(`README file "${fileName}" created successfully!`);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        // Process user input and generate README contents
        const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${generateLicenseBadge(answers.license)}
${generateLicenseNotice(answers.license)}

## Contributors
${answers.contributors}

## Tests
${answers.tests}

## Questions
For any questions, please contact me through GitHub: [${answers.github}](https://github.com/${answers.github})
or email: ${answers.email}
`;
        // Write README file
        writeToFile('README.md', readmeContent);
    });
    }
    
    // Call the init function to start the application
    init();