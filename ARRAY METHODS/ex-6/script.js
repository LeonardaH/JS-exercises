console.log("--- Exercise 06: forEach ---");

/*

1. Iterate over an array and return all persons with there name and message
2. Instead of printing the message to the console.
Put all messages with the name into the DOM and make it visible on the page.
*/

const foodLovers = [
  {
    name: "Max",
    message: "I love 🍉",
  },
  {
    name: "Jim",
    message: "My favorite fruit is 🍌. But I hate 🥑.",
  },
  {
    name: "Alex",
    message: "Yum yum 🍏",
  },
  {
    name: "Sandra",
    message: "The taste of 🍓 in the summer is great.",
  },
  {
    name: "Sophia",
    message: "I love 🍇, 🍒 & 🍋",
  },
];

foodLovers.forEach((person) => {
  placeholder = document.getElementById("placeholder");
  const node = document.createElement("p");
  node.innerText = `${person.name}: ${person.message}`;
  placeholder.appendChild(node);
});
