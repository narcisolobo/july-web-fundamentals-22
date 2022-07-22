/* 
Arrays - what are they even?
Arrays are our first datatype that can hold a collection of values.

Reference Datatypes - Pointers to a location in memory.
*/

var colors = ['red', 'blue', 'green', 'yellow'];

// Get and Set values using bracket notation

// Getting values using bracket notation
console.log(colors[1]);
var color = colors[1];

// Setting values using bracket notation
colors[2] = 'purple';
console.log(colors);

colors[0] = color;
console.log(colors);

// When setting values, you can skip indexes.
colors[6] = 'mauve';
console.log(colors);
console.log(colors[5]); // --> undefined

colors[5] = 25;
console.log(colors);

// You can mix and match datatypes in arrays.

// Popular methods that all arrays have.
// Push = add an element at the end of the array.
var length = colors.push('black');
console.log(length);
console.log('before pop: ', colors);

// Pop = removes and returns the last item in an array
colors.pop();
console.log('after pop: ', colors);
var color2 = colors.pop();
console.log(color2);

// Reverse an array in place
['a', 'b', 'c', 'd', 'e']
['e', 'd', 'c', 'b', 'a']

// In place - do not create a new array! You must mutate the original array.

// Solution:
function reverseArr(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
    console.log(`i: ${i}, arr: ${arr}`)
  }
  return arr;
}

console.log(reverseArr([1, 2, 3, 4, 5]));