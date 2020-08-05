
const inquirer = require("inquirer");
const createREADME = require("./readMeCreate");
const fs = require("fs");

inquirer
.prompt([
    {
        name: "GitHubProfile",
        message: "What is your GitHub Profile User Name?",        
    },
    {
        name: "RepositoryName",
        message: "What is your repository name?",        
    },
    {
        name: "Title",
        message: "What is your project's name?",        
    },
    {
        name: "Description",
        message: "Please give a brief description of the project.",        
    },
    {
        name: "Installation",
        message: "What are the steps required to install your project?",        
    },
    {
        name: "Usage",
        message: "What is the purpose of the app?",        
    },
    {
        name: "License",
        message: "Which license is being used?",        
    },
    {
        name: "Contributing",
        message: "Who are the contributors?",        
    },
    {
        name: "GitHubEmail",
        message: "What is your GitHub Email Alias?",        
    },
    {
        name: "TableOfContents",
        message: "Would you like a table of contents? (Optional)",        
    },


])
.then (answers => {
    console.info("Answers: ", answers);
});

// format object to readme file

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
        .then( (response) => 
        {
            console.log(response);
            writeToFile("README.md", createREADME(response));
        });
}

init();
