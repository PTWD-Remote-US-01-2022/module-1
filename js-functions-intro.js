// ****************************************************************************************************
// PART 1: FUNCTION DECLARATION, INVOKE A FUNCTION, NAMING A FUNCTION, PARAMETERS VS. ARGUMENTS, RETURN STATEMENT
// ****************************************************************************************************

// create function (declare)

function printStudentName(){
    console.log("Hello Joey!");
  }
  
  
  function printStudentName2(){
    console.log("Hello Emmanuel!");
  }
  
  
  
  // execute the function (invoke)
  
  printStudentName()
  printStudentName2()
  
  
  // Naming conventions:
  
  // - name should be very descriptive - should describe what function exctually does
  // - try to use verbs that describe actions (exx. getUsers, greetStudents, ...)
  // - the same as variables - use camelCase
  // - the same as variables - use lowercase 
  
  
  // when we declare  a function => PARAMETERS
  //                                    |
  //                          ----------
  //                         |
  function greetStudent(studentName){ // studentName is a placeholder and can be any other world
    console.log(`Welcome, ${studentName}!`);
  }
  
  // when we excute the function => ARGUMENTS
  
  greetStudent("kamila");
  greetStudent("francisco");
  greetStudent("rabuil");
  greetStudent("sandra");
  
  function printInfo(product, price, currency){
    // console.log(`The price of ${product} is ${price}${currency}.`);
    return `The price of ${product} is ${price}${currency}.`;
  
    console.log("hi, i am after return!"); // this line of code doesn't exist for this function as it is after the return
  }
  
  const result1 = printInfo("coffee", 5, "$");
  const result2 = printInfo("sneakers", 50, "€");
  
  console.log(result1)
  console.log(result2)
  
  // 🚨🚨 function always returns something - if it is not stated what exactly, it will return undefined 🚨🚨
  
  // ----- multiple return statements -----
  
  function sayName(name){
    // name can't be empty string
    if(!name){
      return `Please provide a valid name!`;
    }
  
    return `Hi, ${name}!`;
  }
  
  const greet = sayName();
  
  console.log(greet);
  
  
  // ---- return multiple values
  
  function getUsers(){
  
    // these users in real case scenario could come from some database
    const name = "ana";
    const age = "37";
  
    // const result = {
    //   name, age
    // }
  
    // return result
  
    return {
      name,
      age
    }
  }
  
  const user = getUsers();
  
  console.log(`User is: ${user.name}, age is: ${user.age}`);