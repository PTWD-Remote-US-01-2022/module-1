// array method .filter()

const numbers = [3, 7, 9, 10, 12];

const filteredArr = numbers.filter(num => {
  if (num % 3 === 0){
    return num
  }
})

console.log(filteredArr);

// const filteredArr2 = numbers.filter(num => num % 3 === 0);
// console.log(filteredArr2)

// foreach

const filtered = [];
numbers.forEach(num => {
  if(num % 3 === 0) {
    filtered.push(num);
  }
})

console.log("filtered: ", filtered);

const names = ["ana", "maria", "ivan", "joey", "jimmy"];

const namesWithJ = names.filter(singleName => {

  if(singleName.charAt(0) === "j"){
    return singleName
  }
})

console.log(namesWithJ);