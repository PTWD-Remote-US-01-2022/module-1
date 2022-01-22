const prices = [4, 5, 6];

let sum1 = 0;

prices.forEach(el => {
  return sum1 += el;
})

console.log(sum1); // 15

const sum2 = prices.reduce((accum, currentValue) => {
  return accum + currentValue
}, 10);

console.log(sum2); // 25 because we start with 10 and we add 15

const products = [
  {
    name: "candy",
    price: 15
  },
  {
    name: "pen",
    price: 3
  },
  {
    name: "tea",
    price: 4
  }
]

const totalPrice = products.reduce((accum, currentValue, index) => {
  // console.log("accum: ", accum, " --- currentValue:", currentValue.price, "-- index: ", index )

  return accum + currentValue.price;
}, 0);

console.log(totalPrice);