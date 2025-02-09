const readline = require ("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const oddOreven = (num) =>(num %2===0)

rl.question("Enter your number: ",(input) =>{
    let num = Number(input);

    if(isNaN(num)){
        console.log("Invalid Number")
    }
    else if(oddOreven(num)){
        console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }

    rl.close();
});