// tricky conversions

console.log("1"+2) //o/p is 12
console.log(1+"2") //o/p is 12
console.log("1"+2+2)//o/p is 122
console.log(1+2+"2")//o/p is 32
// read documentation for these tricky conversions

console.log(+true) // o/p is 1
console.log(+"") // o/p is 0


// prefix and postfix 

let counter = 100
counter++
console.log(counter) // o/p is 101
