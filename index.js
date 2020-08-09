const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "Enter a Project Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a Project Description:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter a Table of Contents(comma separated, lowercase):",
        name: "tableOfContents"
    },
    {
        type: "editor",
        message: "Enter an Installation Guide:",
        name: "installation"
    },
    {
        type: "editor",
        message: "Enter Usage Guide:",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "Check licenses used:",
        name: "license",
        choices: ['MIT', 'GPLv3', 'AGPL']
    },
    {
        type: "input",
        message: "Enter Contributors(github username, comma separated):",
        name: "contributing"
    },
    {
        type: "input",
        message: "Enter Tests ran(comma separated):",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter your GitHub email:",
        name: "questionsEmail"
    },
    {
        type: "input",
        message: "Enter the URL to your GitHub profile picture",
        name: "questionsPic"
    }
];

function writeToFile(fileName, data) 
{
    fs.writeFile(fileName, data, 'utf-8', (err) => {
        if(err) throw err;
        console.log('Success!');
    });
}

function init() 
{
    inquirer
    .prompt(questions)
    .then( (response) => {
        console.log(response);
        writeToFile("README.md", generateMarkdown(response));
    });
}

init();
