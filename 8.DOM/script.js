// DOM
//---------------------1.get ElementById ----------------------------------------------------------------
const para = document.getElementById("para");
console.log(para);
document.getElementById("para").style.color = "red";

//--------------------2.getElementsByClassName--------------------------------
const div = document.getElementsByClassName("container");
console.log(div[0]);

//--------------------3.getElementsByTagName--------------------------------
const h1 = document.getElementsByTagName("h1")[0];
console.log(h1);

//--------------------4.QuerySelector & QuerySelectorAll------------------------
const h2 = document.querySelector("h2");
console.log(h2);

const links = document.querySelectorAll("a");
console.log(links);

//-------------------- Edit --------------------------------
const e = document.getElementById("heading");
e.style.background = "yellow";
e.style.color = "red";
e.textContent = "Anjanikumar";

//-------------------- Delete --------------------------------
const d = document.getElementById("heading");
d.remove();

//-------------------- Create -------------------------------
let newP = document.createElement("p");
newP.innerHTML = "This is a Anjanikumar";
document.body.appendChild(newP);

//-------------------- Append -------------------------------
const body = document.querySelector("body");
let appendParagraph = document.createElement("p");
appendParagraph.innerText = "Appending paragraph to the Body!";
body.appendChild(appendParagraph);

//--------------------DOM tree -------------------------------
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.querySelector("body"));
console.log(document.querySelectorAll("body"));

//-------------------- Event Listeners -------------------------------
const button = document.getElementsById("#myButton");
button.addEventListener("click", () => {
  console.log("Button Clicked!");
});

button.onclick = function () {
  alert("You clicked me!");
};
