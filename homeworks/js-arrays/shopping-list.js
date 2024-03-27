function shoppingList() {
  const shoppingList = [
    {
      productName: 'Milk',
      quantity: 2,
      isBought: true,
      pricePerUnit: 5,
      totalPrice: function calculateTotal() {
        return this.quantity * this.pricePerUnit;
      },
    },
    {
      productName: 'Bread',
      quantity: 1,
      isBought: true,
      pricePerUnit: 2.5,
      totalPrice: function calculateTotal() {
        return this.quantity * this.pricePerUnit;
      },
    },
    {
      productName: 'Salmon',
      quantity: 1,
      isBought: true,
      pricePerUnit: 10,
      totalPrice: function calculateTotal() {
        return this.quantity * this.pricePerUnit;
      },
    },
    {
      productName: 'Jam',
      quantity: 4,
      isBought: false,
      pricePerUnit: 3,
      totalPrice: function calculateTotal() {
        return this.quantity * this.pricePerUnit;
      },
    },
    {
      productName: 'Butter',
      quantity: 1,
      isBought: true,
      pricePerUnit: 4,
      totalPrice: function calculateTotal() {
        return this.quantity * this.pricePerUnit;
      },
    },
    {
      productName: 'Cigarettes',
      quantity: 1,
      isBought: false,
      pricePerUnit: 15,
      totalPrice: function calculateTotal() {
        return this.quantity * this.pricePerUnit;
      },
    },
  ];
  function productsToBuy() {
    const filteredParameter = 'isBought';
    const filteredValue = false;
    var productsToBuy = shoppingList.filter(function (object) {
      return object[filteredParameter] === filteredValue;
    });
    console.log('Products to buy: ');
    console.log(...productsToBuy);
  }
  productsToBuy();
  function productsBought() {
    const filteredParameter = 'isBought';
    const filteredValue = true;
    var productsBought = shoppingList.filter(function (object) {
      return object[filteredParameter] === filteredValue;
    });
    console.log('Products that already bought: ');
    console.log(...productsBought);
  }
  productsBought();
  // function markAsBought () {

  // }
  // markAsBought()
}

export { shoppingList };
