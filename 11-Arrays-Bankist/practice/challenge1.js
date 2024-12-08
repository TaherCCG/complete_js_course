'use strict';

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// Define the checkDogs function which takes two arrays as arguments: dogsJulia and dogsKate
const checkDogs = function (dogsJulia, dogsKate) {
  // Create a copy of the dogsJulia array
  const dogsJuliaCorrected = dogsJulia.slice();

  // Remove the first element from the copy of the dogsJulia array
  dogsJuliaCorrected.splice(0, 1);

  // Remove the last two elements from the copy of the dogsJulia array
  dogsJuliaCorrected.splice(-2);

  // Concatenate the corrected Julia's dogs array with Kate's dogs array to form a single array
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  // Log the combined dogs array to the console
  console.log(dogs);

  // Iterate over each dog in the combined dogs array
  dogs.forEach(function (dog, i) {
    // Check if the dog's age is 3 years or older
    if (dog >= 3) {
      // Log a message indicating that the dog is an adult and its age
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      // Log a message indicating that the dog is still a puppy
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

// Call the checkDogs function with two arrays of dog ages

// Test data 1
console.log('---- Test data 1 ----');
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Test data 2
console.log('---- Test data 2 ----');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
