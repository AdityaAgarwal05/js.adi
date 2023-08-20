const score = 400
console.log(score) //JS automatically identify it as a number

const balance = new Number(100) //here explecitelly , we forced to treat or make it as a number
console.log(balance);

// SOME METHODS OF NUMBERS


//converting number into string and then measured the length
console.log(balance.toString().length);
//to convert a number in more precision value
console.log(balance.toFixed(2));

const otherNumber = 123.8996
console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))
