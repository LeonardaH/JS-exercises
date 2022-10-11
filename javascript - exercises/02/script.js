// On the first page load simulate page loading for 2 second.
// •	if the user is visiting the page for the first time show a semi black overlay with the spinner in the middle
// •	overlay should be shown for 1-4 seconds (randomly between those values), after that overlay is hidden/removed and normal page is shown
// •	if the user refreshes the page (if not first visit anymore) normal page should be shown, not the overlay

const random = Math.floor(Math.random() * 4000 + 1000);
const overlay = document.querySelector(".overlay");

const removeOverlay = () => {
  overlay.style.display = "none";
};

if (localStorage.getItem("firstTime") === null) {
  localStorage.setItem("firstTime", false);
  setTimeout(removeOverlay, random);
} else {
  removeOverlay();
}

// Users
// Show 10 random users.
// Random user API: https://randomuser.me/api/?results=10
// •	show the 10 users to the user with the following informations: name (first + last name), country, postcode and date of birth (dob.date)
// •	initially they should be sorted by dob (date)
// •	above the users container are sorting options (lastname, country, postcode) and on click the sorting of the users should change to the corresponding value
// •	under these options there is a search field, by typing in the field users are filtered by firstname, lastname, country and postcode (case insensitive)
// •	there should be a 200ms delay between typing and filtering, if the user stops typing for 200ms filtering should happen

// selecting elements

const tableBody = document.getElementById("random-users");
const sortName = document.querySelector("#sort-name");
const sortCountry = document.querySelector("#sort-country");
const sortPostalCode = document.querySelector("#sort-postcode");
const input = document.querySelector(".search__input");

let users = [];

const getUsers = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    users = data.results;
    const sortDob = users.sort(
      (a, b) => new Date(a.dob.date) - new Date(b.dob.date)
    );
    console.log(sortDob);
    sortDob.forEach((user) => {
      displayUsers(user);
    });
  } catch (error) {
    console.log(error);
  }
};

const displayUsers = (user) => {
  const row = document.createElement("tr");
  const name = document.createElement("td");
  name.innerHTML = `${user.name.first} ${user.name.last}`;
  row.appendChild(name);
  const country = document.createElement("td");
  country.innerHTML = user.location.country;
  row.appendChild(country);
  const postCode = document.createElement("td");
  postCode.innerHTML = user.location.postcode;
  row.appendChild(postCode);
  const date = document.createElement("td");

  date.innerHTML = new Date(user.dob.date).toDateString();
  row.appendChild(date);
  tableBody.appendChild(row);
};

// sort by last name

const sortByName = () => {
  const sorted = users.sort(function (a, b) {
    if (a.name.last < b.name.last) {
      return -1;
    }
    if (a.name.last > b.name.last) {
      return 1;
    }
    return 0;
  });
  tableBody.innerHTML = "";
  sorted.forEach((user) => displayUsers(user));
};

// sort by country

const sortByCountry = () => {
  const sorted = users.sort(function (a, b) {
    if (a.location.country < b.location.country) {
      return -1;
    }
    if (a.location.country > b.location.country) {
      return 1;
    }
    return 0;
  });
  tableBody.innerHTML = "";
  sorted.forEach((user) => displayUsers(user));
};

// sort by postal code

const sortByCode = () => {
  const sorted = users.sort(function (a, b) {
    if (a.location.postcode < b.location.postcode) {
      return -1;
    }
    if (a.location.postcode > b.location.postcode) {
      return 1;
    }
    return 0;
  });
  tableBody.innerHTML = "";
  sorted.forEach((user) => displayUsers(user));
};

// FILTER USERS

// const filterUser = (e) => {
//   const filterValue = e.target.value;
//   const filtered = users.filter((user) =>
//     user.name.first.toLowerCase().includes(filterValue)
//   );
//   tableBody.innerHTML = "";
//   filtered.forEach((user) => displayUsers(user));
// };

const filterUser = (e) => {
  const filterValue = e.target.value;
  const filtered = users.filter((user) => {
    let userInfo = `${user.name.first.toLowerCase()},
    ${user.name.last.toLowerCase()},
    ${user.location.country.toLowerCase()},
    ${user.location.postcode}`;
    return userInfo.includes(filterValue);
  });
  tableBody.innerHTML = "";
  filtered.forEach((user) => displayUsers(user));
};

