'use strict';

// These are the same as the previous file but are new methods
// that are available in ES2021.

// The new at Method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('taher'.at(0));
console.log('taher'.at(-1));
console.log('taher'.at(2));
console.log('taher'.at(3));
console.log('taher'.at(4));
console.log('taher'.at(-2));
console.log('taher'.at(-3));
