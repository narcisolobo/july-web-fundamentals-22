// Week 2 Day 1 - Support your local standard library
// The Math Library
// Predict what each of the following will return. Can we predict the variable random?

var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();

console.log(floor); // --> 1
console.log(ceiling); // --> 4
console.log(random); // --> 0 (inclusive) and 1 (exclusive)

/* 
Dice Roller
Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.
*/

function dice(numSides) {
  var roll = Math.floor(Math.random() * numSides) + 1;
  // var rollTimes6 = roll * 6;
  // var rollFloored = Math.floor(rollTimes6);
  // var rollPlusOne = rollFloored + 1
  return roll;
}

for (let i = 0; i < 100; i++) {
  var playerRoll = dice(20);
  console.log("Player rolled: " + playerRoll);
}

/* 
Consult the Oracle
Using the following array, write a function that will answer all of our questions by randomly choosing a response
*/

var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

function magic8Ball(question) {
  var randIdx = Math.floor(Math.random() * lifesAnswers.length);
  var answer = lifesAnswers[randIdx];
  console.log('You asked: ' + question)
  return answer;
}

console.log(magic8Ball('Should I kiss on the second date?'));

/* 
Modulo or Modulus Operator
The % operator returns the remainder of division.

15 % 3 = 0

7. Array with Odds
returnOddsArray1To255()
Create an array with all the odd integers between 1 and 255 (inclusive).  
*/

function returnOddsArray1To255() {
  var oddsArr = [];
  for (let i = 0; i <= 255; i++) {
    if (i % 2 == 1) {
      oddsArr.push(i);
    }
  }
  return oddsArr;
}

console.log(returnOddsArray1To255());

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log(i + ' is a multiple of three.')
  }
}

// FizzBuzz Algorithm
// Print out the numbers 1 to 100. If the number is a multiple of three, print "Fizz" instead of the number. If the number is a multiple of five, print "Buzz" instead of the number. If the number is a multiple of both three and five, print "FizzBuzz" instead of the number.