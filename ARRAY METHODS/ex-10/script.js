console.log("--- Exercise 09: slice ---");

/*
1. Extract the last two elements in the sequence.
2. Slice the last element of the array (imagine that the array length is not known before)
*/

const array = ["one", "two", "three", "four", "five", "six"];
const sliced = array.slice(-2);

const last = array.slice(array.length - 1);
console.log(sliced, last);
