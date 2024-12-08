'use strict';

// Data
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// The map Method
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// Convert movements from euros to USD using the map method
const movementsUSD = movements.map(mov => mov * eurToUsd);

// Log the original movements array to the console
console.log(movements);

// Log the converted movements array to the console
console.log(movementsUSD);

// Create an empty array to store movements in USD using a for-of loop
const movementsUSDfor = [];

// Loop through each movement in the movements array and convert to USD
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// Log the converted movements array created by the for-of loop to the console
console.log(movementsUSDfor);

// Create an array of descriptions for each movement
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

// Log the array of movement descriptions to the console
console.log(movementsDescriptions);
