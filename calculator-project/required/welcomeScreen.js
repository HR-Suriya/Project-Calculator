// Importing All The Necessary Files To Execute Code
import chalkAnimation from "chalk-animation";
import { demoCalculatorModel } from "./calculatorDemoModel.js";
import chalk from "chalk";
// Construction An Arrow Function To Use In Code Ahead
const sleep = () => {
    // Making And Returning A New Promise To Set Timeout To Use In Code Ahead
    return new Promise((res) => {
        setTimeout(res, 2500);
    });
};
// Making An async Function To Greet Every User.
async function welcome() {
    // Making A Variable To Run Animation On Text.
    let rainbowTitle = chalkAnimation.rainbow("Welcome To My New Calculator");
    // Using The sleep Arrow Function Which We Made Before With Await So Other Code Won't Be Executed Till This Line Of Code Is Done.
    await sleep();
    // Using .stop Term To End Animation.
    rainbowTitle.stop();
    // Consoling A Demo Calculator Model Made On Other Page With chalk.green So That It Will Print In Green Color.
    console.log(chalk.green(demoCalculatorModel));
}
;
// Exporting welcome Function We Made
export { welcome };
