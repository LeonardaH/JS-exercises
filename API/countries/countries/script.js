// Explore this site https://restcountries.com/ .

// There we have our API for this exercise.
// You assignment is to to list all the countries in a dropdown container (select with options).
// Extra assignments:
// - Select a country from the dropdown and list the following data about the chosen one:

// Flag (image)
// Capital
// Population
// Region

// selecting elements

const dropdown = document.getElementById("dropdown");
const api = "https://restcountries.com/v2/all";
const placeholder = document.querySelector(".placeholder");

// get countries

const getCountries = async () => {
  const response = await fetch(api);
  const data = await response.json();
  data.forEach((elem) => {
    createDropdown(elem);
  });
};

const createDropdown = (elem) => {
  const option = `
        <option value="${elem.name}">${elem.name}</option>
    `;
  dropdown.insertAdjacentHTML("beforeend", option);
};

const getSingleCountry = async (e) => {
  try {
    const id = e.target.value;
    console.log(id);
    const singleResponse = await fetch(
      `https://restcountries.com/v3.1/name/${id}`
    );
    console.log(singleResponse);
    const singleData = await singleResponse.json();
    console.log(singleData);
    singleData.forEach((country) => {
      reset();
      showSingleCountry(country);
    });
  } catch (error) {
    console.log(error);
  }
};

const showSingleCountry = (country) => {
  let template = `
        <h1>${country.capital[0]}</h1>
        <p>${country.population}</p>
        <p>${country.region}</p>
        <img src="${country.flags.png}"></img>
    `;
  placeholder.insertAdjacentHTML("beforeend", template);
};

const reset = () => {
  placeholder.innerHTML = "";
};

dropdown.addEventListener("click", getCountries);
dropdown.addEventListener("change", getSingleCountry);
