// Assignment 1
console.log('-- Assignment 1 - Values and Variables --');

let country = 'United Kingdom';
let continent = 'Europe';
let population = 68;

console.log(country);
console.log(continent);
console.log(population);

// Assignment 2
console.log('-- Assignment 2 - Data Types --');

let isIsland = true;
let language = 'English';

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// Assignment 3

console.log('-- Assignment 3 - let, const and var --');

language = 'British English';
// const country = 'Great Britain'; // SyntaxError: Identifier 'country' has already been declared
// const continent = 'Europe';     // SyntaxError: Identifier 'continent' has already been declared
// const isIsland = false;         // SyntaxError: Identifier 'isIsland' has already been declared
isIsland = true;

console.log(language);
console.log(population);
console.log(country);
console.log(isIsland);

// Assignment 4
console.log('-- Assignment 4 - Basic Operators --');

let halfPopulation = population / 2;
population++;
console.log(halfPopulation);
console.log(population);

let finlandPopulation = 6;
console.log(population > finlandPopulation);

let averagePopulation = 33;
console.log(population < averagePopulation);

let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);

// Assignment 5
console.log('-- Assignment 5 - Strings and Template Literals --');

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

// Assignment 6
console.log('-- Assignment 6 - Taking Decisions: if / else Statements --');

if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
}
else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`);
}


// Assignment 7
console.log('-- Assignment 7 - Type Conversion and Coercion --');

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143


// Assignment 8
console.log('-- Assignment 8 - Equality Operators: == vs. === --');

let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
}
else if (numNeighbours > 1) {
    console.log('More than 1 border');
}
else {
    console.log('No borders');
}

// Assignment 9
console.log('-- Assignment 9 - Logical Operators --');

if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
}
else {
    console.log(`${country} does not meet your criteria`);
}

// Assignment 10
console.log('-- Assignment 10 - The switch Statement --');

switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'Hindi':
        console.log('Number 4');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// Assignment 11
console.log('-- Assignment 11 - The Conditional (Ternary) Operator --');

console.log(`${country}'s population is ${population > averagePopulation ? 'above' : 'below'} average`);

console.log(''); // New line
console.log(''); // New line
console.log(''); // New line

