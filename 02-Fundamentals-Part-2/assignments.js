
// Assignment 1
console.log('-- Assignment 1 - Functions --');

const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry('England', 68, 'London');
const country2 = describeCountry('Germany', 84, 'Berlin');
const country3 = describeCountry('Turkey', 85, 'Ankara');

console.log(country1);
console.log(country2);
console.log(country3);

// Assignment 2
console.log('-- Assignment 2 - Function Declarations vs Expressions --');

// Function Declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentage1 = percentageOfWorld1(68);
console.log(percentage1);

// Function Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}

const percentage2 = percentageOfWorld2(84);
console.log(percentage2);

const perEngland = percentageOfWorld1(68);
const perGermany = percentageOfWorld2(84);
const perTurkey = percentageOfWorld1(85);

console.log(perEngland, perGermany, perTurkey);


// Assignment 3
console.log('-- Assignment 3 - Arrow Functions --');

const percentageOfWorld3 = population => (population / 7900) * 100;

const perEngland3 = percentageOfWorld3(68);
const perGermany3 = percentageOfWorld3(84);
const perTurkey3 = percentageOfWorld3(85);

console.log(perEngland3, perGermany3, perTurkey3);


// Assignment 4
console.log('-- Assignment 4 - Functions Calling Other Functions --');

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world`;
    }

const descEngland = describePopulation('England', 68);
const descGermany = describePopulation('Germany', 84);
const descTurkey = describePopulation('Turkey', 85);

console.log(descEngland);
console.log(descGermany);
console.log(descTurkey);


// Assignment 5
console.log('-- Assignment 5 - Introduction to Arrays --');

const populations = [68, 84, 85, 200];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
    ];
console.log(percentages);


// Assignment 6
console.log('-- Assignment 6 - Basic Array Operations (Methods) --');

const neighbours = ['Greece', 'Bulgaria', 'Georgia', 'Armenia', 'Azerbaijan', 'Iran', 'Iraq', 'Syria'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country');
}

neighbours[neighbours.indexOf('Georgia')] = 'Republic of Georgia';
console.log(neighbours);


// Assignment 7
console.log('-- Assignment 7 - Introduction to Objects --');

const myCountry = {
    country: 'ENgland',
    capital: 'London',
    language: 'English',
    population: 68,
    neighbours: ['Scotland', 'Wales']
};

console.log(myCountry);


// Assignment 8
console.log('-- Assignment 8 - Dot vs Bracket Notation --');

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);


// Assignment 9

console.log('-- Assignment 9 - Object Methods --');

myCountry.describe = function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital
    }`;
}

console.log(myCountry.describe());

myCountry.checkIsland = function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
}

console.log(myCountry.checkIsland());
console.log(myCountry);


// Assignment 10
console.log('-- Assignment 10 - Iteration: The for Loop --');

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}


// Assignment 11
console.log('-- Assignment 11 - Looping Arrays, Breaking and Continuing --');

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}

console.log(percentages2);


// Assignment 12
console.log('-- Assignment 12 - Looping Backwards and Loops in Loops --');

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}


// Assignment 13
console.log('-- Assignment 13 - The while Loop --');

let voter = 1;
while (voter <= 50) {
    console.log(`Voter number ${voter} is currently voting`);
    voter++;
}

