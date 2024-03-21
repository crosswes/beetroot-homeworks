function calculateArea() {
  let length = +prompt('Enter the length');
  let width = +prompt('Enther the width');
  if (!width) {
    alert(`The area is ${length * length}`);
  } else {
    alert(`The area is ${length * width}`);
  }
}

export { calculateArea };
