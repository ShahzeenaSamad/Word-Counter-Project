#! /usr/bin/env node
//SHABANG


import chalk from "chalk"
import inquirer from "inquirer"

//Display a colorful welcome message
console.log(chalk.yellowBright("=".repeat(60)))
console.log(chalk.bold.underline.bgCyanBright("\t\t ***** 'WORD COUNTER' *****\t"))
console.log(chalk.yellowBright("=".repeat(60)))

//promt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name : "sentence",
        type : "input",
        message : "Enter a Sentence"
    }
]);

//trimming a sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ")

//Analysis of user input sentence
console.log("=".repeat(60))
console.log(chalk.bold("- Sentence words:"))
console.log(words);
console.log(chalk.bold(`\n - Word count: ${chalk.bold.yellowBright(words.length)}`))
console.log("=".repeat(60));


