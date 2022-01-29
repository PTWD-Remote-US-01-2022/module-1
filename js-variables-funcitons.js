// ============ Hoisting, Shadow Variables, Basic console.log debugging ============

// global scoped variables can be read from anywhere in the file.
const thisIsMyGlobalVariable = 'Hello World'
// a global scope variable is a variable which is not declared in any specific function.

// a shadow variable is a variable which has the same name as another variable which can be read form the location of the declaration of the variable you are setting.
// const myFirstFunction = thisIsMyGlobalVariable => {
const myFirstFunction = thisIsMyLocalVariable => {
// variables set as parameters for a function are local scoped. Which means they can only be read from within the function which they are declared

  console.log({thisIsMyGlobalVariable});
  console.log({thisIsMyLocalVariable});
  // mySecondFunction();
}




// myFirstFunction('blah');

const mySecondFunction = () => {
  console.log({secondGlobal: thisIsMyGlobalVariable});
  // thisIsMyLocalVariable is locally scoped to myFirstFunction and therefore cannot be read in mySecondFunction unless it has been redeclared within this function at which point the value would not be the same, unless you make it so.
  // console.log({secondLocal: thisIsMyLocalVariable});

  // even though myThirdVar is a global variable. Through hoisting the file understands that it exists but it has not yet had it's value set since it is called here before being able to read the value since the file is read from top to bottom.
  // console.log({myThirdVar});
}
// mySecondFunction();

const myThirdVar = 'Third Var';

// =============================

let timer = 0;

const updatedTimer = () => {
  timer += 1
  // console.log("timer: ", timer)
  console.log({timer})
}

const resetTimer = () => {
  timer = 0
  console.log({reset: timer})
}


// updatedTimer();
// updatedTimer();
// updatedTimer();
// updatedTimer();
// updatedTimer();
// resetTimer();
// updatedTimer();
// updatedTimer();
// updatedTimer();


// ==================================

// ========= Async and Callback Functions =========


const randomNum = num => {
  const result = Math.floor(Math.random() * (num * 10));
  console.log(result);
  return result;
}

const myPromise = new Promise((resolve, reject) => {
  if(randomNum(5) % 3 === 0) {
    setTimeout(() => {
      resolve('Multiple of 3')
    }, 3000);
  } else {
    reject('Not a multiple of 3')
  }
})

const myCallBack = (elem) => {
  console.log('this is my callback: ', elem);
}

// randomNum(2)

// an Async/Await it used for promises returns

// async function myAsync() {
//   // this is how to start a async function using the long method
// }

// this is how you initialize an async function using fat arrow method
const asyncFunct = async () => {
  try {
    // in order to call await in a function, the function has to be declared as an async function
    const result = await myPromise;
    // the await method waits for a resolution or rejection from a promise in order to allow for the code to continue.
    myCallBack(result);
    console.log('done with async function')
  } catch(err) {
    console.log({err})
  }
  // with try and catch, the catch will be called if the promise returns a rejection and the code in the try section will work if you get back a resolution from the promise
}

asyncFunct()

// this is what a normal callback would look like.
// function theCallBack(param, callback) {
//   console.log('this is the param: ', param)
//   setTimeout(() => {
//     callback();
//   }, 3000)
// }

// slightly more complex way to write a callback
const firstCallback = (param1, param2) => {
  console.log(`${param1} and ${param2}`);
}

const callThisFunction = (cb, param1, param2) => {
  cb(param1, param2);
}

callThisFunction(firstCallback, 'Bill', 'Ted');

// theCallBack('blah', () => console.log('finals done'))
// ===================================

//  another example of a callback function and practical use for it


const arr1 = ['blah', 'cat', 'dog']
const arr2 = [3, 2, 6, 5, 7, 4, 3, 7]
const arr3 = [true, false, {name: 'Blah', age: 22}, [5, 4, true]]

const getTheSumValue = (param1, param2) => {
  // console.log(`${param1} and ${param2}`);
  return param1 + param2;
}

const getProduct = (param1, param2) => {
  return param1 * param2;
}

const getTheSyncedValues = (cb, firstArr, secondArr) => {
  const elem1 = Math.floor(Math.random() * (firstArr.length + 10))
  const elem2 = typeof secondArr === 'string' ? (string.length * 6) / 2 : (secondArr.length * 3) / 2

  return cb(elem1, elem2);
}

// getTheSyncedValues(getTheSumValue, 'Bill', 'Ted');

console.log(getTheSyncedValues(getTheSumValue, arr2, arr3))

console.log(getTheSyncedValues(getProduct, arr2, 'blah'))
