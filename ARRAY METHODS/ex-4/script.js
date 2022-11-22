// FIND

console.log("--- Exercise 04: find ---");

const fruits = ["apple", "banana", "kiwi", "avocado"];
const found = fruits.find((e) => e.length > 4);
console.log(found);

/*
1. Find the correct emoji with the with the hash and put the resullt into the DOM
*/

const hash = "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad";

const cryptoEmojis = [
  {
    emoji: "😎",
    hash: "ba7816bf8f01Cfae414140de5dae2223b00361a396177a9cb410ff61f20015ad",
  },
  {
    emoji: "😂",
    hash: "ba7816bf8f01Cfae414140de5dae2223b00361a396177a9cb410ff51f20015ad",
  },
  {
    emoji: "😡",
    hash: "ba7816bf8f01Cfae414140de5dae2223b000361a396177a9cb410ff51f2005ad",
  },
  {
    emoji: "🕵️‍♂️",
    hash: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
  },
  {
    emoji: "😍",
    hash: "ba7816bf8f01Cfae414140de5dae2233b000361a396177a9cb410ff51f2005ad",
  },
];

const findHash = cryptoEmojis.find((e) => e.hash === hash);
console.log("emoji", findHash.emoji);

const node = document.createElement("p");
node.innerText = findHash.emoji;
placeholder.appendChild(node);
