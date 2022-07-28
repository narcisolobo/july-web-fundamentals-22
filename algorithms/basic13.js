/*
1. Print 1-255
print1To255()
Print all the integers from 1 to 255.
*/
console.log('\nPrint all the integers from 1 to 255.');

function print1To255() {
  for (let i = 1; i <= 255; i++){
    console.log(i);
  }
}

print1To255();

/*
2. Print Odds 1-255
printOdds1To255()
Print all odd integers from 1 to 255.
*/
console.log('\nPrint all odd integers from 1 to 255.');

function printOdds1To255() {
  for (let i = 1; i <= 255; i+=2) {
    console.log(i);
  }
}

printOdds1To255();

/*
3. Print Ints and Sum 0-255
printIntsAndSum0To255()
Print integers from 0 to 255, and with each integer print the sum so far.
*/
console.log('\nPrint integers from 0 to 255, and with each integer print the sum so far.');

function printIntsAndSum0To255() {
  let sum = 0;
  for (let i = 0; i <= 255; i++) {
    sum += i;
    console.log(i, sum);
  }
}

printIntsAndSum0To255();

/*
4. Iterate and Print Array
printArrayVals(arr)
Iterate through a given array, printing each value.
*/
console.log('\nIterate through a given array, printing each value.');

function printArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArrayVals([5, 2, 9, 3, 7]);

/*
5. Find and Print Max
printMaxOfArray(arr)
Given an array, find and print its largest element.
*/
console.log('\nGiven an array, find and print its largest element.');

function printMaxOfArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

printMaxOfArray([2, 6, 1, 8, 3]);

/*
6. Get and Print Average
printAverageOfArray(arr)
Analyze an array’s values and print the average.
*/
console.log('\nAnalyze an array\'s values and print the average.');

function printAverageOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
}

printAverageOfArray([1, 2, 3, 4]);

/*
7. Array with Odds
returnOddsArray1To255()
Create an array with all the odd integers between 1 and 255 (inclusive).
*/
console.log('\nCreate an array with all the odd integers between 1 and 255 (inclusive).');

function returnOddsArray1To255() {
  const oddsArr = [];
  for (let i = 0; i <= 255; i++) {
    if (i % 2 != 0) {
      oddsArr.push(i);
    }
  }
  return oddsArr;
}

console.log(returnOddsArray1To255());

/*
9. Greater than Y
printArrayCountGreaterThanY(arr, y)
Given an array and a value Y, count and print the number of array values greater than Y.
*/
console.log('\nGiven an array and a value Y, count and print the number of array values greater than Y.');

function printArrayCountGreaterThanY(arr, y) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count++;
    }
  }
  console.log(count);
}

printArrayCountGreaterThanY([1, 2, 3, 4, 5], 3);

/*
11. Max, Min, Average
printMaxMinAverageArrayVals(arr)
Given an array, print the max, min and average values for that array.
*/
console.log('\nGiven an array, print the max, min and average values for that array.');

function printMaxMinAverageArrayVals(arr) {
  let sum = arr[0];
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  console.log(`Min: ${min}, Max: ${max}, Average: ${sum / arr.length}`);
}

printMaxMinAverageArrayVals([3, 4, 1, 5, 2]);

/*
13. Swap String For Array Negative Values
swapStringForArrayNegativeVals(arr)
Given an array of numbers, replace any negative values with the string 'Dojo'.
*/
console.log('\nGiven an array of numbers, replace any negative values with the string \'Dojo\'.');

function swapStringForArrayNegativeVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  return arr;
}

console.log(swapStringForArrayNegativeVals([1, -2, 3, -4, 5]));

/*
8. Square the Values
squareArrayVals(arr)
Square each value in a given array, returning that same array with changed values.
*/
console.log('\nSquare each value in a given array, returning that same array with changed values.');

function squareArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}

console.log(squareArrayVals([1, 2, 3, 4]))

/*
10. Zero Out Negative Numbers
zeroOutArrayNegativeVals(arr)
Return the given array, after setting any negative values to zero.
*/
console.log('\nReturn the given array, after setting any negative values to zero.');

function zeroOutArrayNegativeVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

console.log(zeroOutArrayNegativeVals([1, -2, 3, -4, 5]));

/*
12. Shift Array Values
shiftArrayValsLeft(arr)
Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
*/
console.log('\nGiven an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.');

function shiftArrayValsLeft(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length-1] = 0;
  return arr;
}

console.log(shiftArrayValsLeft([1, 2, 3, 4, 5]));