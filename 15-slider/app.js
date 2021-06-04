"use strict";

// Get Slide and Button Elements
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");


// Set-up the left position of each slide in multiples of 100%
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// Start Counter
let counter = 0;

// Additional Functionality to have fixed start/end
prevBtn.style.display = "none";

// Add Click Event to Next Button
nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

// Add Click Event to Prev Button
prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});


// Function to add translateX to slides based on counter
function carousel() {
  // Additional Functionality to loop
  // if (counter === slides.length) {
  //   counter = 0;
  // } else if (counter < 0) {
  //   counter = slides.length - 1;
  // }

  // Additional Functionality to have fixed start/end
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

