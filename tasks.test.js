const stringLength = require('./src/task-1.js');
const reverseString = require('./src/task-2');
const Calculator = require("./src/task-3");

const calc = new Calculator();

// task 1
test('counts string characters', () => {
  expect(stringLength('string')).toBe(6);
})

// task 2
test('reverse characters in a string', () => {
  expect(reverseString('string')).toBe('gnirts');
  expect(() => {reverseString('stringstring')}).toThrow(/^string length out of bounds$/);
})

// task 3
describe('calculator operations', () => {
  test('adding numbers', () => {
    expect(calc.add(2, 2)).toBe(4);
    expect(calc.add(0.1, 0.3)).toBeCloseTo(0.4);
    expect(calc.add(2, 10)).toBeGreaterThan(11); 
  })
  test('subtracting numbers', () => {
    expect(calc.subtract(2, 2)).toBe(0);
    expect(calc.subtract(0.1, 0.3)).toBeCloseTo(-0.2);
    expect(calc.subtract(10, 2)).toBeLessThan(9); 
  })
  test('dividng numbers', () => {
    expect(calc.divide(2, 2)).toBe(1);
    expect(() => {calc.divide(0.1, 0)}).toThrow('invalid input');
    expect(calc.divide(10, 2)).toBeLessThan(8); 
  })
  test('multiplying numbers', () => {
    expect(calc.multiply(2, 2)).toBe(4);
    expect(calc.multiply(0.1, 0.3)).toBeCloseTo(0.03);
    expect(calc.multiply(10, 2)).toBeLessThan(22); 
  })
})



