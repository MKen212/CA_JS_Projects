"use strict";

// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// Get pre-loader element
const preloader = document.querySelector(".preloader");

// Add Windows load event to hide preloader once page is FULLY loaded
window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});


// Get the button and video container elements
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");


// Add button functionality
btn.addEventListener("click", () => {
  if(!btn.classList.contains("slide")) {
    // Pause Video
    btn.classList.add("slide");
    video.pause();
  } else {
    // Play Video
    btn.classList.remove("slide");
    video.play();
  }
});
