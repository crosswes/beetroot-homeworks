function isPerfectNumber(number) {
  const userNumber = +prompt('Enter your number');
  let sum = 0;
  let i = 0;
  if (!userNumber || typeof userNumber !== 'number' || userNumber < 0) {
    throw new Error('Invalid');
  }
  for (i = 1; i < userNumber; i++) {
    if (userNumber % i === 0) {
      sum += i;
    }
  }
  if (sum === userNumber) {
    console.log('Your number is perfect!');
  } else if (sum !== userNumber) {
    console.log('Your number is not perfect');
  }
}

export { isPerfectNumber };
