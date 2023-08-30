// Importing All The Necessary Files To Execute Code
import inquirer from "inquirer";
import chalk from "chalk";
import { addResult } from "./operators/add.js";
import { subtractResult } from "./operators/subtract.js";
import { multiplyResult } from "./operators/multiply.js";
import { divideResult } from "./operators/divide.js";
import { powerResult } from "./operators/power.js";
// Making An "asyn" Function For Asking Question From User
async function askQuestion() {
    // Constructing A Variable "calculatorQuestions" For Asking Multiple Question In Prompt With Help Of "inquirer", Using With "await" So Other Code Will Wait For This Block Of Code To Be Executed First
    const calculatorQuestions = await inquirer.prompt([
        // Definig First Question
        {
            // Giving Answer "type"
            type: "number",
            // Giving "name" To Answer
            name: "firstNumber",
            // Writing A "message" In "chalk.blue" So The "message" Could Be Written In Blue Color
            message: chalk.blue("Please Enter First Number: "),
        },
        // Defining Second Question
        {
            // Giving Answer "type"
            type: "list",
            // Giving "name" To Answer
            name: "operator",
            // Writing A "message" In "chalk.blue" So The "message" Could Be Written In Blue Color
            message: chalk.blue("Which Operation You Wan To Perform?"),
            // Giving Choices To Be Selected B/W Multiple Options
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division", "^ Power"]
        },
        // Defining Third Question
        {
            // Giving Answer "type"
            type: "number",
            // Giving "name" To Answer
            name: "secondNumber",
            // Writing A "message" In "chalk.blue" So The "message" Could Be Written In Blue Color
            message: chalk.blue("Please Enter Second Number: "),
        },
    ]);
    // Constructing Multiple Variables And Taking Value "calculatorQuestions" Variable
    const { firstNumber, secondNumber, operator } = calculatorQuestions;
    // Making A Condition That If Any Value From Multiple Variables Is Corrupt OR Null Don't Run This Block Of Code And Move To Other Code
    if (firstNumber && secondNumber && operator) {
        // Making A Variable "result" For Using Ahead
        let result = 0;
        // Making A Condition That If "operator" Is "+ Addition" Then Run This Block Of Code, Otherwise Move To Other Code
        if (operator === "+ Addition") {
            result = addResult(firstNumber, secondNumber);
            console.log(chalk.green(`Addition Of Number ${firstNumber} + ${secondNumber} Is Equal To = ${result}`));
        }
        // Making A Condition That If First Block Of Code Was Not Executed & "operator" Is "- Subtraction" Then Run This Block Of Code, Otherwise Move To Other Code
        else if (operator === "- Subtraction") {
            result = subtractResult(firstNumber, secondNumber);
            console.log(chalk.green(`Subtraction Between Number ${firstNumber} - ${secondNumber} Is Equals To = ${result}`));
        }
        // Making A Condition That If Any Of Previous Blocks Of Code Was Not Executed & "operator" Is "* Multiplication" Then Run This Block Of Code, Otherwise Move To Other Code
        else if (operator === "* Multiplication") {
            result = multiplyResult(firstNumber, secondNumber);
            console.log(chalk.green(`Multiplication Of Number ${firstNumber} X ${secondNumber} Is Equals To = ${result}`));
        }
        // Making A Condition That If Any Of Previous Blocks Of Code Was Not Executed & "operator" Is "/ Division" Then Run This Block Of Code, Otherwise Move To Other Code
        else if (operator === "/ Division") {
            result = divideResult(firstNumber, secondNumber);
            console.log(chalk.green(`Division Between Number ${firstNumber} / ${secondNumber} Is Equals To = ${result}`));
        }
        // Making A Condition That If Any Of Previous Blocks Of Code Was Not Executed & "operator" Is "^ Power" Then Run This Block Of Code, Otherwise Move To Other Code
        else if (operator === "^ Power") {
            result = powerResult(firstNumber, secondNumber);
            console.log(chalk.green(`Power Of ${secondNumber} For Number ${firstNumber} Is Equals To = ${result}`));
        }
    }
    // Making An Else Condition That If Any Value From Multiple Variables Is Corrupt & Previous Block Of Code Was Not Run Then Run This Block Of Code And Move To Other Code
    else {
        console.log(chalk.red("There Must A Error Please Do The Process Again OR Contact To Code Developer"));
    }
}
;
// Making An "asyn" Function "startQuestions" To Start Questions From User.
async function startQuestions() {
    // Making A "do while" Loop
    do {
        // Calling "askQuestion" Loop With "await" So That Other Code Will Wait For It To Be Executed First
        await askQuestion();
        // Making A Variable "repeat" & Asking Question From User In Prompt With Help Of inquirer With "await" So That Other Code Will Wait For It To Be Executed First
        var repeat = await inquirer.prompt(
        // Defining A Question
        {
            // Giving Answer "type"
            type: "input",
            // Giving "name" To Answer
            name: "restart",
            // Writing A "message" In "chalk.blue" So The "message" Could Be Written In Blue Color
            message: chalk.blue("Do You Want To Continue? Press Y OR N: "),
        });
    } 
    // Making A While Condition To Repeat The Loop If Condition Is Not True
    while (repeat.restart === "Y" || repeat.restart === "y" || repeat.restart === "yes" || repeat.restart === "Yes" || repeat.restart === "YES");
    { }
}
;
// Exporting startQuestions Function We Made
export { startQuestions };
