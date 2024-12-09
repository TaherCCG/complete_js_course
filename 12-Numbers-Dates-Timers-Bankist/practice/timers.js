"use strict";

///////////////////////////////////////
// Timers

// Define an array of ingredients
const ingredients = ["olives", "spinach"];

// Set a timer to log a message after 3 seconds
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);

// Log a waiting message to the console immediately
console.log("Waiting...");

// If the ingredients array includes "spinach", clear the timer
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// Set an interval to log the current date and time every second
const intervalID = setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

// Set a timer to clear the interval after 10 seconds
setTimeout(function () {
  clearInterval(intervalID);
  console.log("Interval stopped after 10 seconds.");
}, 10000);
