// Object Literal Notation to create an object in JS

var myCar = {
  make: 'Hyundai',
  model: 'Kona',
  color: 'Lime Twist',
  numWheels: 4,
  drive: function () {
    console.log('Vrooom....');
  },
  showStats: function () {
    console.log(this.make, this.model, this.color, this.numWheels);
  }
}

// Get and set values in an object

// Get values using bracket notation
console.log(myCar['color']);

// Set values using bracket notation
myCar['color'] = 'Purple';
console.log(myCar);

// Get values using dot notation
console.log(myCar.color);

// Set values using dot notation
myCar.color = 'Lime Twist';
console.log(myCar);

myCar.drive();

myCar.showStats();