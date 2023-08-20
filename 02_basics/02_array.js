const odd = [1,3,5,7]
const even= [2,4,6,8]

odd.push(even)
console.log(odd); // o/p is [ 1, 3, 5, 7, [ 2, 4, 6, 8 ] ]


// concat operator

const odd1 = [1,3,5,7]
const even1= [2,4,6,8]


const all_num = odd1.concat(even1)
console.log(all_num);   // o/p is [1,3,5,7,2,4,6,8]


//spread operator

const odd2 = [1,3,5,7]
const even2= [2,4,6,8]


const all_num1 = [...odd2, ...even2]
console.log(all_num1);   // o/p is [1,3,5,7,2,4,6,8]





const a_array = [  1, 2, 3, [4,5,6] ,7, [8,9,[10, 11]]  ]
const b_array = a_array.flat(5)



console.log(Array.isArray("aditya")); //o/p is false
console.log(Array.from("aditya")); // o/p is [ 'a', 'd', 'i', 't', 'y', 'a' ]
console.log(Array.from({name:"aditya"})); // o/p is []


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3)); // o/p is [ 100, 200, 300 ]

