#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
const answers = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "enter to currency: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "enter your amount: ",
        type: "number"
    }
]);
// console.log(answers);
let fromAmount = currency[answers.from];
let toAmount = currency[answers.to];
let amount = answers.amount;
let baseAmount = amount / fromAmount; //USD base currency //4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
