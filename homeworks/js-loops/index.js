// // Ask user age
// const userAge = prompt('How old are you?');
// if (isN"a"N(userAge) || userAge < 0 || userAge > 120) {
//   console.log('Incorrect age');
// } else if (userAge <= 11) {
//   console.log('You are a kid!');
// } else if (userAge <= 12 && userAge >= 17) {
//   console.log('You are a teenager!');
// } else if (userAge >= 18 && userAge <= 60) {
//   console.log('You are an adult!');
// } else {
//   console.log('You are an oldman!');
// }

// // Writes the number's symbol (1 = !, 2 = @,  3 = #)
// const userNumber = prompt('Write a number between 1-9');
// switch (userNumber) {
//   case '1': {
//     console.log('The symbol is "!"');
//     break;
//   }
//   case '2': {
//     console.log('The symbol is "@"');
//     break;
//   }
//   case '3': {
//     console.log('The symbol is "#"');
//     break;
//   }
//   case '4': {
//     console.log('The symbol is "$"');
//     break;
//   }
//   case '5': {
//     console.log('The symbol is "%"');
//     break;
//   }
//   case '6': {
//     console.log('The symbol is "ˆ"');
//     break;
//   }
//   case '7': {
//     console.log('The symbol is "&"');
//     break;
//   }
//   case '8': {
//     console.log('The symbol is "*"');
//     break;
//   }
//   case '9': {
//     console.log('The symbol is "("');
//     break;
//   }
//   default: {
//     throw new Error('Incorrect imput\nWrite a number between 1-9');
//   }
// }

// // Calculate the sum of the entered numbers
// let sum = 0;
// while (true) {
//   let value = +prompt('Enter the number', '');
//   if (!value) break;
//   sum += value;
// }
// alert(sum);

// // Find Greatest Common Divisor
// let firstNumber = prompt('Enter first number');
// let secondNumber = prompt('Enter second number');
// while (firstNumber !== 0 && secondNumber !== 0) {
//   if (firstNumber > secondNumber) {
//     firstNumber = firstNumber % secondNumber;
//   } else if (firstNumber < secondNumber) {
//     secondNumber = secondNumber % firstNumber;
//   }
// }
// console.log(firstNumber + secondNumber);

// // Ask sum and calculate the discount
// const shoppingSum = prompt('Enter the sum');
// if (shoppingSum < 200) {
//   alert('You have no discount =(');
// } else if (isNaN(shoppingSum) || shoppingSum < 0) {
//   alert('Something wrong');
// } else if (shoppingSum >= 200 && shoppingSum < 300) {
//   alert(
//     "You have a 3% discount! Here's the sum now: " +
//       (shoppingSum - (shoppingSum / 100) * 3)
//   );
// } else if (shoppingSum >= 300 && shoppingSum < 500) {
//   alert(
//     "You have a 5% discount! Here's the sum now: " +
//       (shoppingSum - (shoppingSum / 100) * 5)
//   );
// } else {
//   alert(
//     "You have a 7% discount! Here's the sum now: " +
//       (shoppingSum - (shoppingSum / 100) * 7)
//   );
// }
// // Ask what is the next day of a week as long as button OK is being pressed
// const today = new Date();
// // Get the day of the week (0-6, where 0 is Sunday, 1 is Monday, etc.)
// const dayOfWeek = today.getDay();
// switch (dayOfWeek) {
//   case 0: {
//     alert('Today is Sunday');
//     break;
//   }
//   case 1: {
//     alert('Today is Monday');
//     break;
//   }
//   case 2: {
//     alert('Today is Tuesday');
//     break;
//   }
//   case 3: {
//     alert('Today is Wednesday');
//     break;
//   }
//   case 4: {
//     alert('Today is Thursday');
//     break;
//   }
//   case 5: {
//     alert('Today is Friday!!!');
//     break;
//   }
//   case 6: {
//     alert('Today is Saturday');
//     break;
//   }
// }

//// TODO ДОДЕЛАТЬ
// let dayIndex = 0;
// const userResponse = confirm('Wanna see the next day?');
// if (userResponse) {
//   alert(dayOfWeek)
// }
// let daysOfWeek = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];
// while (true) {
//   // var userResponse = confirm('Wanna see the next day?');

//   if (userResponse) {
//     alert(daysOfWeek[(getNextDay())]);
//   }
//   else {
//     break;
//   }
// }
// function getNextDay () {
//   for (daysOfWeek=0; daysOfWeek<6; daysOfWeek++) {
//     break
//   }
//   return
// };

// // Guessing number game
// function guessNumberGame() {
//   let min = 0;
//   let max = 100;
//   let computerGuess = Math.floor((min + max) / 2);
//   let userInput = '';
//   const isUserPlaying = confirm('Pick a number!');
//   if (isUserPlaying) {
//     if (userInput !== '=') {
//       userInput = prompt(
//         `Is your number bigger, smaller or equals to ${computerGuess}?\n Write only +, - or =`
//       );
//       while (userInput === '+') {
//         min = (min + max) / 2;
//         computerGuess = Math.floor((min + max) / 2);
//         userInput = prompt(
//           `Is your number bigger, smaller or equals to ${computerGuess}?\n Write only +, - or =`
//         );
//       }
//       while (userInput === '-') {
//         max = (min + max) / 2;
//         computerGuess = Math.floor((min + max) / 2);
//         userInput = prompt(
//           `Is your number bigger, smaller or equals to ${computerGuess}?\n Write only +, - or =`
//         );
//         while (userInput === '+') {
//           min = (min + max) / 2;
//           computerGuess = Math.floor((min + max) / 2);
//           userInput = prompt(
//             `Is your number bigger, smaller or equals to ${computerGuess}?\n Write only +, - or =`
//           );
//         }
//       }
//     }
//     //? when i write ELSE if below it doesnt work for some reason (???)
//     if (userInput === '=') {
//       alert(`Your number is ${computerGuess}!`);
//     }
//   } else {
//     alert('=(');
//   }
//   // наверно из за while не работает как надо
//   // if (computerGuess = (max - 1)) {
//   //   alert(`Your number is ${max}`)
//   // }
// }
// guessNumberGame();

// const car = {
//   year: 2016,
//   mileage: 200000,
//   color: 'black',
//   mark: 'toyota',
//   model: 'rav4',
//   owners: ['Andrii', 'Maksym', 'Kate'],
// };
// let newValue = null;

// do {
//   newValue = prompt('Enter New Value');
//   if (newValue) {
//     car[newValue] = prompt('Enter Value');
//   }
// } while (newValue);
// {
// }

// console.log(car);
