import React, { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import './App.css';
import Card from './components/card'
import getPokemon from './services/pokeapi'

function App() {
  const amountOfPoKemons = 1118
  const limit = 50

  let [pokemons, setPokemons] = useState([])
  let [offset, setOffset] = useState(0)
  let [hasMore, setHasMore] = useState(true)

  const fetchMoreData = () => {
    if (pokemons.length >= amountOfPoKemons) {
      setHasMore(false);
      return;
    }

    getPokemon(limit, offset).then(({ results }) => {
      Promise.all(results.map(async data => {
        const response = await fetch(`${data.url}`)
        const pokemon = await response.json()
        return pokemon
      })).then(pokemon => {
        setPokemons([...pokemons, ...pokemon]) 
      })
    })

    setOffset(offset + limit)
  }

  useEffect(()=> {
    fetchMoreData()
  }, [])

  return (
    <div className="container">
      <h1>Pokédex</h1>
      <InfiniteScroll 
        className="pokedex"
        dataLength={pokemons.length}
        next={fetchMoreData}  
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id} 
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            sprites={pokemon.sprites}
          />
        ))}
      </InfiniteScroll>  
    </div>
  );
}

export default App;
