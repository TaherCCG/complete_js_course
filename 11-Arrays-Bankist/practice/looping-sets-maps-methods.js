'use strict';

// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// Output:
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling
// Set(3) {"USD", "GBP", "EUR"}
// USD: USD
// GBP: GBP
// EUR: EUR

// The Map and Set forEach methods are very similar to the forEach method on arrays. The main difference is that the forEach method on maps and sets does not have access to the index. The forEach method on maps and sets has access to the value and the key. The forEach method on maps and sets also has access to the map or set itself. The forEach method on maps and sets is a great way to loop over the keys and values in a map or set.
