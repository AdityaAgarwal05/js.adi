// 2 types of datatypes in JS - 1.) primitive  2.) Non primitive(Reference)

// Primitive - 7 types 
// String , Number , Boolean , Null , Undefined , Symbol , BigInt

//Non primitive(Reference) - 
// Array , Objects , Functions

//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
// eg.) const score = false    ,  here we did not tell ithat it is boolean datatype

//in typescript --> const score:Boolean = false

// numbers are numbers here ,  be it in decimal or float etc etc


// use of symbol- is used to  identify uniquely

const id = Symbol('33')
const id2 = Symbol('33')

console.log(id===id2) //o/p is false


//Arrays 
const heros = ["shaktiman", "aditya" , ]

//objects
let myObj = {
    name : Aditya
    age : 21
}


//functions
const myFunction = function(){
    console.log("Hello world");
}



