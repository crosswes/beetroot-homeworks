function calculator() {
  let a = +prompt('Enter first number');
  let b = +prompt('Enter second number');
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    throw new Error('Invalid');
  }
  if (a < b) {
    console.log('-1');
  } else if (a > b) {
    console.log('1');
  } else if (a === b) {
    console.log('=');
  }
}

export { calculator };
