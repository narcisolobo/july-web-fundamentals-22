/* 
Functions - what are they even?
Functions are simply a series of steps that accomplish a task.
*/

// Function Declaration
function greet() {
  console.log("Hello, buddy!");
}

// Function Invocation
// greet();

// Parameters
function greetWithName(nameInput) {
  console.log("Hello, " + nameInput + "!");
}

// Function Invocation with Argument(s)
// greetWithName("Omar");

// Multiple Parameters
function greetWithName(timeOfDay, nameInput) {
  // template literal notation
  console.log(`Good ${timeOfDay}, ${nameInput}!`);
  console.log("Good " + timeOfDay + ", " + nameInput + "!");
}

// Function Invocation with Argument(s)
// greetWithName("morning", "Omar");

function add(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

var result = add(2, 2);
// console.log(result);

// Week 1 Day 4 - Go With the Code Flow
/* 
Today we're going to get deeper down in thinking about code and working out what order the computer sees it in.
*/

// Code Flow - Functions
// Global scope vs function scope
var x = 5;

function setX(newValue) {
  x = newValue;
}

/* console.log(x); // --> 5
setX(15);
console.log(x); // --> 15 */

// The Return of return
var x = 5;

function addToX(amount) {
  return x + amount;
  console.log("hello there");
}

console.log(x); // --> 5
var result = addToX(-10);
console.log(result); // --> -5
console.log(x); // --> 5

/* 
Code Flow - Is the Array a Palindrome
A palindrome is a word that is spelled the same if read forwards or backwards. Some excellent palindrome examples are:

racecar
tacocat
But in our case we'll be looking at some arrays, can the values in the array be read the same forwards as backwards?
*/

function isPal(arr) {
  for (var left = 0; left < Math.floor(arr.length / 2); left++) {
    var right = arr.length - 1 - left;
    if (arr[left] != arr[right]) {
      return "Not a pal-indrome!";
    }
  }
  return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
