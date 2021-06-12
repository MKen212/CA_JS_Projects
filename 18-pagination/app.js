"use strict";

import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from  "./displayButtons.js";

// Get Title and Btb-Container elements
const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

// Setup Defaults
let index = 0;
let pages = [];

// Function to display data & page buttons
const displayPage = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

// Function tp Initialise data from GitHub and Paginate
const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = "Pagination";
  pages = paginate(followers);
  // console.log(pages);
  displayPage();
};

// Add Event Listener to btn-container containing all buttons
btnContainer.addEventListener("click", (event) => {
  // If click is on container and not buttons just return
  if (event.target.classList.contains("btn-container")) return;
  // If click is on a button then get the index of that button
  if (event.target.classList.contains("page-btn")) {
    index = parseInt(event.target.dataset.index);
  }
  // If next button clicked cycle forward index, or back to start
  if (event.target.classList.contains("next-btn")) {
    index === pages.length - 1 ? index = 0 : index++;
  }
  // If prev button clicked cycle backward index, or go to end
  if (event.target.classList.contains("prev-btn")) {
    index === 0 ? index = pages.length - 1 : index--;
  }
  // Update Page
  displayPage();
});

// Add Event Listener to Window Load to initialise
window.addEventListener("load", init);