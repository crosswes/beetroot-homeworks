function resizebleArea() {
  // Creating HTML Elements
  const app = document.createElement('div');
  const textAreaContainer = document.createElement('div');
  const textareaDiv = document.createElement('div');

  // Adding Classes
  textAreaContainer.classList.add('js-textarea-container');

  // Adding Id's
  app.id = 'app';
  textareaDiv.id = 'js-textarea';

  // Creating DOM ELements
  const DOMApp = document.getElementById('app');
  const DOMDiv = document.getElementsByClassName('js-textarea-container');
  const DOMTextArea = document.getElementById('js-textarea');

  // Adding Text
  textAreaContainer.innerText = 'You can extend element below';
  textareaDiv.innerText = 'Type something here...';

  // Appending
  document.body.appendChild(app);
  app.appendChild(textAreaContainer);
  textAreaContainer.appendChild(textareaDiv);

  textareaDiv.contentEditable = true;
  textareaDiv.textContent = String('Type something here...');
}

resizebleArea();
