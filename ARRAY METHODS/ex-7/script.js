console.log("--- Exercise 07: map ---");

/*
1. Map numbers array to an array of power 3 exponents
2. Map over the person array and add the fruit of the proper index to the persons name
*/

// Map numbers array to an array of power 3 exponents
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbers.map((num) => num * 3);
console.log(newArray);

// Map over the person array and add the fruit of the proper index to the persons name

const persons = ["Christina", "Max", "Matt", "David", "Sarah"];
const fruits = ["🍎", "🍌", "🍓", "🍍", "🍒"];

const person = persons.map((p, f) => `${p} ${fruits[f]}`);
console.log(person);
