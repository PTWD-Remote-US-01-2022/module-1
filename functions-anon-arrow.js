// anonymous functions

// we are using no-named function inside this method someArray.forEach(function(elem){})
// this function will be used one time so no need to name it.
// if we would like to name it and then use it with the .forEach() method, we can do so (if it makes sense to name the fucntion):


const getStudentData = function(name, bootcamp){
    return `Student: ${name} - class: ${bootcamp}`;
  }
  
  const users = ["ana", "maria"];
  
  users.forEach(function(element){
    console.log(element.toUpperCase());
  })
  
  // function getUppercased(name){
  //   console.log(name.toUpperCase())
  // }
  
  // users.forEach(getUppercased)
  
  // const phones = ["iphone", "samsung"]
  // phones.forEach(getUppercased)
  
  // Arrow functions
  
  function multiply(a, b){
    return a * b;
  }
  
  // ES6 - longer version:
  const multiply1 = (a, b) => {
    return a * b;
  }
  
  
  // ES6 - shorter version:
  // if function returns only one line, we can omit "return" and have it as one line function:
  const multiply2 = (a, b) => a * b
  
  
  
  const sayName = name => {
    // => if ony one parameter we don't need () around x
    return `My name is ${name}`
  }