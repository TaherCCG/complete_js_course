'use strict';
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// Function to calculate the average human age from an array of dog ages
const calcAverageHumanAge = function (ages) {
  // Convert dog ages to human ages:
  // - If the dog's age is 2 years or less, multiply it by 2.
  // - If the dog's age is more than 2 years, calculate as 16 + age * 4.
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  // Filter the array to include only adult dogs (18 years or older in human years)
  const adults = humanAges.filter(age => age >= 18);

  // Log the human ages and adult dogs arrays to the console for verification
  console.log(humanAges);
  console.log(adults);

  // Calculate the average age of adult dogs:
  // The commented-out line shows a more traditional average calculation.
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // This line calculates the average in a slightly different manner.
  // It sums up the ages of all adult dogs and divides by the total number of adults.
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // Explanation: (2 + 3) / 2 = 2.5 === 2/2 + 3/2 = 2.5
  // This explains the logic behind the alternative average calculation method.

  // Return the calculated average age
  return average;
};

// Test the function with two sets of data
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Log the results to the console
console.log(avg1, avg2);
