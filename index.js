const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name:"title",
            message:"What is your project title?"
        },
        {
            type: "input",
            name:"description",
            message:"Enter a description of your project"
        },
        {
            type: "input",
            name:"installation",
            message:"Add installation instructions for your project"
        },
        {
            type: "input",
            name:"usage",
            message:"Add usage information for your project"
        },
        {
            type: "input",
            name:"contribution",
            message:"Tell others how to contribute to your project"
        },
        {
            type: "input",
            name:"tests",
            message:"Add test instructions for your project"
        },
        {
            type: "list",
            name:"license",
            message:"What liscense are you using?",
            choices:[
                "Apache 2.0",
                "GPL v2",
                "GPL v3",
                "MIT"
            ],
        },
        {
            type: "input",
            name:"github",
            message:"Enter your GitHub username"
        },
        {
            type: "input",
            name:"email",
            message:"Enter your email address"
        }
    ]);
}

const writeToFile = util.promisify(fs.writeFile);

const init = () => {
    questions()
    .then((data) => writeToFile('./output/README.md', generateMarkdown(data)))
    .catch((err) => console.error(err));
}

init();
