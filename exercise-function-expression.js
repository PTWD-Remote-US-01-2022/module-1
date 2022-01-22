// function declaration
const joey = sayMyName("joey");
console.log(joey);

function sayMyName(str){
  return `The name is ${str}.`;
}

// function expression

// console.log(getStudentData("sandra", 40, "miami"));

const getStudentData = function(name, age, city){
  return `Student ${name} is ${age} years old and from ${city}.`
}

console.log(getStudentData("sandra", 40, "miami"));