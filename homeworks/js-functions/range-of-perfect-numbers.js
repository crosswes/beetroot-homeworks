import { isPerfectNumber } from './is-perfect-number.js';

function rangeOfPerfectNumbers() {
  let min = +prompt('Enter start range');
  let max = +prompt('Enter max range');
  let number = 1;
  if (min !== min || max !== max || min < 0 || max < 0) {
    throw new Error('Invalid');
  }
  for (number = min; number <= max; number++) {
    console.log('number: ', number);
  }
  if (isPerfectNumber(number)) {
    console.log('Perfect!');
  }
}

export { rangeOfPerfectNumbers };
// что то пошло не так
