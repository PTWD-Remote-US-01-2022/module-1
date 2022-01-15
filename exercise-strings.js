// Create variables with your first name, last name and age.
const firstName = "francisco";
const lastName = "cano";
const age = 29;

// Make the first letters of your first and last name capitalized.
const capFirstName = firstName.charAt(0).toUpperCase() + firstName.substring(1);
const capLastName = lastName.charAt(0).toUpperCase() + lastName.substring(1);

console.log(capFirstName, capLastName);

// Concatenate your first and last name to give your full name.
console.log(`The full name is: ${capFirstName} ${capLastName}.`);

console.log("The full name is " + capFirstName + " " + capLastName + ".");

// Use console.log() method to output the sentence with the following structure: My name is __________ and I am _____.

console.log(`My name is ${capFirstName} ${capLastName} and I am ${age}.`)