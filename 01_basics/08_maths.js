console.log(Math); // o/p is Object [Math] {}

// methods of math

console.log(Math.abs(-5)); // negative becomes positive , positive remains positive , 5  // o/p is
console.log(Math.round(5.6))  // o/p is 6
console.log(Math.ceil(5.6))  // o/p is 6
console.log(Math.floor(5.6))  // o/p is 5
console.log(Math.min(5,6,3,4,5,8,1))  // o/p is 1
console.log(Math.max(5,6,3,4,5,8,1))  // o/p is 8



console.log(Math.random()) //any random value between 0.0000000....  to 0.99999999...
console.log((Math.random()*10)+1) //value between 1.something  to 9.something
console.log(Math.floor(Math.random()*10)+1) // precsion value , value between 1 to 9

// for generic formula -->

const min =10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min); // value between 10 to 20