#! /usr/bin/env node
///////////////////////////////////////////////////////////////////////////// CLI CALCULATOR /////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////    Using Inquirer, Chalk and Nested if else             /////////////////////////////////////////////////////////////

import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
  { message: "Enter First number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operators to perform operations",
    type: "list",
    name: "operator",
    choices: [" ( + )  Addition", " ( - )  Subtraction", " ( * )  Multiplication", " ( / )  Division"," ( % )  Modulas"," ( ** )  Exponentiation"],
  },
]);
if (answer.operator === " ( + )  Addition") {
  console.log(chalk.redBright.bold.bgBlueBright(answer.firstNumber + answer.SecondNumber));
} else if (answer.operator === " ( - )  Subtraction") {
  console.log(chalk.blueBright.bold.bgGreen(answer.firstNumber - answer.SecondNumber));
} else if (answer.operator === " ( * )  Multiplication") {
  console.log(chalk.redBright.bold.bgWhite(answer.firstNumber * answer.SecondNumber));
} else if (answer.operator === " ( / )  Division") {
  console.log(chalk.green.bold.bgRedBright(answer.firstNumber / answer.SecondNumber));
}else if (answer.operator === " ( % )  Modulas") {
  console.log(chalk.redBright.bold.bgYellowBright(answer.firstNumber % answer.SecondNumber));
}else if (answer.operator === " ( ** )  Exponentiation") {
  console.log(chalk.redBright.bold.bgMagentaBright(answer.firstNumber ** answer.SecondNumber));
}

 else {
  console.log(chalk.redBright.strikethrough.bgBlueBright("Please Select valid operator"));
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
