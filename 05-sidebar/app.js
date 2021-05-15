"use strict";

// Get button and sidebar elements
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  // console.log(sidebar.classList);  // Display current list of all classes

  // Check if show-sidebar already in class list & update
  /*
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");  // Remove class
  } else {
    sidebar.classList.add("show-sidebar");  // Add class
  }
  */

  // Quicker method using .toggle method
  sidebar.classList.toggle("show-sidebar");
});

// Add remove event if close button clicked
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
