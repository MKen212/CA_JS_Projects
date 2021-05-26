"use strict";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get HTML Elements for giveaway text, deadline div and h4 elements within it
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const timers = document.querySelectorAll(".deadline-format h4");
// console.log(timings);

// Set Future Date = today + 10 days
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 22, 30, 0);

// HardCode Future Date
// const futureDate = new Date(2021, 4, 26, 20, 1, 0);
console.log(futureDate);

// Get elements of future date
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

// Update giveaway date text
giveaway.textContent = `Giveaway ends on ${day} ${date} ${month} ${year}, ${hours}:${mins} CET`;

// Get Future time in milliseconds
const futureTime = futureDate.getTime();

// Function to get remaining time between current and future
function getRemainingTime() {
  const today = new Date().getTime();
  const timeRem = futureTime - today;
  //console.log(timeRemaining); 

  // Values in ms: 1s = 1000ms / 1m = 60s / 1h = 60m / 1d = 24h
  const oneSec = 1000;
  const oneMin = 60 * oneSec;
  const oneHour = 60 * oneMin;
  const oneDay = 24 * oneHour;

  // Calculate remaining values
  let daysRem = Math.floor(timeRem / oneDay);
  let hoursRem = Math.floor((timeRem % oneDay) / oneHour);
  let minsRem = Math.floor((timeRem % oneHour) / oneMin);
  let secsRem = Math.floor((timeRem % oneMin) / oneSec);
  // console.log(daysRem, hoursRem, minsRem, secsRem);

  // Set Values Array
  const values = [daysRem, hoursRem, minsRem, secsRem];

  // Function to prefix a zero
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  // Update timer HTML elements
  timers.forEach((timer, index) => {
    timer.innerHTML = format(values[index]);
  });

  // Stop Timer once time has passed
  if (timeRem < 1000) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
}

// Setup countdown to repeat every second once started
let countdown = setInterval(getRemainingTime, 1000);

// Run Timer
getRemainingTime();
