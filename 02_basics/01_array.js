// the array object in JS can contains multiple datatypes
// array in JS are resizeble
//indexing starts from 0

const myArr = [0,1,2,3,4,5]
console.log(myArr)

//Array methods - myArr.pop()  ,   myArr2.push(8)

myArr.pop()
console.log(myArr) // o/p is [ 0, 1, 2, 3, 4 ]

const myArr2 = new Array(1,2,3,4,5) // another way to decalre an array
console.log(myArr2[0]); //o/p is 1

myArr2.push(8)
console.log(myArr2); //o/p is [ 1, 2, 3, 4, 5, 8 ]

myArr2.pop() // it is not working

// unshift method

myArr.unshift(9)
console.log(myArr) //o/p is [ 9, 0, 1, 2, 3, 4 ]

myArr.unshift(10)
console.log(myArr) //o/p is [10,  9, 0, 1, 2, 3, 4 ]

// shift method

myArr.shift()
console.log(myArr) //o/p is [ 9, 0, 1, 2, 3, 4 ]

myArr.shift()
console.log(myArr) //o/p is [ 0, 1, 2, 3, 4 ]


// include method - to askk whether the element is present or not

console.log(myArr.includes(9)); //o/p  is false

//indexof method - to find an index of given number

console.log(myArr.indexOf(9)) //O/P IS -1 , BECAUSE 9 IS NOT THERE IN ARRAY
console.log(myArr.indexOf(3))//o/p is 3

//join method --> converts the array in string format and elements are seperated by comas

const newArr = myArr.join() 
console.log(newArr); //o/p is 0,1,2,3,4

// slice and splice method

const myArr3 = [0,1,2,3,4,5]
console.log("A " , myArr3)

const myn1 = myArr3.slice(1,3) 
console.log("B " , myArr3) // o/p is B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr3.splice(1,3) // it manipulates the original array
console.log("C " , myArr3) // o/p is C  [ 0, 4, 5 ]
console.log(myn2); // o/p is [ 1, 2, 3 ]
