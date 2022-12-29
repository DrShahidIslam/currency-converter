#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import Choices from "inquirer/lib/objects/choices.js";

figlet.text('Welcome to the Currency Converter', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

const askdetails =async () => {
    let ask : {firstCurrency: "usd" | "pkr", secondCurrency: "usd" | "pkr", amount: number} = await inquirer.prompt([
        {name : "firstCurrency",
        type: "list",
        message: "Please select the currency you want to change",
        choices: ["usd", "pkr"]
        },
        {name : "secondCurrency",
        type: "list",
        message: "Please select the currency you need",
        choices: ["usd", "pkr"]
        },
        {name : "amount",
        type: "number",
        message: "How much amount do you want to convert?"
        } 
]);
const {firstCurrency, secondCurrency, amount} = ask;

    let curr = {
        "usd":{
        "usd": 1,
        "pkr": 227.17},

        "pkr":{
            "usd": .0044,
            "pkr": 1
        }

    }
    if (firstCurrency && secondCurrency && amount){
        let result = amount * curr[firstCurrency][secondCurrency]
        console.log(`Your conversion from ${firstCurrency} to ${secondCurrency} is ${result}`)
    }else {
        console.log("Please enter correct values")
    }

    console.log("Thankyou for using the currency converter")
}
askdetails()