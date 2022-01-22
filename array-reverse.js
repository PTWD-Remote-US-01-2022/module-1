// array method reverse

// - mutates the array --> need to make a copy before reversing
// - returns an array of the same length (size) as the original array

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const reversed = [...nums].reverse();

console.log("reversed: ", reversed)