'use strict';

// Scoping in Practice

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  //   console.log(firstName);
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating a NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    } else if (birthYear >= 1965 && birthYear <= 1980) {
      var millenial = false;
      const str = `Oh, and you're a Gen X, ${firstName}`;
      console.log(str);
    } else if (birthYear >= 1946 && birthYear <= 1964) {
      var millenial = false;
      // creating new variable with same name as outer scope's variable
      const firstName = 'Mike';
      const str = `Oh, and you're a Boomer, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
    }

    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Taher';
calcAge(1978);
