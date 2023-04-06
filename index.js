// packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/generateLogo");

// number of characters check
const checkLength = async (input) => {
    if (input.length > 3 || input.length <1) {
        console.log("Please enter at least 1 and no more than 3 characters!");
    } else {
        return true;
    }
}

