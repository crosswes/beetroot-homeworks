const username = prompt('What is your name?');
console.log ('Hello ' + username + '! Welcome to my website.');

const YEAR = 2024
const yearBirth = prompt('Enter the year you were born');
const birthday = confirm('Have you already had a birthday this year?\nPress OK if yes, Cancel if not');
if (birthday === true)
  console.log ('Let me guess... I\'m sure you\'re ' + (YEAR - yearBirth));
else if (birthday === false)
console.log ('Let me guess... I\'m sure you\'re ' + (YEAR - yearBirth - 1));

const sideLenght = prompt('Write a lenght of the side in cm');
console.log ('Here\'s the perimeter: ' + (sideLenght * 4) + 'cm²');

const tripLenght = prompt('How far are you going?\nWrite the distance in km');
const tripDuration = prompt('How much time are you planning to spend on the trip?\nWrite the duration in')
console.log ('You\'ll need to drive ' + tripLenght / tripDuration + ' kilometers per hour!\nDont forget about the speed limits =)')

const sum = prompt('I convert only dollars to hryvnia so\nWrite the amount of $ that you have.');
console.log('Its a big amount of ' + (sum * 3849)/100 + ' hryvnias! \nYou\'re rich now =\)');

console.log ('Bye, ' + username + '. It was a good time here')