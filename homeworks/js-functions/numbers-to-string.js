function numbersToString() {
  let userNumbers = [];
  userNumbers[0] = +prompt('Enter first number');
  userNumbers[1] = +prompt('Enter second number');
  userNumbers[2] = +prompt('Enter third number');
  if (userNumbers !== userNumbers || isNaN(userNumbers)) {
    throw new Error('Invalid');
  }
  console.log(
    'Your number is: ' + userNumbers[0] + userNumbers[1] + userNumbers[2]
  );
}

export { numbersToString };
