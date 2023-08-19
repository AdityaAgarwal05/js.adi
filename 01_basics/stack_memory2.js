//2.) Heap memory -  if non-primitive data types are used then Heap memory is used
// it means we get the reference of original value , that mean direct access to original value , thus changes applies on original value too


let user1 = {
      email: "aditya@gmail.com" ,  // comma is needed to seperate 2 different objects
      upi: "user@ybl"
}

let user2 = user1
user2.email="agarwal@gmail.com"
console.log(user1.email) // 0/p is agarwal@gmail.com
console.log(user2.email) // 0/p is agarwal@gmail.com