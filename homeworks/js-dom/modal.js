function showModalWindow() {
  // Creating HTML elements
  const app = document.createElement('div');
  const button = document.createElement('button');
  const modalWindow = document.createElement('div');
  const modalWindowContent = document.createElement('span');
  const closeButton = document.createElement('button');

  // Adding classes
  modalWindow.classList.add('modal-window-closed');
  modalWindowContent.classList.add('modal-window-content');
  if (app) {
    app.classList.add('app');
  } else {
    throw new Error('no div element');
  }
  if (button) {
    button.classList.add('button');
  } else {
    throw new Error('no div element');
  }
  if (closeButton) {
    closeButton.classList.add('closeButton');
  } else {
    throw new Error('no closeButton element');
  }

  // Adding text to elements
  button.innerText = 'Open';
  closeButton.innerText = 'Close';

  // // Creating DOM elements
  // const DOMButton = document.getElementsByClassName('button');
  // const DOMModalWindow = document.getElementsByClassName('modal-window-closed');
  // const DOMModalWindowContent = document.getElementsByClassName(
  //   'modal-window-content'
  // );
  // const DOMButtonClose = document.getElementsByClassName('button-close');

  // Appending
  document.body.appendChild(app);
  app.appendChild(button);
  app.appendChild(modalWindow);
  modalWindow.appendChild(modalWindowContent);
  modalWindowContent.appendChild(closeButton);

  // Closing and opening by replacing classes
  const changeClassOpen = () => {
    modalWindow.classList.remove('modal-window-closed');
    modalWindow.classList.add('modal-window-open');
  };
  button.addEventListener('click', changeClassOpen);
  const changeClassClose = () => {
    modalWindow.classList.remove('modal-window-open');
    modalWindow.classList.add('modal-window-closed');
  };
  closeButton.addEventListener('click', changeClassClose);
}
showModalWindow();
