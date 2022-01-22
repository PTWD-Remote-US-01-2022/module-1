// MAP

// - doesn't mutate the original array
// - returns a new array of THE SAME SIZE as the original array

const arr = [1, 2, 3];

console.log(`original array:  ${arr}`);

// forEach returns "undefined" by default

const newArr = arr.forEach(function(el){
  return el * 3;
})

console.log(newArr); // undefined

const someNewArr = [];
arr.forEach(el => someNewArr.push(el * 2));

console.log("someNewArr: ", someNewArr);

// MAP - by default returns a new array

// const mappedArr = arr.map(function(el){
//   return el * 2
// })

const mappedArr = arr.map((el, index) => {
  console.log(index);
  return el * 2;
})

console.log(mappedArr);

