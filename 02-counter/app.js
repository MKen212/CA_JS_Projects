"use strict";

// Set initial count
let count = 0;

// Get Current Value and "Array" of All Buttons from page
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(value);
// console.log(buttons);

// Loop through each button using forEach method
btns.forEach((btn) => {
  //console.log(button);

  // On Button click, find which button was clicked
  btn.addEventListener("click", (event) => {
    // console.log(event.currentTarget.classList);
    const styles = event.currentTarget.classList;

    // Based on which button was clicked process the change to Count
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // Based on value of count, change the text colour
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    // Make change to Value based on Count
    value.textContent = count;
  });
});
