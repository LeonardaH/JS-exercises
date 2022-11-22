/*
1. Filter all numbers that are higher than 10
2. Filter all prime numbers of the array
*/

//filter numbers that are higher than 10

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const higher = numbers.filter((num) => num > 10);
console.log(`numbers that are higher then 10: ${higher}`);

// filter all prime num

const primeNumbers = numbers.filter((n) => {
  for (let i = 2; n > i; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return n > 1;
});
console.log("2.", primeNumbers);
