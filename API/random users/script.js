// Bootcamp JS – Friday Exercise
// Random user API
// In this task we will create an interactive console.
// 1. Create a button “Get Random Users”
// a. On click
// i. fetch data from https://randomuser.me/documentation (get 5
// random users)
// ii. print all users to the console (objects)
// iii. save the users in a variable
// b. If the user again clicks on the button add new users to your array by using the
// spread operator
// 2. Create a number field, where the user can enter a number between 1 – 10. This
// number will be used for how many users should be fetched on clicking “Get Random
// Users” instead of the default 5.
// 3. Create a button “Get All Users” that will print all users fullnames to the console
// 4. Create a button “Get all emails” that will print all email from the users to the
// console.
// 5. Create an input field where the user can enter an email address of a user. Then at a
// button “Remove User” to remove the user from the array.
// a. If user was successfully found and removed, show the list of all users in the
// console
// b. If user was not in the list, show a message like “EMAIL_ADDRESS was not
// found.”
// 6. Create a button “Sum female age” that will sum up all female age numbers together
// a. Print all females with their age while iterating
// b. Print the calculated number to the console
// 7. Create another button for calculating all ages from men.
// a. Make your function flexible so that you do not have to repeat yourself
// 8. Create a button “Get all genders”
// a. On click: return two arrays, one with all men and the other with all female names.
// 9. Create a new button “Check age” and an input field where you can enter an age (number input field)
// a. On click: check if all users age is under the given value i. If yes, print “The age of all users is under AGE”
// ii. If no, print all users and there age to the console
// 10. Create a button “Sort by age” and a select box with two options ASC and DESC
// a. On click: print users sorted by age (ASC or DESC depending on the select state)
// b. Print the users with last name and there age to the console
// 11. Add an input field and another button “Get contact card”. The user can add an
// email address from the generated users to the input field.
// a. On click: Show a contact card in the DOM by using an image, name, age and
// location (you can do whatever you want – feel free to use CSS)

// selecting elements

const randomBtn = document.getElementById("btn");
const input = document.getElementById("input");
const usersBtn = document.getElementById("all-users");
const emailBtn = document.getElementById("emailBtn");
const checkEmail = document.getElementById("check-email");
const removeBtn = document.getElementById("removeBtn");
const genderBtn = document.getElementById("genders");
const sumFemale = document.getElementById("female");
const sumMale = document.getElementById("male");
const checkInput = document.getElementById("checkInput");
const checkBtn = document.getElementById("checkBtn");
const sortBtn = document.getElementById("sortBtn");
const sortDrop = document.getElementById("sortDrp");
const addEmail = document.getElementById("addEmail");
const contactCardBtn = document.getElementById("contactCardBtn");
const placeholder = document.querySelector(".placeholder");
const api = "https://randomuser.me/api/?results=";
let users = [];

// get all random users

const getRandomUsers = async () => {
  try {
    const response = await fetch(`${api}${input.value}`);
    const data = await response.json();
    users = [...users, ...data.results];
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

// get full names of random users

const getFullNames = () => {
  users.forEach((user) => {
    console.log(`${user.name.title} - ${user.name.first} ${user.name.last}`);
  });
};

// get emails from random users

const getEmails = () => {
  users.forEach((user) => {
    console.log(user.email);
  });
};

// check emails and remove user

const removeUser = () => {
  const check = users.findIndex((user) => user.email === checkEmail.value);
  if (check >= 0) {
    const removed = users.filter((user) => user.email !== checkEmail.value);
    console.log(removed);
  } else {
    console.log(`${checkEmail.value} was not found!`);
  }
};

// get all genders

const getAllGender = () => {
  const female = users
    .filter((user) => user.gender === "female")
    .map((user) => `${user.name.title} ${user.name.first} ${user.name.last}`);

  const male = users
    .filter((user) => user.gender === "male")
    .map((user) => `${user.name.title} ${user.name.first} ${user.name.last}`);

  console.log(female, male);
};

// sum all female ages

const sumAges = (gender) => {
  const summedAge = users.reduce((a, b) => {
    if (b.gender === gender) {
      return a + b.dob.age;
    } else {
      return a;
    }
  }, 0);
  console.log(`Age of all ${gender} is ${summedAge}.`);
};

// checkAge

const checkAge = () => {
  const isUnderAge = users.every((user) => user.dob.age < checkInput.value);
  if (isUnderAge) {
    console.log(`The age of all users is under ${checkInput.value}`);
  } else {
    const olderUsers = users
      .filter((user) => user.dob.age >= checkInput.value)
      .map(
        (user) =>
          `${user.name.title} ${user.name.first} ${user.name.last}, ${user.dob.age}`
      );

    console.log(olderUsers);
  }
};

// sort

const handleSort = () => {
  function sortAsc(a, b) {
    return a.dob.age - b.dob.age;
  }

  function sortDesc(a, b) {
    return b.dob.age - a.dob.age;
  }

  const sortFunc = sortDrop.value === "asc" ? sortAsc : sortDesc;
  const sortedUsers = users
    .sort(sortFunc)
    .map(
      (user) =>
        `${user.name.title} ${user.name.first} ${user.name.last}, ${user.dob.age}`
    );

  console.log(sortedUsers);
};

// add email

const getContactCard = () => {
  users.forEach((user) => {
    if (user.email === addEmail.value) {
      const template = `
      <div class="contact-container">
        <p>
          <img src="${user.picture.large}" alt="avatar" />
        </p>
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Age: ${user.dob.age}</p>
        <p>Country: ${user.location.country}</p>
      </div>
      `;
      placeholder.insertAdjacentHTML("beforeend", template);
    } else {
      return;
    }
  });
};

// events

randomBtn.addEventListener("click", getRandomUsers);
usersBtn.addEventListener("click", getFullNames);
emailBtn.addEventListener("click", getEmails);
removeBtn.addEventListener("click", removeUser);
genderBtn.addEventListener("click", getAllGender);
sumFemale.addEventListener("click", () => {
  sumAges("female");
});
sumMale.addEventListener("click", () => {
  sumAges("male");
});
sortBtn.addEventListener("click", handleSort);
contactCardBtn.addEventListener("click", getContactCard);
