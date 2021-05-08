"use strict";

// Array with all possible Hex options
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colour = document.querySelector(".color");

// On Button click event change the colour
btn.addEventListener("click", () => {
  let hexColour = "#";  // Start of Hex colour value

  // Loop through hex array 6 times to get each element of Hex colour (#xxxxxx)
  for (let i = 0; i < 6; i++) {
    hexColour += hex[getRandomNumber()];
  }
  console.log(hexColour);

  // Change Background colour of body
  document.body.style.backgroundColor = hexColour;
  // Change text in span with color class
  colour.textContent = hexColour;
});

// Function to get a random number
function getRandomNumber() {
  // Use hex.length as multiple to get number between 0 and number of elements in hex array and use Math.floor to get lowest whole number
  return Math.floor(Math.random() * hex.length);
}
