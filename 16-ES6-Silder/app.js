"use strict";

// Import the data from data.js
import people from "./data.js";
// console.log(people);

// Get the Slide Container and Next/Prev Buttons
const container = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Create HTML from slide container from people data
container.innerHTML = people.map((person, slideIndex) => {
  // console.table(person);
  // console.log(slideIndex);
  const {img, name, job, text} = person;
  
  // Setup Position Class
  let position = "next";  // default
  if (slideIndex === 0) {
    position = "active";
  } else if (slideIndex === people.length - 1) {
    position = "prev";
  }

  // Update the HTML with the specific data
  return `<article class="slide ${position}">
      <img src="${img}" alt="${name}" class="img" />
      <h4 class="name">${name}</h4>
      <p class="title">${job}</p>
      <p class="text">${text}</p>
      <div class="quote-icon">
        <i class="fas fa-quote-right"></i>
      </div>
    </article>`;
}).join("");

// Add Event Listeners to the Buttons
prevBtn.addEventListener("click", () => {
  moveSlider("prev");
});
nextBtn.addEventListener("click", () => {
  moveSlider("next");
});

// Function to move slider
function moveSlider (type) {
  // console.log("Hello World", type);
  // Get the current active/prev/next elements
  const active = document.querySelector(".active");
  const prev = document.querySelector(".prev");
  let next = active.nextElementSibling;
  // console.log(active, next);

  // Reset next to beginning if next does not exist
  if (!next) {
    next = container.firstElementChild;
  }

  // Remove existing sub-class assignments from existing elements
  active.classList.remove("active");
  prev.classList.remove("prev");
  next.classList.remove("next");

  if (type ==="next") {
    // Assign new sub-class assignments to NEXT elements
    active.classList.add("prev");
    prev.classList.add("next");
    next.classList.add("active");    
  } else if (type === "prev") {
    // Assign new sub-class assignments to PREVIOUS elements
    active.classList.add("next");
    prev.classList.add("active");
    next = prev.previousElementSibling;

    // TO HERE


    next.classList.add("prev");
  }
}
