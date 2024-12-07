'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(
      `Order received! Pizza with ${mainIngredient} and ${otherIngredients.join(
        ','
      )} will be delivered in 45 minutes.`
    );
  },
};

// Which data structure to use?
// Use an array if you need an ordered list of values that might contain duplicates.
// Use a set if you need a collection of unique values.
// Use an object if you need a key-value pair.
// Use a map if you need a key-value pair and need keys that are not strings.

// examples of when to use each data structure
// Arrays
// When you need an ordered list of values that might contain duplicates.
// When you need to manipulate data.
// When you need to loop over data.
// When you need to perform operations on the data.

// Sets
// When you need to work with unique values.
// When you need to remove duplicates from an array.
// When you need to work with values that are not indexed.
// When you need to work with values that are not ordered.

// Objects
// When you need a structure that has key-value pairs.
// When you need to describe something with properties.
// When you need to work with dynamic data.
// When you need to add and remove properties.

// Maps
// When you need to map keys to values.
// When you need keys that are not strings.
// When you need to store data in a key-value pair.
// When you need to iterate over data.
