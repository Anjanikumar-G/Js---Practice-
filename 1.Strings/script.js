const score = 100;
const commentary = `hey india's score is ${score}`;

console.log(commentary); // hey india's score is

//---------> toString()Method <---------------//
let obj = {
  name: "Anju",
  age: 30,
};
const answer = obj.toString();
console.log(answer); // [object, object]
console.log(JSON.stringify(obj)); // {'name': "Anju", 'age': '30')

//----------> Soecial Character / Escape character <---------------//
let string = "hello world";
console.log(string); //output: hello world
console.log("hello \n world");

//---------> Opeartion on string <---------------//
console.log(string.length); //output: 11

//---------> get charAt <---------------//
console.log(string.charAt(0)); //output: h

//---------> To upper case and To lower case <---------------//
console.log(string.toUpperCase()); //output: HELLO WORLD
console.log(string.toLowerCase()); //output: hello world

//---------> sub Strings <---------------//
console.log(string.substring(0, 5)); //output: hello
console.log(string.substring(6, 11)); //output: world

//---------> Trim <---------------//
console.log(string.trim()); //output: hello world
console.log(string.trimLeft()); //output: world
console.log(string.trimRight()); //output: hello world

//---------> searching <---------------//
var name = "     hey there hello world      ";
console.log(name.includes("hellosssses")); //output: false
console.log(name.includes("hey")); //output: true

//-----------> comparsion <------------//
console.log(10 > 9); //output: true
console.log(10 > 10); //output: false
console.log(10 < 10); //output: false
console.log(10 < 9); //output: true
console.log(10 == 10); //output: true
console.log(10 == 9); //output: false
console.log(10 === 10); //output: true

//-------------------------------------------> important <--------------------------------------//
const country = "india";
const char1 = country.charAt(0).toUpperCase();
const remaing = country.substring(1);
console.log(char1 + remaing); //output: India
