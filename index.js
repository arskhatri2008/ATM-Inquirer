import inquirer from "inquirer";
let myBalance = 100000;
let pinCode = 1234;
let pinAnswer = await inquirer.prompt([
    {
        message: "Enter your pin code",
        name: "pinCode",
        type: "number",
    },
]);
if (pinAnswer.pinCode === pinCode) {
    console.log("Correct Pin Code!");
    let transaction = await inquirer.prompt([
        {
            message: "Select your transaction",
            name: "transaction",
            type: "list",
            choices: ["Withdraw", "Deposit", "Balance Inquiry"]
        },
    ]);
}
else {
    console.log("Incorrect Pin Code.");
}
