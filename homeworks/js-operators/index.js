// Proper way to 0.1 * 0.2
console.log((1 * 2) / 10);
// Adding string and number together
const line = '1';
const number = 2;
console.log(Number(line) + number);
// Memory calculator
let flashMemory = prompt('Enter the flash-drive memory in GB');
console.log(
  'You can store up to ' +
    Math.floor((flashMemory * 1024) / 820) +
    ' files that weight 820 MB'
);
// How many chocolate-bars can you buy?
const money = prompt('How much money do you have?');
const barCost = prompt("What's the price of a choko-bar?");
const barNumber = Math.floor(money / barCost);
// I could use (money % barCost) || (money - barNumber * barCost)
let moneyRemain = Number(money - barNumber * barCost);
console.log(
  'You can buy ' +
    Math.floor(money / barCost) +
    " chokolate bar/s and you'll have $" +
    moneyRemain +
    ' left'
);
// Bank deposit counter
const depositSum = prompt('How much money would you like to deposite');
const YEAR_MONTH = 12;
const YEAR_DAY = 365;
const monthDeposit = 2;
const annualRate = 5;
const moneyEarn = (Math.floor(depositSum * annualRate * (monthDeposit / YEAR_MONTH) / 100));
console.log ('You will earn approximately $' + (100 * (moneyEarn) / 100));