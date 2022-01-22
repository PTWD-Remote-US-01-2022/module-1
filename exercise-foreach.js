// Use the given array and iterate over it:

// - using for loop
// - using .forEach() method and show the index of each element next to the element itself.

const fruits = ['apple', 'plum', 'strawberries'];

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i], " ---- ", i)
}

fruits.forEach(function(oneFruit, index){
  console.log(oneFruit, "--------> ", index);
})

// fruits.forEach((oneFruit, index) => {
//   console.log(oneFruit, "--------> ", index);
// })

// fruits.forEach((oneFruit, index) => console.log(oneFruit, "--------> ", index))