// debounce;

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

input.addEventListener(
  "input",
  debounce(() => filterUser)
);

// events

console.log(users);
sortName.addEventListener("click", sortByName);
sortCountry.addEventListener("click", sortByCountry);
sortPostalCode.addEventListener("click", sortByCode);
input.addEventListener("input", filterUser);

getUsers();


// MENU ICONS

// •	on the left and right side of the header are menu icons
// •	if the user clicks on the left hamburger icon left drawer should open (drawer can be empty)
// •	if a user clicks on the right user icon right drawer should open (drawer can be empty)
// •	by clicking outside the drawer, the drawer is closed

const menuIcons = document.querySelectorAll(".icon-button");
const hamburgerMenu = menuIcons[0];
console.log(hamburgerMenu);
const userIcon = menuIcons[1];
console.log(userIcon);
const drawer = document.querySelectorAll(".drawer");
const drawerMenu = document.querySelector(".drawer--hamburger");
const drawerUser = document.querySelector(".drawer--user");

hamburgerMenu.addEventListener("click", () => {
  drawerMenu.style.display = "block";
});

userIcon.addEventListener("click", () => {
  drawerUser.style.display = "block";
});

let visible = false;

document.addEventListener("click", (event) => {
  console.log(event.target);
  if (!drawer.contains(event.target) && visible) {
    drawer.style.display = "none";
    visible = false;
  } else {
    visible = true;
  }
});

// RANDOM WORD

// selecting elements

const wordBtn = document.getElementById("generateWord");
const wordHolder = document.querySelector("#dictionary");
const wordTitle = wordHolder.querySelector("h1");
const wordDefinition = wordHolder.querySelector("p");
const audio = wordHolder.querySelector("audio");
const partOfSpeech = wordHolder.querySelector("h2");
const audioSource = audio.querySelector("source");
const phoneticsPlaceholder = wordHolder.querySelector("span");

const word_api = "https://api.api-ninjas.com/v1/randomword";
const api_def = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

const getRandomWord = async () => {
  try {
    const response = await fetch(word_api);
    const data = await response.json();
    const word = data.word;
    wordTitle.innerHTML = `Word: ${word}`;
    getDefinition(word);
  } catch (error) {
    console.log(error);
  }
};

const getDefinition = async (word) => {
  const response = await fetch(`${api_def}${word}`);
  const data = await response.json();
  try {
    const definitionData = data[0].meanings[0].definitions[0].definition;
    const speechData = data[0].meanings[0].partOfSpeech;
    wordDefinition.innerHTML = `Definition: ${definitionData}`;
    partOfSpeech.innerHTML = `Part of Speech: ${speechData}`;
    const phonetics = data[0].phonetics;

    if (phonetics.length === 0) {
      phoneticsPlaceholder.innerHTML = "Phonetics is not found";
    } else {
      audioSource.src = phonetics[0].audio;
      audio.load();
      audio.play();
      phoneticsPlaceholder.innerHTML = phonetics[0].text;
    }
  } catch (error) {
    wordDefinition.textContent = data.title;
  }
};

wordBtn.addEventListener("click", () => {
  getRandomWord();
});

// FOOTER

// When a user is scrolling down and the footer becomes visible, the background color of the content should change If he is scrolling up, the background color should also change
// •	if 25% of the footer is visible change the background color to #dfe1e6
// •	if 50% of the footer is visible change the background color to #7a869a
// •	if 90% of the footer is visible change the background color to #000000 Change font color accordingly so that users and word explainer are visible on dark background.


const footer = document.getElementById("footer");

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio <= 0.25) {
        document.querySelector("#footer").style.backgroundColor = "#dfe1e6";
      } else if (entry.intersectionRatio <= 0.5) {
        document.querySelector("#footer").style.backgroundColor = "#7a869a";
      } else if (entry.intersectionRatio <= 1) {
        document.querySelector("#footer").style.backgroundColor = "#000000";
      }
    });
  },
  { threshold: [1, 0.5, 0.25] }
);

observer.observe(footer);
