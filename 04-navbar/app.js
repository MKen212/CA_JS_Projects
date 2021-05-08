"use strict";

// Get button and links elements
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// Listen for toggle button to be clicked
navToggle.addEventListener("click", () => {
  // console.log(links.classList);  // Display current list of all classes of element
  // console.log(links.classList.contains("show-links"));  // Returns true/false to check for a specific class

  // Check if show-links already in class list & update
  /* 
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");  // Remove Class
  } else {
    links.classList.add("show-links");  // Adding Class
  }
  */

  // Alternate method using .toggle method
  links.classList.toggle("show-links");

});
