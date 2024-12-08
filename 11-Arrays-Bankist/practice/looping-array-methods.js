'use strict';

// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// Loop through each movement using a for-of loop with entries
for (const [i, movement] of movements.entries()) {
  // Check if the movement is positive (deposit)
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    // If the movement is negative (withdrawal)
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');

// Loop through each movement using the forEach method
movements.forEach(function (mov, i, arr) {
  // Check if the movement is positive (deposit)
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    // If the movement is negative (withdrawal)
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// anonymous function that logs the current movement to the console
// 0: function(200)
// 1: function(450)
// 2: function(400)
