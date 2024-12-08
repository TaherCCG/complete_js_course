'use strict';

// Data
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// The filter Method

// Create a new array 'deposits' containing all positive movements (deposits)
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});

// Log the original movements array to the console
console.log(movements);

// Log the deposits array to the console
console.log(deposits);

// Create an empty array to store deposits using a for-of loop
const depositsFor = [];

// Loop through each movement in the movements array
// If the movement is positive, add it to the depositsFor array
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// Log the depositsFor array to the console
console.log(depositsFor);

// Create a new array 'withdrawals' containing all negative movements (withdrawals)
const withdrawals = movements.filter(mov => mov < 0);

// Log the withdrawals array to the console
console.log(withdrawals);
