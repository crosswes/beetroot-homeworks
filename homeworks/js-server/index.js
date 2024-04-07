const DOMButton = document.getElementById('js-button');
if (DOMButton) {
  DOMButton.addEventListener('click', () => {
    console.log('Hi');
    const data = {
      firstName: 'arthur',
      email: 'em@da.das',
    };
    const dataToString = JSON.stringify(data);
    fetch('http://localhost:3000/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: dataToString,
    })
      .then((r) => r.json())
      .then((response) => {
        console.log(response);
      });
  });
}
