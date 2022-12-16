// task 2
// reverse string

const reverseString = (s) => {
  if (s.length > 0 && s.length <= 10) { 
    return s.split('').reverse().join('');
  }
  else {
    throw new Error('string length out of bounds');
  }
}

module.exports = reverseString;