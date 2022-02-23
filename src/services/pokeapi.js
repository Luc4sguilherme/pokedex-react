export async function getPokemons(limit, offset) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();

  return data;
}

export async function getPokemon(url) {
  const response = await fetch(url);
  const pokemon = await response.json();

  return pokemon;
}
