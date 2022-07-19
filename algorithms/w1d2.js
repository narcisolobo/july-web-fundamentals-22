// Variables and Datatypes

// Creating a variable
var myName = 'Narciso Lobo';

// Rules when naming a variable:
// You cannot start with a number.
// You cannot have a hyphen or a dash.
// You cannot have any whitespace.
// You cannot use reserved keywords.

// Strings
// Strings of characters
var num = '1'; // -> this is a string not a number
var space = ' ';
var firstName = 'Narciso';
var lastName = 'Lobo';
console.log(firstName, lastName);

// Concatenation of two strings
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// Numbers
// Floating points (decimals) and integers are both considered numbers in JS.

var num1 = 35.1;
var num2 = 76;

console.log('num1: ', typeof num1);
console.log('num2: ', typeof num2);

// Operators:
// + - / *

// Booleans
// Can only be true or false.

var isRainingToday = false;

// Camel Case - first word is lowercase, every word following is uppercase.

// Boolean expressions
// A boolean expression will evaluate to true or false.

console.log(3 > 2);

console.log(1);
console.log(2);
console.log(3);

// DRY
// Don't Repeat Yourself!

// For loop:
// 1. Named sentry
// 2. Where it starts
// 3. Where it ends
// 4. How it changes

// 'as long as'
for (var i = 1; i <= 1000; i++){
  console.log(i);
}

// Basic 13 #1:
// Create a for loop that prints every integer from 1 to 255.

for (var i = 1; i < 256; i++){
  console.log(i)
}