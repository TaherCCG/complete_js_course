'use strict';

// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// more examples

console.log(a); // undefined
var a = 5;
console.log(a); // 5

hoistedFunction(); // "This function has been hoisted."

function hoistedFunction() {
  console.log('This function has been hoisted.');
}

// Let and Const Hoisting

// console.log(b); // ReferenceError: Cannot access 'b' before initialisation
// let b = 10;

// console.log(c); // ReferenceError: Cannot access 'c' before initialisation
// const c = 10;

// Function Expressions

// notHoistedFunction(); // TypeError: notHoistedFunction is not a function

// var notHoistedFunction = function () {
//   console.log('This function is not hoisted.');
// };
