// function declarations / statements
// hoisting


const sandwich = printInfo("sandwich", 8);
console.log(sandwich);

function printInfo(product, price){
  return `${product} price is ${price}.`
}

// const coffee = printInfo("coffee", 4)
// console.log(coffee);


console.log("name: ", name);
var name = "lisa"; // variable with var gets hoisted
// const name = "lisa"; // variable with const doesn't get hoisted



multiply(3, 6);

// ✅ function declaration (aka statement) is hoisted all the way to the top of the code doc

function multiply(num1, num2){
  return num1 * num2;
}

multiply(3, 6);

// function expressions

// function expression - is a function without name stored in a variable

// console.log(addition(4, 5));
const addition = function(a, b){
  return a + b;
}
console.log(addition(4, 5));

// A function declaration is a named function and can be stored in a variable if needed.
// A function expression is an un-named (or so-called anonymous) function that is stored in the variable.
// Both can be reused throughout the code.
