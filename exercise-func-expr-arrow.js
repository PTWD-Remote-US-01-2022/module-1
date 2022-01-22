// Exercise:
// Create a function expression doTheMath(num1, sign, num2)that will return the result of the mathematic operations of num1 operator num2. Allowed operators (signs) are +, -, *, /, %, **. Hint: you can use the switch statement.
// Refactor the function in the arrow manner.

const doTheMath = function(num1, sign, num2){
    switch(sign){
      case "+":
        return num1 + num2;
        break;
      case "-":
        return num1 - num2;
        break;
      case "*":
        return num1 * num2;
        break;
      case "/":
        return num1 / num2;
        break;
      case "%":
        return num1 % num2;
        break;
      case "**":
        return num1 ** num2;
        break;
      default:
        console.log("Not a valid symbol.")
    }
  }
  
  console.log(doTheMath(3, "*", 5)); // 15
  console.log(doTheMath(5, "/", 2)); // 2.5
  
  
  const doTheMath2 = (num1, sign, num2) => {
    switch(sign){
      case "+":
        return num1 + num2;
        break;
      case "-":
        return num1 - num2;
        break;
      case "*":
        return num1 * num2;
        break;
      case "/":
        return num1 / num2;
        break;
      case "%":
        return num1 % num2;
        break;
      case "**":
        return num1 ** num2;
        break;
      default:
        console.log("Not a valid symbol.")
    }
  }
  
  console.log(doTheMath2(3, "*", 5)); // 15
  console.log(doTheMath2(5, "/", 2)); // 2.5