// Create a random Pokemon generator app using pokeApi (https://pokeapi.co/api/v2/pokemon/)

// You can take a look at the documentation on this link: https://pokeapi.co/
// On each page refresh the function triggers the printing of the name of a Pokemon.

// Extra assignments:
// - Add a button to generate a random Pokemon
// - Add the image of the Pokemon, his type and id

// Extra extra assignment:
// - Add evolution chains of each generated Pokemon if he has any

// selecting elements

let name = document.getElementById("name");
let type = document.getElementById("type");
const image = document.querySelector("img");
const id = document.getElementById("id");
const button = document.getElementById("btn");
const evolves = document.getElementById("evolves");

async function getPokemon() {
  const randomPokemon = Math.floor(Math.random() * 906);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
  );
  const data = await response.json();
  reset();
  createPokemon(data);
  getEvolution(randomPokemon);
}

// getPokemon();

function createPokemon(data) {
  name.textContent = `Name: ${data.name}`;
  image.src = data.sprites.front_default;
  id.textContent = `Id: ${data.id}`;
  type.textContent = `Type: ${data.species.name}`;
}

button.addEventListener("click", getPokemon);

async function getEvolution(randomPokemon) {
  try {
    const evolutionResponse = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${randomPokemon}`
    );
    const evolutionData = await evolutionResponse.json();
    const evolutionArray = evolutionData.chain.evolves_to;
    console.log(evolutionArray);
    if (evolutionArray.length === 0) {
      evolves.textContent = "Evolves: -";
    } else {
      evolves.textContent = `Evolves: ${evolutionArray[0].species.name}`;
    }
  } catch (err) {
    console.log(err);
    evolves.textContent = "Evolves: -";
  }
}

function reset() {
  name.textContent = "";
  type.textContent = "";
  image.textContent = "";
  id.textContent = "id";
  evolves.textContent = "evolves";
}
