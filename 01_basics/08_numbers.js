const score = 400
console.log(score) //JS automatically identify it as a number , o/p  is 400

const balance = new Number(100) //here explecitelly , we forced to treat or make it as a number
console.log(balance); // o/p is [Number: 100]

// SOME METHODS OF NUMBERS


//converting number into string and then measured the length
console.log(balance.toString().length); // o/p is 3
//to convert a number in more precision value
console.log(balance.toFixed(2)); // o/p is 100.00

const otherNumber = 123.8996
console.log(otherNumber.toPrecision(3)); // o/p is 124


const hundreds = 1000000
console.log(hundreds.toLocaleString()) // o/p is 1,000,000
console.log(hundreds.toLocaleString('en-IN')) // o/p is 10,00,000
