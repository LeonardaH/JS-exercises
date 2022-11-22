console.log("--- Exercise 01: concat ---");
/*
1. Create two number arrays and concat them
2. Concat two array and add a object in between the arrays
3. Add a string value to the end of an array by using the concat method
4. Create a deep clone of an array and prove that your clone is really a deep clone.
*/

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

//concat array
let newArray = array1.concat(array2);
console.log(newArray);

//add object

const person = {
  name: "Lea",
};
newArray = array1.concat(person, array2);
console.log(newArray);

//add a string

newArray = newArray.concat("Frontend");

// create a deep clone

deepClone = newArray.concat();
console.log(deepClone);
console.log("------------------------------------------------------");
deepClone.push("Bootcamp");
console.log(deepClone);
console.log(newArrary);
