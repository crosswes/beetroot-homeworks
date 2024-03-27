// sorry for creating separate file only fractures
// Fraction info input
function fractions() {
  // Errors
  function errors(nominator1, denominator1, nominator2, denominator2) {
    if (!nominator1 || isNaN(nominator1) || nominator1 <= 0) {
      throw new Error('Invalid nomenator');
    } else if (!nominator2 || isNaN(nominator2) || nominator2 <= 0) {
      throw new Error('Invalid nomenator');
    } else if (!denominator1 || isNaN(denominator1) || denominator1 <= 0) {
      throw new Error('Invalid denomenator');
    } else if (!denominator2 || isNaN(denominator2) || denominator2 <= 0) {
      throw new Error('Invalid denomenator');
    }
  }
  // Adding Fractions
  function addFractions() {
    let nominator1 = +prompt('Enter nominator of the first fraction', 14);
    let denominator1 = +prompt('Enter denominator of the first fraction', 5);
    let nominator2 = +prompt('Enter nominator of the second fraction', 4);
    let denominator2 = +prompt('Enter denominator of the second fraction', 3);
    let nominatorAfterOperation = null;
    let denominatorAfterOperation = null;
    errors(nominator1, denominator1, nominator2, denominator2);
    // If denominators dont need to be modifyed
    if (denominator1 === denominator2) {
      nominatorAfterOperation = nominator1 + nominator2;
      denominatorAfterOperation = denominator1;
    } else {
      // Find the common denominator
      denominatorAfterOperation = denominator1 * denominator2;
      nominatorAfterOperation =
        nominator1 * denominator2 + nominator2 * denominator1;
    }
    // Result of operation
    console.log(
      'I added your fractions, here:\nNominator:' +
        nominatorAfterOperation +
        '\ndenominator:' +
        denominatorAfterOperation
    );
  }
  addFractions();

  // Substraction Fractions
  function substractFractions() {
    let nominator1 = +prompt('Enter nominator of the first fraction', 4);
    let denominator1 = +prompt('Enter denominator of the first fraction', 5);
    let nominator2 = +prompt('Enter nominator of the second fraction', 3);
    let denominator2 = +prompt('Enter denominator of the second fraction', 4);
    let nominatorAfterOperation = null;
    let denominatorAfterOperation = null;
    errors(nominator1, denominator1, nominator2, denominator2);

    if (denominator1 === denominator2) {
      nominatorAfterOperation = nominator1 - nominator2;
      denominatorAfterOperation = denominator1;
    } else {
      // Find the common denominator
      denominatorAfterOperation = denominator1 * denominator2;
      nominatorAfterOperation =
        nominator1 * denominator2 - nominator2 * denominator1;
    }

    // Result of operation
    console.log(
      'Now i substracted your fractions, here:\nNominator:' +
        nominatorAfterOperation +
        '\ndenominator:' +
        denominatorAfterOperation
    );
  }
  substractFractions();
  // Multiplying Fractions
  function multiplyingFractions() {
    let nominator1 = +prompt('Enter nominator of the first fraction', 5);
    let denominator1 = +prompt('Enter denominator of the first fraction', 2);
    let nominator2 = +prompt('Enter nominator of the second fraction', 2);
    let denominator2 = +prompt('Enter denominator of the second fraction', 4);
    let nominatorAfterOperation = null;
    let denominatorAfterOperation = null;
    errors(nominator1, denominator1, nominator2, denominator2);
    nominatorAfterOperation = nominator1 * nominator2;
    denominatorAfterOperation = denominator1 * denominator2;
    // Result of operation
    console.log(
      'Now i multiplyed your fractions, here:\nNominator:' +
        nominatorAfterOperation +
        '\ndenominator:' +
        denominatorAfterOperation
    );
  }
  multiplyingFractions();
  // Dividing Fractions
  function dividingFractions() {
    let nominator1 = +prompt('Enter nominator of the first fraction', 7);
    let denominator1 = +prompt('Enter denominator of the first fraction', 4);
    let nominator2 = +prompt('Enter nominator of the second fraction', 3);
    let denominator2 = +prompt('Enter denominator of the second fraction', 5);
    let nominatorAfterOperation = null;
    let denominatorAfterOperation = null;
    errors(nominator1, denominator1, nominator2, denominator2);
    nominatorAfterOperation = nominator1 * denominator2;
    denominatorAfterOperation = denominator1 * nominator2;
    // Result of operation
    console.log(
      'Now i devided your fractions, here:\nNominator:' +
        nominatorAfterOperation +
        '\ndenominator:' +
        denominatorAfterOperation
    );
  }
  dividingFractions();
}

export { fractions };