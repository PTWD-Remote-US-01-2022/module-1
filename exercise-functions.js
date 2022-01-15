// 1. Create a function that accepts 3 numbers as parameters, and returns their sum.

function add(a, b, c){
    return a + b + c;
}

const result = add(1, 3, 5);
const resultA = add(10, 30, 50);
const resultB = add(11, 33, 55);

console.log(result);
console.log(resultA);
console.log(resultB);

// ******************************************************************************************
// ******************************************************************************************

// 2. Create a function named isNameOddOrEven() that accepts a string as a parameter. 
// The function should return whether a received string has an odd or even number of letters. 
// The expected return should be in the following format - string: 
// ’<name> has an even/odd number of letters’.


function isNameOddOrEven(name){

if(!name){
    return `Please add valid name!`;
}

if(name.length % 2 === 0){
    return `${name} has even number of letters`;
} else {
    return `${name} has odd number of letters`;
}
}
  
  const nameThing = isNameOddOrEven("ana");
  const nameThing2 = isNameOddOrEven("kamila");
  const nameThing3 = isNameOddOrEven("");
  
  console.log(nameThing); // ana has odd number of letters
  console.log(nameThing2); // kamila has even number of letters
  console.log(nameThing3); // Please add valid name!
  
  