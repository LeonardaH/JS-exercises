/*
1. Sort array of objects by name, ascending.
2. Sort array of objects by postalCode, descending
3. Sort array of objects by type and name, all ascending
*/

const cities = [
  { name: "Zagreb", postalCode: 10000, type: 1 },
  { name: "Varazdin", postalCode: 42000, type: 2 },
  { name: "Split", postalCode: 21000, type: 2 },
  { name: "Rijeka", postalCode: 51000, type: 3 },
  { name: "Osijek", postalCode: 31000 },
  { name: "Zadar", postalCode: 23000 },
];

// const sortByName = (a, b) => a.name.localeCompare(b.name);
// const sortByName2 = (a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// };
// console.log(cities.sort(sortByName));

// expected output for 1.:
// [
//     { name: "Osijek", postalCode: 31000 }
//     { name: "Rijeka", postalCode: 51000, type: 3 }
//     { name: "Split", postalCode: 21000, type: 2 }
//     { name: "Varazdin", postalCode: 42000, type: 2 }
//     { name: "Zadar", postalCode: 23000 }
//     { name: "Zagreb", postalCode: 10000, type: 1 }
// ]

// expected output for 2.:
// [
//   {name: "Rijeka", postalCode: 51000, type: 3}
//   {name: "Varazdin", postalCode: 42000, type: 2}
//   {name: "Osijek", postalCode: 31000}
//   {name: "Zadar", postalCode: 23000}
//   {name: "Split", postalCode: 21000, type: 2}
//   {name: "Zagreb", postalCode: 10000, type: 1
// ]

//sort by postalCode

const sortByPostalCode = (a, b) => {
  return b.postalCode - a.postalCode;
};
console.log(cities.sort(sortByPostalCode));

// expected output for 3.:
// [
//   { name: "Zagreb", postalCode: 10000, type: 1 }
//   { name: "Split", postalCode: 21000, type: 2 }
//   { name: "Varazdin", postalCode: 42000, type: 2 }
//   { name: "Rijeka", postalCode: 51000, type: 3 }
//   { name: "Osijek", postalCode: 31000 }
//   { name: "Zadar", postalCode: 23000 }
// ]

// sort by type and name - ascending

// const sortByTypeAndName = (a, b) => {
//   if (a.type === b.type) {
//     return sortByName2(a, b);
//   }
//   return a.type - b.type;
// };

// const sortByTypeAndName2 = (a, b) =>
//   (a.type || 9) - (b.type || 9) || a.name.localeCompare(b.name);
// console.log(cities.sort(sortByTypeAndName2));
