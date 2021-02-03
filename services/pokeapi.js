const getPokemon =  (limit, offset) => fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(response => response.json())

export default getPokemon
