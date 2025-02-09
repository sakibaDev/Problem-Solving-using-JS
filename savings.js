const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const savings = (payments, livingCost) => {
    let totalIncome = 0;

    for (let payment of payments) {
        if (payment > 3000) {
            totalIncome += payment * 0.8; 
        } else {
            totalIncome += payment;
        }
    }

    let savings = totalIncome - livingCost;
    return savings > 0 ? savings : "earn more";
};

rl.question("Enter all payments separated by commas: ", (paymentsInput) => {
    const payments = paymentsInput.split(",").map(Number);

    rl.question("Enter the living cost: ", (livingCostInput) => {
        const livingCost = Number(livingCostInput);

        
        const result = savings(payments, livingCost);
        console.log("Savings:", result);

        rl.close();
    });
});
