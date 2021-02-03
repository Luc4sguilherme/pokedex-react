const getPokemonImage = (sprites) => {
  if (sprites.other.dream_world.front_default !== null) {
    return sprites.other.dream_world.front_default
  } else if (sprites.other["official-artwork"].front_default !== null) {
    return sprites.other["official-artwork"].front_default
  } else {
    return sprites.front_default
  }
}

export default getPokemonImage