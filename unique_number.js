var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let uniqueNumbers = numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

console.log("Unique Numbers:", uniqueNumbers);
