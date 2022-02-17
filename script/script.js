const searchPokemonById = (id) => {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].id === id) {
      return pokemons[i];
    }
  }
};

const uppercaseFirstLetter = (pokemonName) => {
  return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
};

manageInputs = (pokemon) => {
  const searchedId = document.querySelector("#search-number");
  searchedId.value = pokemon.id;
  const searchedName = document.querySelector("#search-input");
  searchedName.value = uppercaseFirstLetter(pokemon.name);
  const searched = document.querySelector("#search-all");
  searched.value = uppercaseFirstLetter(pokemon.name);
};

const displayPokemon = (pokemon) => {
  const pokemonPicture = document.querySelector("#pokemon-img");
  pokemonPicture.src = pokemon.picture;

  const pokemonId = document.querySelector("#pokemon-id");
  pokemonId.innerText = "#" + pokemon.id.toString().padStart(3, "0");

  const pokemonName = document.querySelector("#pokemon-name");
  pokemonName.innerText = uppercaseFirstLetter(pokemon.name);

  const pokemonHeight = document.querySelector("#pokemon-height span");
  pokemonHeight.innerText = pokemon.height / 10 + "m";

  const pokemonWeight = document.querySelector("#pokemon-weight span");
  pokemonWeight.innerText = pokemon.weight / 10 + "kg";

  const screen = document.querySelector("#screen");
  const backgroundColor = colors[pokemon.type.name];
  screen.style = `background-color: ${backgroundColor}`;
};

const handleNumberSearch = (event) => {
  const searchedId = parseInt(document.querySelector("#search-number").value);
  const pokemon = searchPokemonById(searchedId);
  displayPokemon(pokemon);
  manageInputs(pokemon);
};

const noSubmitProblem = (event) => {
  event.preventDefault();
};

const searchPokemonByName = (pokemon) => {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name === pokemon) {
      return pokemons[i];
    }
  }
};

const displayNotFound = () => {
  const pokemonNotFound = {
    id: "0",
    name: "?????",
    type: { name: "notfound" },
    height: 0,
    weight: 0,
    picture: "../assets/images/not-found.png",
  };
  displayPokemon(pokemonNotFound);
  manageInputs(pokemonNotFound);
};

const handleNameSearch = () => {
  const searchedName = document
    .querySelector("#search-input")
    .value.toLowerCase();
  const pokemon = searchPokemonByName(searchedName);

  if (pokemon === undefined) {
    return displayNotFound();
  }

  displayPokemon(pokemon);
  manageInputs(pokemon);
};

const handleSearch = () => {
  let searchedThing = document.querySelector("#search-all").value.toLowerCase();
  let pokemon;

  if (isNaN(searchedThing) == true) {
    pokemon = searchPokemonByName(searchedThing);

    if (pokemon === undefined) {
      return displayNotFound();
    }
  } else if (isNaN(searchedThing) === false) {
    searchedThing = parseInt(
      document.querySelector("#search-all").value.toLowerCase()
    );
    pokemon = searchPokemonById(searchedThing);
    console.log(pokemon);
  }

  displayPokemon(pokemon);
  manageInputs(pokemon);
};

const main = () => {
  const form = document.querySelector("#numberForm");
  form.addEventListener("input", handleNumberSearch);
  form.addEventListener("submit", noSubmitProblem);

  const pokeball = document.querySelector("#firstPokeball");
  pokeball.addEventListener("click", handleNameSearch);

  const thirdPokeball = document.querySelector("#thirdPokeball");
  thirdPokeball.addEventListener("click", handleSearch);
};

main();
