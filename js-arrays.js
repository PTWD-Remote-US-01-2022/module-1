// Arrays are data structures that allow us to group a collection of elements together in one variable.

// Part 1: Declaration, index, add, remove

const animals = ["dog", "cat", "fish"];

const mixedArr = [3, "fish", true, [], {name: "sandra"}, "", ["window", "door"]];

// arrays are zero-indexed
// arrays have the length property (arr.length)

console.log(animals[1]); // cat

console.log(mixedArr.length); // 7

console.log(mixedArr[1]); // fish

// ADD elements to the array

// this is a function
// function push(elem){
//   // do some logic on how to add elem to the array
// }

// this is a method - provide to us by JS
// .push() - adds element to the end of the array (this method mutates the original array)

console.log("original array: ", animals);

animals.push("horse");

console.log("after PUSH: ", animals);

// .unshift() - adds element in the beginning of the array (this method mutates the original array)

animals.unshift("monkey");
console.log("after UNSHIFT: ", animals);


// .splice() - insert an element at specific place (specific index) (this method mutates the original array)
animals.splice(1, 0, "shark");
console.log("after SPLICE: ", animals);

// add some, delete some
animals.splice(0, 1, "lion");

console.log("after SPLICE 2: ", animals);

animals.splice(3, 2, "super cat");
console.log("after SPLICE 3: ", animals);

// REMOVE elements

animals.splice(1, 1); // start at 1, delete 1
console.log("after SPLICE - to only remove elements: ", animals);

// .pop() - removes the last element (this method mutates the original array)
animals.pop();
console.log("after POP: ", animals);

// .shift() - removes the first element (this method mutates the original array)
animals.shift();
console.log("after SHIFT: ", animals);


console.log("-------------------------------------------------------------------------------");


// Part 2: Iterating over arrays, need to create a copy of an array

// Iterating over array with FOR loop

for(let i = 0; i < favorites.length; i++){
  console.log(`element is: ${favorites[i]}`);
}

// Iterating over array using FOREACH method

const students = ["kamila", "joey", "francisco", "emmanuel", "lisa", "gian carlo"];

students.forEach(function(student){
  console.log(`Student name is: ${student}`);
})

console.log("________________________________________________________________")

// es6

students.forEach((student) => console.log(`Student name is: ${student}`))


// ways to create a copy of the array

// 1. concat()

const fruits = ["banana", "orange"];

const fruitsUpdated = fruits.concat("berries");

console.log("original: ", fruits);
console.log("updated: ", fruitsUpdated);

// 2. spread operator [...]
const fruitsCopy = [...fruits];

fruitsCopy.push("walnuts");
console.log("original - fruits", fruits);
console.log("fruitsCopy: ", fruitsCopy);