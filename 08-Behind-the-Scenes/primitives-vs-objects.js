'use strict';

// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

/*
Primitives (Primitive Types in JavaScript)
Primitives in JavaScript are simple data types. They include:

string

number

boolean

null

undefined

symbol

bigint

Primitives are immutable and are passed by value.

Example: String Primitive

*/
let str1 = 'Hello';
let str2 = str1; // str2 is a copy of str1

str1 = 'World';

console.log(str1); // "World"
console.log(str2); // "Hello"

/*
Objects (Reference Types)
Objects in JavaScript are more complex and include:

Objects ({})

Arrays ([])

Functions

Objects are mutable and are passed by reference.

Example: Object Reference
*/
let obj1 = { name: 'Alice' };
let obj2 = obj1; // obj2 is a reference to obj1

obj1.name = 'Bob';

console.log(obj1.name); // "Bob"
console.log(obj2.name); // "Bob"

/*
Primitive vs. Object Comparison
When comparing primitives and objects, their behaviors differ:

Comparing Primitives
*/
let a = 10;
let b = 10;

console.log(a === b); // true

// Comparing Objects
let objA = { value: 10 };
let objB = { value: 10 };

console.log(objA === objB); // false

// Copying Primitives vs. Objects
// Copying Primitives
let x = 5;
let y = x; // Copying the value of x

x = 10;

console.log(x); // 10
console.log(y); // 5

// Copying Objects
let objX = { value: 5 };
let objY = objX; // Copying the reference of objX

objX.value = 10;

console.log(objX.value); // 10
console.log(objY.value); // 10

// Copying Objects with Object.assign()
let objM = { value: 5 };
let objN = Object.assign({}, objM);

objM.value = 10;

console.log(objM.value); // 10
console.log(objN.value); // 5

/*
Converting Between Primitives and Objects
You can wrap primitives in their corresponding object types if needed, but it's not very common in modern JavaScript.
*/
let num = 123;
let numObj = new Number(num); // Creating a Number object

console.log(typeof num); // "number"
console.log(typeof numObj); // "object"

// Primitive types are stored in the stack, while reference types are stored in the heap.
// The stack is faster because it's a simple data structure, while the heap is slower due to its complexity.
// The stack has a limited size, but the heap can grow as needed.
// The stack is automatically managed by the computer's memory allocation system, whereas the heap requires manual memory management.
// The stack is used for static memory allocation, which includes local variables, function parameters, and return addresses.
// The heap is used for dynamic memory allocation, accommodating objects, arrays, and other complex data structures.
// The stack is thread-safe as each thread has its own stack.
// The heap is not thread-safe because multiple threads can access the same memory location.
