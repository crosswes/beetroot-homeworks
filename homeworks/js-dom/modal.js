// Creating HTML elements
const app = document.createElement('div');
const button = document.createElement('button');
const modalWindow = document.createElement('div');
const modalWindowContent = document.createElement('span');
const closeButton = document.createElement('button');

// Adding classes
app.classList.add('app');
button.classList.add('js-button');
modalWindow.classList.add('modal-window-closed');
modalWindowContent.classList.add('modal-window-content');
closeButton.classList.add('js-button-close');

// Adding text to elements
button.innerText = 'Open';
closeButton.innerText = 'Close';

// Creating DOM elements
const DOMButton = document.getElementsByClassName('js-button');
const DOMModalWindow = document.getElementsByClassName('modal-window-closed');
const DOMModalWindowContent = document.getElementsByClassName(
  'modal-window-content'
);
const DOMButtonClose = document.getElementsByClassName('js-button-close');

// Appending
document.body.appendChild(app);
app.appendChild(button);
app.appendChild(modalWindow);
modalWindow.appendChild(modalWindowContent);
modalWindowContent.appendChild(closeButton);

// Closing and opening by replacing classes
function changeClassOpen() {
  modalWindow.classList.remove('modal-window-closed');
  modalWindow.classList.add('modal-window-open');
}
button.addEventListener('click', changeClassOpen);
function changeClassClose() {
  modalWindow.classList.remove('modal-window-open');
  modalWindow.classList.add('modal-window-closed');
}
closeButton.addEventListener('click', changeClassClose);
