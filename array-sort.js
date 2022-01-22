// array method sort

//  - sort mutates original array ---> we need to make sure to create a copy of the array before we sort it
// - returns an array with specific order of elements

// .sort() - sorts values as strings in alphabetical and ascending order

const unsorted = [1, 4, 2, 11, 42];

const sorted1 = [...unsorted].sort();
console.log("unsorted: ", unsorted)

console.log(sorted1);

// "2" > "1"

const randomNumbers = [3, 1, 9, 8, 42, 1221];

const ascRandom = [...randomNumbers].sort((a, b) => a - b);

// a = 3
// b = 10
// a - b = -7 ==> this means that in ascending order these elements don't need to shift places because their subtraction result is negative and that means that the order is good

// a = 7
// b = 2
// a - b = 5

// in ascending: in this case the numbers will shift places because 2 comes before 7 as ther subtraction is positive number

console.log("ascRandom: ", ascRandom);

const descRandom = [...randomNumbers].sort((a, b) => b - a);
console.log("descRandom: ", descRandom)

console.log(" -----   -----   -----   -----   -----   -----   -----   -----   ");
// sorting strings
const words = ["Hello", "great", "First", "A", "a", "how"];

// sorting strings in ascending order
// the capitalized letters will come BEFORE lowercased ones.

const ascWords = [...words].sort();

console.log("ascWords: ", ascWords);

const properWordsSort = [...words].sort((a, b) => {
  if(a.toLowerCase() > b.toLowerCase()){
    return 1
  } else if (a.toLowerCase() < b.toLowerCase()){
    return -1
  } else {
    return 0
  }
})

console.log("properWordsSort: ", properWordsSort);

// sorting by length

const sortedByLength = [...words].sort((a, b) => {
  if(a.length > b.length) {
    return 1
  }  else if (a.length < b.length){
    return -1
  } else {
    return 0
  }
})

console.log("sortedByLength ----> ", sortedByLength);

const arr = [
  {product: "strawberries", votes: 3 },
  {product: "milk", votes: 2 },
  {product: "banana", votes: 2 },
  {product: "salad", votes: 4 }
]

const sortedByVotesAndAlphabetically = [...arr].sort((a, b) => {
  if(a.votes > b.votes){
    return -1
  }

  if(a.votes < b.votes){
    return 1
  }

  if(a.product > b.product){
    return 1
  }

  if(a.product < b.product){
    return -1
  }
})

console.log("--------------- ", sortedByVotesAndAlphabetically)