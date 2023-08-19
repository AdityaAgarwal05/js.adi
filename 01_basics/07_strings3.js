const gameName = new String('aditya-agarwal')

//substring method

const newString = gameName.substring(0,4)
console.log(newString) //o/p is adit

// slice methjod

const anotherString = gameName.slice(0,5)
console.log(anotherString) // o/p is adity

// trim method  --> it removes unwanted spaces

const newStringOne = "      aditya   "
console.log(newStringOne)
console.log(newStringOne.trim())


//replace method

const url = "https://aditya.com/aditya%20agarwal"
console.log(url.replace('%20', '-') ) // o/p is https://aditya.com/aditya-agarwal


// split method  --> to convert a string in an array based on some identifier/seperator

const MyName = new String('aditya-agarwal-21')
console.log(MyName.split('-')); //o/p is [ 'aditya', 'agarwal', '21' ]
