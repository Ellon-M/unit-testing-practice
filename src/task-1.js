// task - 1
// string length

const stringLength = (s) => {
  if (s.length > 0 && s.length <= 10) {
    return s.length;
  }
  else {
    throw 'Out of bounds';
  }
}

module.exports = stringLength;