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
    //   console.log("Correct Pin Code!");
    let transaction = await inquirer.prompt([
        {
            message: "Select your transaction",
            name: "transactionMode",
            type: "list",
            choices: ["Fast Cash Withdraw", "Withdraw", "Deposit", "Balance Inquiry"],
        },
    ]);
    if (transaction.transactionMode === "Withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                message: "Enter the amount you want to withdraw",
                name: "withdrawAmount",
                type: "number",
            },
        ]);
        if (withdrawAmount.withdrawAmount <= myBalance) {
            console.log(`Withdrawal successful. Your new balance is ${myBalance - withdrawAmount.withdrawAmount}`);
        }
        else {
            console.log("Insufficient Balance.");
        }
    }
    else if (transaction.transactionMode === "Deposit") {
        let depositAmount = await inquirer.prompt([
            {
                message: "Enter the amount you want to deposit",
                name: "depositAmount",
                type: "number",
            },
        ]);
        console.log(`Deposit successful. Your new balance is ${myBalance + depositAmount.depositAmount}`);
    }
    else if (transaction.transactionMode === "Balance Inquiry") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (transaction.transactionMode === "Fast Cash Withdraw") {
        let fastCashWithdraw = await inquirer.prompt([
            {
                message: "Select your fast cash withdraw",
                name: "fastCashWithdraw",
                type: "list",
                choices: ["5000", "10000", "20000", "25000", "50000"],
            },
        ]);
        if (fastCashWithdraw.fastCashWithdraw <= myBalance) {
            console.log(`Withdrawal successful. Your new balance is ${myBalance - fastCashWithdraw.fastCashWithdraw}`);
        }
        else {
            console.log("Insufficient Balance.");
        }
    }
}
else {
    console.log("Incorrect Pin Code.");
}
