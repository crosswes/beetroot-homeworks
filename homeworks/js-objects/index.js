import { fractions } from "./fractions.js";


const car = {
  manufacturer: 'lexus',
  model: 'RCF',
  year: 2024,
  avargeSpeed: 117,
  tankCapacity: 65,
  fuelConsumption: 11.2,
  drivers: [],
};
function addDriver(driverName) {
  car.drivers.push(driverName);
  let addMoreDrivers = confirm('Do you want to add a driver?');
  while (addMoreDrivers) {
    addDriver(prompt('Type driver name'));
    addMoreDrivers = confirm('Do you want to add another driver?');
    if (!addMoreDrivers) {
      break;
    }
  }
}
function showCarInfo() {
  console.log(car);
}
function wasTheDriver() {
  const checkedDriver = prompt('Enther driver name that you want to check');
  if (car.drivers.includes(checkedDriver)) {
    console.log('Yes!');
  } else {
    console.log('no');
  }
}
function calculateFuelForDistance() {
  const distance = prompt('Enter the distance');
  if (!distance || distance < 0 || isNaN(distance)) {
    throw new Error('Invalid');
  }
  let timeNeeded = null;
  let fuelNeeded = null;
  let speed = car.avargeSpeed;

  if (distance) {
    timeNeeded = Math.ceil((distance / speed) * 10) / 10;
    fuelNeeded = Math.ceil((distance * 100) / car.fuelConsumption / 100);
    if (timeNeeded > 4) {
      console.log(
        'As your ride takes long you need to take a rest every 4 hours'
      );
      let restHours = 0;
      for (i = 1; i < timeNeeded; i++) {
        if (i % 4 === 0) {
          console.log('You need to rest for an hour');
          restHours += 1;
        }
      }
      timeNeeded += restHours;
    }
    console.log('You will need: ', timeNeeded + ' hours');
    console.log('You will need: ', fuelNeeded + ' liters of fuel');
  }
}

function showTime() {
  let time = new Date();
  console.log('Now is ' + time.getHours() + ':' + time.getMinutes());

  function changeSeconds() {
    time.setSeconds(
      time.getSeconds() + +prompt('How many seconds do you want to add?')
    );
    const changedSeconds = time.getSeconds();
    console.log('Heres the seconds now: ' + changedSeconds);
  }
  changeSeconds();

  function changeMinutes() {
    time.setMinutes(
      time.getMinutes() + +prompt('How many minutes do you want to add?')
    );
    const changedMinutes = time.getMinutes();
    console.log('Heres the minutes now: ' + changedMinutes);
  }
  changeMinutes();

  function changeHours() {
    time.setHours(
      time.getHours() + +prompt('How many hours do you want to add?')
    );
    const changedHours = time.getHours();
    console.log('Heres the hours now: ' + changedHours);
  }
  changeHours();
  console.log(
    'But now is: ' +
      time.getHours() +
      ':' +
      time.getSeconds() +
      ':' +
      time.getSeconds()
  );
}

addDriver();
showCarInfo();
wasTheDriver();
calculateFuelForDistance();
showTime();
fractions()