// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
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
        message:"Add contribution guidlines for your project"
    },
    {
        type: "input",
        name:"test",
        message:"Add test instructions for your project"
    },
    {
        type: "list",
        name:"liscense",
        message:"What liscense are you using?",
        choices:[
            "Apache 2.0",
            "GPL 2.0",
            "GPL 3.0",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
   /* writeToFile("./output/README.md", generateMarkdown(data));*/
}

// Function call to initialize app
init();
