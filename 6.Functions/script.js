// functions

// function in js treated as "first class object"

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); //3

// arrow function
const sumArrow = (a, b) => a + b;
console.log(sumArrow(3, 4)); //7

// default parameter value
function greetings(name = "John") {
  console.log(`Hello ${name}`);
}
greetings(); //Hello John
greetings("Jane"); //Hello Jane

//expression
function greetings2(name = "John") {
  console.log(`Hello ${name}`);
}
greetings2(); //Hello John
greetings2("Jane"); //Hello Jane

//rest parameters
function total(x, y, ...numbers) {
  let sum = x + y;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(total(1, 2, 3, 4, 5)); //15

//spread operators
function total2(x, y, ...numbers) {
  let sum = x + y;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
let arr = [6, 7, 8];
console.log(total2(1, 2, ...arr)); // 1 + 2 + 6 + 7 +  8 = 29

// destructuring
const person = { name: "John", age: 20 };
const { name, age } = person;
console.log(name); // John
console.log(age); //  20

// array deconstruction
const arrr = ["a", "b", "c"];
[first, second] = arrr;
console.log(first); // a
console.log(second); // b

// object deconstruction
const objj = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = objj;
console.log(firstName); // John
console.log(lastName); // Doe

// default parameter values
function greetings(person = "World") {
  console.log("Hello", person);
}
greetings(); // Hello World
greetings("Alice"); // Hello Alice

// fo in keys, for of values
const person1 = {
  name: "John",
  age: 20,
};
for (let key in person1) {
  console.log(key);
  const value = person1[key]; // Outputs: name and then age of the person
  console.log(value); // John 20
}
