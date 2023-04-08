// packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/generateLogo");
const { check } = require("yargs");

// number of characters check
const checkLength = async (input) => {
    if (input.length > 3 || input.length <1) {
        console.log("Please enter at least 1 and no more than 3 characters!");
    } else {
        return true;
    }
}

// prompt questions
const questions = inquirer.prompt([

    {
        type: 'input',
        name: 'text',
        message: 'Please enter the text for your logo (3 Characters):'
        validate: checkLength,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the color you would like your text to be:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select the shape you would like your logo to be:'
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the color you would like your logo to be:'
    },    
]) .then(response => writeToFile(response));

//write file and catch errors
function writeToFile(response) {
    fs.writeFile("logo.svg", generateLogo(response), (err) => err ? console.log(err) : console.log("Generated logo.svg!"));
}