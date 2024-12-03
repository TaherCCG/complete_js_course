
/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �
*/

console.log('-- Coding Challenge #1 --');

console.log('Data 1:');
console.log('Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.');
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
console.log(`Mark's BMI: ${markBMI}`);
console.log(`John's BMI: ${johnBMI}`);
console.log(`Mark has a higher BMI than John: ${markHigherBMI}`);

console.log('Data 2:');
console.log('Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.');
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
console.log(`Mark's BMI: ${markBMI}`);
console.log(`John's BMI: ${johnBMI}`);
console.log(`Mark has a higher BMI than John: ${markHigherBMI}`);

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's

BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/

console.log('-- Coding Challenge #2 --');

console.log('Data 1:');
console.log('Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.');

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

console.log('Data 2:');
console.log('Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.');

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}


/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (the average scores must be the same).
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy.

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data 3: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

console.log('-- Coding Challenge #3 --');

console.log('Data 1:');
console.log('Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110');

let dolphinsScore = (96 + 108 + 89) / 3;
let koalasScore = (88 + 91 + 110) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsScore}`);
}

else if (koalasScore > dolphinsScore && koalasScore >= 100) {
    console.log(`Koalas win with an average score of ${koalasScore}`);
}

else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
    console.log(`It's a draw with an average score of ${dolphinsScore}`);
}

else {
    console.log('No team wins the trophy');
}

console.log('Data 2:');
console.log('Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123');

dolphinsScore = (97 + 112 + 101) / 3;
koalasScore = (109 + 95 + 123) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsScore}`);
}

else if (koalasScore > dolphinsScore && koalasScore >= 100) {
    console.log(`Koalas win with an average score of ${koalasScore}`);
}

else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
    console.log(`It's a draw with an average score of ${dolphinsScore}`);
}

else {
    console.log('No team wins the trophy');
}

console.log('Data 3:');
console.log('Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106');

dolphinsScore = (97 + 112 + 101) / 3;
koalasScore = (109 + 95 + 106) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsScore}`);
}

else if (koalasScore > dolphinsScore && koalasScore >= 100) {
    console.log(`Koalas win with an average score of ${koalasScore}`);
}

else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
    console.log(`It's a draw with an average score of ${dolphinsScore}`);
}

else {
    console.log('No team wins the trophy');
}


/*
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

console.log('-- Coding Challenge #4 --');

let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);


bill = 40;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);

bill = 1000;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);

