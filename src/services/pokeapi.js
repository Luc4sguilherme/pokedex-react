const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemons(limit, offset) {
  const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
  const data = await response.json();

  return data;
}

export async function getPokemon(name) {
  const response = await fetch(`${BASE_URL}/${name}`);
  const pokemon = await response.json();

  return pokemon;
}
