"use strict";

/*
// traversing the dom
// Get all the buttons
const questionBtns = document.querySelectorAll(".question-btn");

// Add an event listener to each
questionBtns.forEach((questionBtn) => {
  questionBtn.addEventListener("click", (e) => {
    console.log(e.currentTarget.parentElement.parentElement);
    // If clicked, get the parents parent element
    const question = e.currentTarget.parentElement.parentElement;
    // Toggle the show-text class on that element
    question.classList.toggle("show-text");
  });
});
*/


// using selectors inside the element
// Get all the questions
const questions = document.querySelectorAll(".question");

// Loop through each question
questions.forEach((question) => {
  // console.log(question);
  // Find the question-btn for the specific question
  const btn = question.querySelector(".question-btn");
  // console.log(btn);
  // If clicked
  btn.addEventListener("click", () => {
    // Remove the show-text class from all other questions
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    // Toggle the show-text class for the relevant question
    question.classList.toggle("show-text");
  });
});
