const readline = require("readline"); // read user input from the terminal in Node.js

const rl = readline.createInterface({ //creating an interface for reading and writing data
    input: process.stdin,
    output: process.stdout
});

const leapYear = (num) => (num % 4 === 0 && num % 100 !== 0) || (num % 400 === 0);

rl.question("Enter a year: ", (input) => {
    let num = Number(input);// converts the user input (which is a string by default) into a number.
    
    if (isNaN(num)) { // Checks if num is Not a Number (NaN).
        console.log("Invalid input. Please enter a valid number.");
    } else if (leapYear(num)) {
        console.log(`${num} is a leap year`);
    } else {
        console.log(`${num} is not a leap year`);
    }
    
    rl.close();
});
