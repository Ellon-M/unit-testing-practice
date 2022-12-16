class Calculator {
  constructor() {

  }

  add(first, second) {
    if (typeof(first) === 'number' && typeof(second) === 'number') {
      return first + second;
    }
    else {
      throw 'invalid input';
    }
  }

  subtract(first, second) {
    if (typeof(first) === 'number' && typeof(second) === 'number') {
        return first - second;
      }
      else {
        throw 'invalid input';
      }
  }

  divide(first, second) {
    if (typeof(first) === 'number' && typeof(second) === 'number' && second !== 0) {
        return first / second;
      }
      else {
        throw 'invalid input';
      }
  }

  multiply(first, second) {
    if (typeof(first) === 'number' && typeof(second) === 'number') {
        return first * second;
      }
      else {
        throw 'invalid input';
      }
  }
}

module.exports = Calculator;