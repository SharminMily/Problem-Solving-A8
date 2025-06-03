/* -Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview */

const items = [
  { quantity: 2, price: 100 },
  { quantity: 1, price: 250 },
  { quantity: 4, price: 75 }
];

function getTotalValue(arr) {
  return arr.reduce((total, item) => {
    return total + (item.quantity * item.price);
  }, 0);
}

const total = getTotalValue(items);
// console.log("Total Value:", total);
