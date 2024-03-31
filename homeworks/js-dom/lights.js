// Creating HTML Elements
const app = document.createElement('app');
const trafficLights = document.createElement('div');
const redLight = document.createElement('div');
const yellowLight = document.createElement('div');
const greenLight = document.createElement('div');
const button = document.createElement('button');
const span = document.createElement('span');

// Adding Classes
app.classList.add('app');
trafficLights.classList.add('traffic-lights');
redLight.classList.add('light');
yellowLight.classList.add('light');
greenLight.classList.add('light');
button.classList.add('js-button');
span.classList.add('js-button-text');

// Adding Id's
trafficLights.id = 'trafficLights';
redLight.id = 'red';
yellowLight.id = 'yellow';
greenLight.id = 'green';

// Adding Text
span.innerText = 'Change color';

// Creating DOM ELements
const DOMApp = document.getElementsByClassName('app');
const DOMTrafficLights = document.getElementById('trafficLights');
const DOMLightRed = document.getElementById('red');
const DOMLightYello = document.getElementById('yellow');
const DOMLightGreen = document.getElementById('green');
const DOMButton = document.getElementsByClassName('js-button');
const DOMButtonText = document.getElementsByClassName('js-button-text');

// Appending
document.body.appendChild(app);
app.appendChild(trafficLights);
trafficLights.appendChild(redLight);
trafficLights.appendChild(yellowLight);
trafficLights.appendChild(greenLight);
app.appendChild(button);
button.appendChild(span);

// Changing Color On Button Click
let currentLight = 0;
function changeColor() {
  red.style.backgroundColor = 'currentColor';
  yellow.style.backgroundColor = 'currentColor';
  green.style.backgroundColor = 'currentColor';

  switch (currentLight) {
    case 0:
      red.style.backgroundColor = 'red';
      break;
    case 1:
      yellow.style.backgroundColor = 'yellow';
      break;
    case 2:
      green.style.backgroundColor = 'green';
      break;
  }
  currentLight = (currentLight + 1) % 3;
}
button.addEventListener('click', changeColor);
