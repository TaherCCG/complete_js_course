// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow(2, 5, 8);

// Arrow functions do not get their own 'arguments' keyword
// Regular Function with arguments
function regularFunction() {
  console.log(arguments); // Logs the arguments object
}

regularFunction(1, 2, 3); // [1, 2, 3]

// Arrow Function without arguments

// const arrowFunction = () => {
//   console.log(arguments); // ReferenceError: arguments is not defined
// };

// arrowFunction(1, 2, 3);

// Arrow Function Inside Regular Function
function enclosingFunction() {
  const arrowFunction = () => {
    console.log(arguments); // Inherits arguments from enclosingFunction
  };

  arrowFunction(1, 2, 3); // Logs [1, 2, 3]
}

enclosingFunction(1, 2, 3);

// Arrow functions do not get their own 'this' keyword
// Arrow Functions and this

const person = {
  name: 'Sarah',
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`); // Sarah
    }, 1000);
  },
};

person.greet();

/*
In this example, the arrow function inside setTimeout retains the this value from the greet method, which refers to the person object. This makes arrow functions very handy for avoiding issues with this in nested functions.

On the other hand, if we used a regular function inside setTimeout, we would need to manually bind the correct this value:
*/
const person2 = {
  name: 'Sarah',
  greet: function () {
    setTimeout(
      function () {
        console.log(`Hello, my name is ${this.name}`); // undefined
      }.bind(this),
      1000
    );
  },
};

person2.greet();
