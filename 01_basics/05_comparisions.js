
//BASIC COMPARISIONS

console.log(5>3)
console.log(5>=3)
console.log(5<3)
console.log(5==3)
console.log(5!=3)


//TRICKY COMPARISIONS

console.log("5">3) //o/p is true



console.log(null>0) //o/p is false
console.log(null>=0) //o/p is true
console.log(null<0) //o/p is false
console.log(null==0) //o/p is false


//  comparision check(< , > , <= , >=) and equality check(==) works differently , 
// comparision convert null to a number , treating as 0.
// thats why null>=0 is true while null>0 is false 
// but equality does not treat as 0 , that is why null==0 -> o/p is false


console.log(undefined>0) //o/p is false

console.log(undefined<0) //o/p is false

console.log(undefined==0) //o/p is false



// STRICT CHECK(===) , it even checks datatype too

console.log("3"===2) //o/p is false


// so in a nutshell we should avoid these types of comparisions