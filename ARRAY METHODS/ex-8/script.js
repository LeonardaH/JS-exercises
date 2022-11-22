console.log("--- Exercise 08: reduce ---");

/*
1. Sum all even numbers
2. Bond arrays contained in an array of objects using the spread operator and initial value.
*/

const numbers = [13, 56, 78, 89, 90, 33, 1, 23, 34, 66];

const result = numbers.reduce((prevValue, currentValue) => {
  return currentValue % 2 === 0 ? prevValue + currentValue : prevValue;
}, 0);
console.log(result);
// expected output: 324

const myArray = [
  {
    name: "Junior",
    employees: ["John", "Doe", "Jane", "Doe"],
  },
  {
    name: "Senior",
    employees: ["Matija", "Daniel", "Mario", "Mateja"],
  },
];

// expected output: ["Silvio", "John", "Doe", "Jane", "Doe", "Matija", "Daniel", "Mario", "Mateja"]
let initial = ["Silvio"];

const allEmployees = myArray.reduce((prevValue, currentValue) => {
  return [...prevValue, ...currentValue.employees];
}, initial);

console.log(allEmployees);
