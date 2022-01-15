// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'Lisa'
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`)
// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'kamila'
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if(hacker1.length > hacker2.length ){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length ){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
//Lisa -> L i s a
let newHacker1 = "";
for(let i=0; i < hacker1.length; i++){
  newHacker1 += hacker1[i] + " "
}
console.log(newHacker1.toUpperCase().trim())
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
//kamila -> alimaK
let reversedHacker2 = '';
  for(let i = hacker2.length - 1; i >= 0; i--){
    if(i===0){
      reversedHacker2 += hacker2[i].toUpperCase()
    }else {
    reversedHacker2 += hacker2[i]
    }
    //console.log(hacker2[i])
  }
  console.log(reversedHacker2)
// console.log(reversedHacker2.substr(0,reversedHacker2.length-1) + reversedHacker2.charAt(reversedHacker2.length-1).toUpperCase())

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

//console.log('A'.localeCompare('a'));
let lowerCaseHacker1 = hacker1.toLowerCase() //driver
let lowerCaseHacker2 = hacker2.toLowerCase()

if(lowerCaseHacker1.localeCompare(lowerCaseHacker2) === -1) {
  console.log("The driver's name goes first.")
} else if(lowerCaseHacker1.localeCompare(lowerCaseHacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log('What?! You both have the same name?')
}


// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word 'et' appears.

let paragraph = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`

let wordCount = 0;

for(let i = 0; i < paragraph.length; i++){
  if(paragraph[i] === ' '){
    wordCount++
  }
}
console.log(wordCount)


//Bonus 1.2
let etCount = 0;

for(let i = 0; i < paragraph.length; i++){
  if(paragraph[i] === 'e' && paragraph[i+1] === 't'){
    etCount++
  }
}
console.log(etCount)


// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 😃


let phraseToCheck = `A man, a plan, a canal, Panamaaaaa!`
//straightword
let reverseWord = ''
let straightWord = ''

for(let i =0; i < phraseToCheck.length ; i++) {
  if(phraseToCheck[i] === ' ' || phraseToCheck[i] === ',' || phraseToCheck[i] === '!'){
    continue;
  }
  straightWord += phraseToCheck[i] //aman
  reverseWord = phraseToCheck[i] + reverseWord //m A
  //console.log(straightWord)
  //console.log(reverseWord )
}
 console.log(straightWord.toLowerCase())
  console.log(reverseWord.toLowerCase() )
straightWord.toLowerCase() === reverseWord.toLowerCase()