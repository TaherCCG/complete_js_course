'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // Spread operator ... unpacks the array into individual elements
// const newArr = [1, 2, arr];  // This would have created a nested array with arr as the third element example: [1, 2, [7, 8, 9]]
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci'] Gnocci is added to the end of the array
// the above is creating a new array and not mutating the original array.

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]; // Copying the mainMenu array into a new array.

// Join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // joining the starterMenu and mainMenu arrays into one array.
console.log(menu);

// Iterables: arrays, strings, maps, sets. but NOT objects
const str = 'Taher';
const letters = [...str, ' ', 'M.'];
console.log(letters);
console.log(...str);
console.log('T', 'a', 'h', 'e', 'r');

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
// The above is creating a shallow copy of the object. If the object has nested objects, the nested objects will still be pointing to the same memory location. So, if we change the nested object in the copy, it will also change in the original object.
