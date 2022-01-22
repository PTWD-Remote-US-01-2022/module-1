// exercise 1: Capitalize each element of the array - the whole word:
const fruits = ['pineapple', 'orange', 'mango'];

const capsFruits = fruits.map(el => {
  return el.toUpperCase();
})

// const capsFruits = fruits.map(el => el.toUpperCase())

console.log(capsFruits);


// exercise 2: Capitalize the first letter of every city. Bonus: if the city has 2 or more words in the name, capitalize the first letter of each word.
const cities = [
  'miami',
  'barcelona',
  'madrid',
  'amsterdam',
  'berlin',
  'sao paulo',
  'lisbon',
  'mexico city',
  'paris'
];

const capsCities = cities.map( elem => {

  if(elem.includes(" ")){
    let splittedArr = elem.split(" ");

    const newArr = splittedArr.map(el => el.charAt(0).toUpperCase() + el.slice(1));

    return newArr.join(" ");
  }

  const newCity = elem[0].toUpperCase() + elem.slice(1);
  return newCity;
})

console.log(capsCities);
