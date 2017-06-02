var Calculator = function() {
  this.add = function(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      return null;
    }
  };
  this.subtract = function(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    } else {
      return null;
    }
  };
  this.multiply = function(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a * b;
    } else {
      return null;
    }
  };
  this.divide = function(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a / b;
    } else {
      return null;
    }
  };
};

var Calc = new Calculator();

// Calc.add(2, 2)     // returns 4
 
// Calc.subtract(10, 3) // returns 7
// Calc.subtract(10, -3) // returns 13
 
// Calc.multiply(2,10) // returns 20
 
// Calc.divide(20,10) // returns 2
// Calc.divide(0,10) // returns null