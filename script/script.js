const searchPokemonById = (id) => {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].id === id) {
      console.log(pokemons[i]);
      return pokemon[i];
    }
  }
};

const handleNumberSearch = (event) => {
  event.preventDefault();
  const searchedId = parseInt(document.querySelector("#search-input").value);
  const pokemon = searchPokemonById(searchedId);
};

const main = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleNumberSearch);

  const pokeball = document.querySelector("form img");
  pokeball.addEventListener("click", handleNumberSearch);
};

main();
