
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

// const questions = [ 

// ];

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
            writeToFile("README.md", generateMarkdown(response));
        });
}

init();
