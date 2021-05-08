"use strict";

// Pre-set 4 colours to choose between
const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Get Button and Current Colour from page
const btn = document.getElementById("btn");
const colour = document.querySelector(".color");

// On Button click event change the colour
btn.addEventListener("click", () => {
  // console.log(document.body);

  // Get random number between 0 - 3 (Length of colours array)
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  // Change Background colour of body
  document.body.style.backgroundColor = colours[randomNumber];
  // Change text in span with color class
  colour.textContent = colours[randomNumber];
});

// Function to get a random number
function getRandomNumber() {
  // Use colours.length as multiple to get number between 0 and number of elements in colours array and use Math.floor to get lowest whole number
  return Math.floor(Math.random() * colours.length);
}
