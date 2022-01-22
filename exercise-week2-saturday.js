console.log("------------ Iteration 1 ------------");
// 1. Turn string to number

let price1 = '30.14xxx';
let price2 = '45';

console.log("Price 2 before: ", typeof price2);

// price2 = parseInt(price2);
// price2 = Number(price2);
price2 = +price2;
console.log("Price 2 after: ", typeof price2);

console.log("Price 1 before: ", typeof price1);
price1 = parseFloat(price1);

// price1 = +price1;
// price1 = parseInt(price1);

console.log("Price 1 after: ", typeof price1);

console.log("------------ Iteration 2 ------------");

// 2. Given the number as string, remove comma and add dot
let num = '2,45';

let newNum = num.replace(",", ".");
console.log(newNum);

const newNum2 = num.split(",").join(".");
console.log(newNum2);

console.log("------------ Iteration 3 ------------");

// 3. Turn number to string
let price3 = 55;
let price33 = price3.toString();
console.log(typeof price3, "---> ",  typeof price33);

console.log("------------ Iteration 4 ------------");

// 4. Write if-else or switch that will console.log() message if someone is eligible to drink, and send them warning if they are not eligible to drink

let age = 20;

if(age < 21){
  console.log("you can't drink, sorry!");
} else if(age >= 21){
  console.log("cheers!");
} else {
  console.log("please enter a valid age/number");
}

// ternary operator
// age < 21 ? console.log("you can't drink, sorry!") : console.log("cheers!")

console.log("------------ Iteration 5 ------------");

// 5. Find js method that will help you to get rid of the white space around the string

let weirdString = '   this string has some white space around    ';

console.log("before: ", weirdString.length);

const cleanedString = weirdString.trim();

console.log("after: ", cleanedString.length)

console.log("------------ Iteration 7 ------------");

// 7. Using the new Date().getDay() method you can get the numerical representation of a current day in the week.
// The rule is that number 0 represents Sunday, number 1 represents Monday and so on till number 6 that represents Saturday. Using the given expression as an argument in the switch statement, output in the console which day is today. Ex. of return from new Date().getDay() is 1, you should see in the console It's Monday. To get you started, you can use this resource: https://www.w3schools.com/js/js_date_methods.asp

// console.log(new Date().getDay());

const today = new Date().getDay();

switch(today){
  case 0:
    console.log("It's Sunday");
    break;
  case 1:  
    console.log("It's Monday");
    break;
  case 2:  
    console.log("It's Tuesday");
    break;
  case 3:  
    console.log("It's Wednesday");
    break;
  case 4:  
    console.log("It's Thursday");
    break;
  case 5:  
    console.log("It's Friday");
    break;
  case 6:  
    console.log("It's Saturday");
    break;
  default:
    console.log("Input is not valid!")
}
