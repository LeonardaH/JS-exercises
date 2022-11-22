console.log("--- Exercise 02: every ---");
/*
1. Check if numbers array has just numbers above 40 and print the result to the console
2. Use mySearchNumber to check if a specific number is in the numbers array by using every().
Afterwards print a sentence to the console like 'XX is in the array' or 'XX is not in the array'
3. Check if all persons have the type 'member' and print the result to the DOM.
*/

//numbers above 40
const numbers = [20, 40, 50, 100, 300, 12, 56, 40];

const check = numbers.every((num) => num > 40);
console.log(check);

//check if a specific numb is in the numbers array

const mySearchNumber = 50;
const searchResult = numbers.every((n) => n !== mySearchNumber);
console.log(
  `${mySearchNumber} ${!searchResult ? "is" : "is not"} in the array.`
);

//  Check if all persons have the type 'member' and print the result to the DOM

const persons = [
  {
    name: "Max",
    type: "member",
  },
  {
    name: "Jim",
    type: "member",
  },
  {
    name: "Alex",
    type: "member",
  },
  {
    name: "Sandra",
    type: "member",
  },
  {
    name: "Sophia",
    type: "member",
  },
];

const member = persons.every((person) => person.type === "member");
console.log(member);

placeholder = document.getElementById("placeholder");
const node = document.createElement("p");
node.innerHTML = `<p>${
  member
    ? "All persons have the type member."
    : "Some persons don't have the type member."
}</p>`;
placeholder.appendChild(node);
