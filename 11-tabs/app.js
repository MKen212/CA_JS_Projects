"use strict";

// Select HTML Elements for About Article, Buttons and Content
const about = document.querySelector(".about");
const tabButtons = document.querySelectorAll(".tab-btn");
const contentDivs = document.querySelectorAll(".content");

// Add Event Listener to "about" container to see if a category is selected
about.addEventListener("click", (e) => {
  // console.log(e.target);
  // console.log(e.target.dataset.category);
  const category = e.target.dataset.category;
  // Only proceed if the target element contains data-category
  if (category) {
    // Remove active class from all buttons
    tabButtons.forEach((button) => {
      button.classList.remove("active");
    });
    // Add active class back in for the one clicked
    e.target.classList.add("active");

    // Remove active class from all contentDivs
    contentDivs.forEach((contentDiv) => {
      contentDiv.classList.remove("active");
    });
    // Add active class back in for the div with the SAME id as the selected category
    const element = document.getElementById(category);
    element.classList.add("active");
  }

});
