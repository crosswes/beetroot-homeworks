// Ask user age
const userAge = prompt('How old are you?');
if (isNaN(userAge) || userAge < 0 || userAge > 120) {
  console.log('Incorrect age');
} else if (userAge <= 11) {
  console.log('You are a kid!');
} else if (userAge >= 12 && userAge <= 17) {
  console.log('You are a teenager!');
} else if (userAge >= 18 && userAge <= 60) {
  console.log('You are an adult!');
}

// Writes the number's symbol (1 = !, 2 = @,  3 = #)
const userNumber = prompt(
  "Write a number between 1-9 and i'll show you its symbol"
);
switch (userNumber) {
  case '1': {
    console.log('The symbol is "!"');
    break;
  }
  case '2': {
    console.log('The symbol is "@"');
    break;
  }
  case '3': {
    console.log('The symbol is "#"');
    break;
  }
  case '4': {
    console.log('The symbol is "$"');
    break;
  }
  case '5': {
    console.log('The symbol is "%"');
    break;
  }
  case '6': {
    console.log('The symbol is "ˆ"');
    break;
  }
  case '7': {
    console.log('The symbol is "&"');
    break;
  }
  case '8': {
    console.log('The symbol is "*"');
    break;
  }
  case '9': {
    console.log('The symbol is "("');
    break;
  }
  default: {
    throw new Error('Incorrect imput\nWrite a number between 1-9');
  }
}

// Calculate the sum of the entered numbers
let sum = 0;
while (true) {
  let value = +prompt('Enter the numbers and ill calculate it', '0');
  if (!value) break;
  sum += value;
}
alert(sum);

// Find Greatest Common Divisor
let firstNumber = +prompt('Enter first number');
let secondNumber = +prompt('Enter second number');
while (firstNumber !== 0 && secondNumber !== 0) {
  if (firstNumber > secondNumber) {
    firstNumber = firstNumber % secondNumber;
  } else if (firstNumber < secondNumber) {
    secondNumber = secondNumber % firstNumber;
  }
}
console.log(firstNumber + secondNumber);

// Ask sum and calculate the discount
const shoppingSum = prompt('Enter the sum');
if (shoppingSum < 200) {
  alert('You have no discount =(');
} else if (isNaN(shoppingSum) || shoppingSum < 0) {
  alert('Something wrong');
} else if (shoppingSum >= 200 && shoppingSum < 300) {
  alert(
    "You have a 3% discount! Here's the sum now: " +
      (shoppingSum - (shoppingSum / 100) * 3)
  );
} else if (shoppingSum >= 300 && shoppingSum < 500) {
  alert(
    "You have a 5% discount! Here's the sum now: " +
      (shoppingSum - (shoppingSum / 100) * 5)
  );
} else {
  alert(
    "You have a 7% discount! Here's the sum now: " +
      (shoppingSum - (shoppingSum / 100) * 7)
  );
}

// Ask what is the next day of a week as long as button OK is being pressed
const today = new Date();
// Get the day of the week (0-6, where 0 is Sunday, 1 is Monday, etc.)
const dayOfWeek = today.getDay();
switch (dayOfWeek) {
  case 0: {
    alert('Today is Sunday');
    break;
  }
  case 1: {
    alert('Today is Monday');
    break;
  }
  case 2: {
    alert('Today is Tuesday');
    break;
  }
  case 3: {
    alert('Today is Wednesday');
    break;
  }
  case 4: {
    alert('Today is Thursday');
    break;
  }
  case 5: {
    alert('Today is Friday!!!');
    break;
  }
  case 6: {
    alert('Today is Saturday');
    break;
  }
}
let daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

let dayIndex = daysOfWeek.length;
while (true) {
  const userResponse = confirm('Wanna see the next day?');
  if (!userResponse) {
    break;
  }
  dayIndex = (dayIndex + 1) % 7;
  alert('Next day is ' + daysOfWeek[dayIndex]);
}

// Guessing number game
function guessNumberGame() {
  let min = 1;
  let max = 100;
  let computerGuess = Number(Math.floor((min + max) / 2));
  let userInput = '';
  const isUserPlaying = confirm('Pick a number!');
  while (isUserPlaying) {
    userInput = prompt(
      `Is your number bigger, smaller or equals to ${computerGuess}?\n Write only +, - or =`
    );
    if (userInput === '-') {
      max = computerGuess - 1;
      computerGuess = Math.floor((min + max) / 2);
    } else if (userInput === '+') {
      min = computerGuess + 1;
      computerGuess = Math.floor((min + max) / 2);
    } else if (userInput === '=') {
      alert('Your number is ' + computerGuess);
      break;
    } else if (computerGuess + 1 === max) {
      computerGuess = max + 1;
      alert(`Your number is ${computerGuess}!`);
      break;
    } else if (computerGuess - 1 === min) {
      computerGuess = min - 1;
      alert(`Your number is ${computerGuess}!`);
      break;
    } else {
      break;
    }
    if (min === max) {
      computerGuess = min;
      alert(`Your number is ${computerGuess}!`);
      break;
    }
  }
}
guessNumberGame();
