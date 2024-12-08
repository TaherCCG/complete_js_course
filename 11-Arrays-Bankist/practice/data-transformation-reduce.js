'use strict';

// Data
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// The reduce Method
console.log(movements);

// Calculate the balance using the reduce method
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// Log the calculated balance to the console
console.log(balance);

// Calculate the balance using a for-of loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
// Log the calculated balance to the console
console.log(balance2);

// Calculate the maximum value in the movements array using the reduce method
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// Log the maximum value to the console
console.log(max);
