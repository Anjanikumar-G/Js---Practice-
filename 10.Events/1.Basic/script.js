const button1Element = document.getElementById("button1");
console.log(button1Element);

function button1Callback() {
  button1Element.style.background = "red";
  console.log("click buuton  1");
}
button1Element.addEventListener("click", button1Callback);
const containerELement = document.getElementById("container");
console.log(containerELement);

containerELement.addEventListener("mouseout", () => {
  containerELement.style.background = "red";
});

containerELement.addEventListener("click", () => {
  containerELement.style.background = "purple";
});

containerELement.addEventListener("mouseenter", () => {
  containerELement.style.background = "yellow";
});

const listOFElements = document.getElementsByClassName("color");
const colorElement = listOFElements[0];

console.log(colorElement);

colorElement.addEventListener("click", () => {
  colorElement.style.background = "yellow";
});

//-------------- Mouse Events --------------------------------

//----------------- 1.click --------------

const button2Element = document.getElementById("button2");
console.log(button2Element);

function button2Callback() {
  button2Element.style.background = "pink";
  console.log("click buuton  2");
}

button2Element.addEventListener("click", button2Callback);

//----------------- 2.mouseover --------------
let counter = 0;

function mouseOverCallBack() {
  counter++;
  const messageElement = document.getElementById("container");
  messageElement.textContent = `You have touched ${counter} times`;
  console.log(`You have touched ${counter} times`);
}

document.body.addEventListener("mouseover", mouseOverCallBack);

//----------------- 3.mouseout --------------

function mouseOutCallBack() {
  // reset the counter to zero when we   leave the container div
  counter = 0;
  const messageElement = document.getElementById("container");
  messageElement.textContent = "";
}

document.body.addEventListener("mouseout", mouseOutCallBack);
