//Dates
// since 1 jan 1970 , the countdown is on of time , every second it is increasing

let myDate = new Date()
console.log(myDate) // unreadable date format comes , 2023-08-20T15:52:39.073Z
console.log(typeof myDate);// date is an object

// some methods of date

console.log(myDate.toString());          // o/p is Sun Aug 20 2023 15:52:39 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());      // o/p is Sun Aug 20 2023
console.log(myDate.toLocaleString());    // o/p is 8/20/2023, 3:52:39 PM
console.log(myDate.toLocaleDateString(); // o/p is 8/20/2023
console.log(myDate.toJSON());            // o/p is 2023-08-20T15:52:39.073Z
console.log(myDate.toISOString());       // o/p is 2023-08-20T15:52:39.073Z


// to decalre a specific date

let myCreatedDate1 = new Date(2023 , 0 , 11) // months starts from 0 in JS
console.log(myCreatedDate1.toDateString()); // o/p is Wed Jan 11 2023


let myCreatedDate2 = new Date(2023 , 0 , 23 , 5 , 3) 
console.log(myCreatedDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM


let myCreatedDate3 = new Date(14-01-2001)// in DD-MM-YYYY type format , month starts from 01 
console.log(myCreatedDate3.toLocaleString()); // 12/31/1969, 11:59:58 PM


let myTimeStamp= Date.now()
console.log(myTimeStamp); // 1692546759323 --> milisecond from 1st jan 1970 to now

let myCreatedDate4 = new Date("01-06-2023")
console.log(myCreatedDate4.getTime());// 1672963200000 --> miliseconds from 1 jan 1970 to 01-06-2023 comes


// now by comparing miliseconds of myCreatedDate4 and myTimeStamp , we can calculate the duration


console.log(Math.floor(Date.now()/1000)); // 1692546759 --> to convert in seconds from miliseconds



 // some other methods

let newDate = new Date()
console.log(newDate); // 2023-08-20T15:52:39.324Z
console.log(newDate.getMonth()); // o/p is 7
console.log(newDate.getDay()); // o/p is 0


// customizing to localeString

newDate.toLocaleString('default', {
    weekday: "long",
})


