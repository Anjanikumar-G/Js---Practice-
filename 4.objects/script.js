const anju = {
  name: "Anju",
  age: 30,
};
console.log(anju); //outputs the object with its properties and values

//if we want person name only then
const name = anju.name;
console.log(name); //output : "anju"

//get

let person = {
  name: "Anju",
  age: 30,
  "hello world": "hey",
};
console.log(person["hello world"]); //output : hey

//edit

let person1 = {
  name: "Anju",
  age: 30,
  "hello world": "hey",
};
console.log(person1.name); //output : Anju
person1.name = "John";
console.log(person1.name); //output : John
console.log(person1); //output :{name: 'John', age: 30, 'hello world': 'hey'}

//delete

let person2 = {
  name: "Anju",
  age: 30,
  "hello world": "hey",
  version: 8,
};
console.log(person2.version); //output : 8
delete person2.version;
console.log(person2.version); //output : undefined
console.log(person2); //output :{name: 'Anju', age: 30, 'hello world': 'hey'}

////////////////////////////////
let person3 = {
  name: "Anju",
  age: 30,
  "hello world": "hey",
  version: 8,
};
const person4 = person3;
person3 = null;
console.log(person3); //output : null
console.log(person4); //output : {name: 'Anju', age: 30, 'hello world': 'hey', version: 8}
