function changeText() {
  const DOMInput = document.getElementById('js-input');
  const DOMOriginalText = document.getElementById('js-text');

  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'e') {
      if (DOMOriginalText) {
        DOMOriginalText.classList.add('original-text--hide');
      } else {
        throw new Error('No DOMText element');
      }
      if (DOMInput) {
        DOMInput.classList.remove('text-input--hide');
        DOMInput.addEventListener('input', (event) => {
          // console.log(event.target.value);
          const userInput = event.target.value;
        });
      } else {
        throw new Error('No DOMInput element');
      }
    }
    if (DOMInput && DOMOriginalText) {
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          DOMInput.focus();
        }
      });
    }
  });
  DOMInput.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 's') {
      // document.body.style = 'background-color: red';
      DOMInput.classList.add('text-input--hide');
      DOMOriginalText.classList.remove('original-text--hide');
      DOMOriginalText.innerText = DOMInput.value;
    }
  });
}

// event.preventDefault();

export default changeText;
