// Arrays

let arr = [1, 2, 3, 4, 5];
console.log(arr);

//-----------------> get <---------------//
console.log(arr[0]); //output: 1
console.log(arr[1]); //output: 2
console.log(arr[arr.length - 1]); //output: 5
console.log(arr.length); //output: 6

//--------------------> push <--------------//
arr.push(6);
console.log(arr); //output: [1, 2,  3, 4, 5,  6]

//--------------------> pop <---------------//
let remElem = arr.pop();
console.log("Removed element is " + remElem); //output: Removed element is 6
console.log(arr); //output: [1, 2, 3,  4, 5]

//--------------------> shift <---------------//
remElem = arr.shift();
console.log("Removed element is " + remElem); //output: Removed element is 1
console.log(arr); //output: [2, 3, 4,  5]

//-------------------> unshift <--------------//
arr.unshift(0);
console.log(arr); //output: [0, 2, 3,  4, 5]

//--------------------> join <---------------//
console.log(arr.join()); //output: 0,2,3,4,5 (default separator)
console.log(arr.join("-")); //output: 0-2-3-4-5 ('-' as separator)

//-------------------> sort <---------------------//
arr.sort((a, b) => a - b); //sort in ascending order
console.log(arr); //output: [0, 1, 2,  3, 4, 5]

//-------------------> reverse <-------------//
arr.reverse();
console.log(arr); //output: [5, 4, 3,    2, 1, 0]

//-------------------> slice <---------------//
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); //output: [3, 4,  5]

//----------------> indexOf & lastIndexOf <-------------//
console.log(arr.indexOf(3)); //output: 2
console.log(arr.lastIndexOf(3)); //output: 2

//----------------> concat <-------------------//
let concatArr = ["x", "y"];
let resultantArr = arr.concat(concatArr);
console.log(resultantArr); //output: [0, 1, 2, 3, 4, 5, 'x', 'y']

//----------------> for Each <-----------------//
arr.forEach((elem, index) => {
  console.log(elem); //output: 0
  console.log(index); //output: 0
});

//------------------> map <------------------//
let mappedArr = arr.map((elem) => elem * 2);
console.log(mappedArr); //output: [0, 4, 6, 8, 10]

//------------------> filter <----------------//
let filteredArr = arr.filter((num) => num % 2 === 0);
console.log(filteredArr); //output: [0, 2, 4]

//------------------> reduce <-------------//
let sum = arr.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
console.log(sum); //output: 14 (2+3+4+5=14)

//-----------------> Find <-----------------//
console.log(arr.find((elem) => elem === 3)); //output: 3

//----------------> Find Index <-----------------//
console.log(arr.findIndex((elem) => elem === 3)); //output: 2

//-----------------> Find Last Index Of <-----------------//
console.log(arr.findLastIndex((elem) => elem === 3)); //output: 2
