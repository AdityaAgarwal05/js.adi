// 2 types of memory -
// 1.) stack memory  ,  2.) heap memory

//1.)stack memory - if primitive data types are used then Stack memory is used
// it means we get a copy of original value


let a   = "b"
 
let c = a // here copy of "a" is given
 
c= "zz" //thats why by doing this , "a" didnt change , because copy of a was assigned to c in previous line

console.log(c) // o/p is zz

console.log(a) //o/p is b
