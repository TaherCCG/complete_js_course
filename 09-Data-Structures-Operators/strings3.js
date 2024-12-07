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

// Working with strings - Part 3

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Taher Mahmood'.split(' '));

const [firstName, lastName] = 'Taher Mahmood'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizedName('taher mahmood');
capitalizedName('jessica ann smith davis');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Taher'.padStart(25, '+').padEnd(35, '+'));
console.log('Taher'.padStart(25, '+').padEnd(35, '+').length);

// Padding example
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(433787654345));
console.log(maskCreditCard('433787654345'));
console.log(maskCreditCard(433787654345));
console.log(maskCreditCard('433787654345'));

const maskPassword = function (password) {
  return '*'.repeat(password.length);
};

console.log(maskPassword('password'));
console.log(maskPassword('thisisaverylongpassword'));
console.log(maskPassword('th15.is@4.very.5tr0ng.p4ssw0rd'));

const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planes = function (n) {
  console.log(`There are ${n} planes in the air.`);
};

planes(5);
planes(3);
planes(1);
planes(0);
