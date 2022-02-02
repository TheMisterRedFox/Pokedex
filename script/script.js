const searchPokemonById = (id) => {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].id === id) {
      console.log(pokemons[i]);
      return pokemons[i];
    }
  }
};

const uppercaseFirstLetter = (pokemonName) => {
  return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
};

const displayPokmon = (pokemon) => {
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
  const searchedId = parseInt(document.querySelector("#search-input").value);
  const pokemon = searchPokemonById(searchedId);
  displayPokmon(pokemon);
};

const noSubmitProblem = (event) => {
  event.preventDefault();
};

const main = () => {
  const form = document.querySelector("form");
  form.addEventListener("input", handleNumberSearch);
  form.addEventListener("submit", noSubmitProblem);

  const pokeball = document.querySelector("form img");
  pokeball.addEventListener("click", handleNumberSearch);
};

main();
