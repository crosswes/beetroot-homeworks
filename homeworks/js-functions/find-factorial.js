function findFactorial() {
  let userNumber = +prompt("Enter the number and i'll find the factorial");
  if (!userNumber || typeof userNumber !== 'number' || userNumber < 0) {
    throw new Error('Invalid');
  }
  let result = 1;

  for (let i = 1; i <= userNumber; i++) {
    result *= i;
  }
  console.log(`Factorial of number ${userNumber} is: ` + result);
}

export { findFactorial };
