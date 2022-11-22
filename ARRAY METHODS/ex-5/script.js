console.log("--- Exercise 05: findIndex ---");

/*
1. Find index of banana and change the index value to '🍉'
*/

const fruits = ["🍎", "🥑", "🍌", "🍓", "🍏"];

const index = fruits.findIndex((e) => e === "🍌");
fruits[index] = "🍉";
console.log(index);
console.log(fruits);
