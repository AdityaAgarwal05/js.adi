const accountId = 67868
let accountEmail = "aditya@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 /*it is not allowed because cant change in case of const*/

accountEmail = "aa@aa.com"
accountPassword = "47858"
//prefer to use let in javascript rather than var

accountCity = "bengaluru"                                    

//thus we can make a variable , without giving datatype in javascript , because of issue in block scope and functional scope

console.log(accountId)

console.table([accountId , accountEmail , accountPassword , accountCity])

//thus we can print multiple variables all together in table form