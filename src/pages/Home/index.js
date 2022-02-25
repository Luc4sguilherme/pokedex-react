import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "../../components/card";
import { getPokemon, getPokemons } from "../../services/pokeapi";

import "./style.css";

const amountOfPoKemons = 1126;
const limit = 50;

function Home() {
  let [gridColumnCount, setGridColumnCount] = useState(1);
  let [pokemons, setPokemons] = useState([]);
  let [offset, setOffset] = useState(0);
  let [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (pokemons.length >= amountOfPoKemons) {
      setHasMore(false);
      return;
    }

    getPokemons(limit, offset).then(({ results }) => {
      Promise.all(results.map((data) => getPokemon(data.name))).then(
        (pokemon) => {
          setPokemons([...pokemons, ...pokemon]);
        }
      );
    });

    setOffset(offset + limit);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  useEffect(() => {
    const grid = document.querySelector(".pokedex");
    const gridComputedStyle = window.getComputedStyle(grid);
    const gridColumn = gridComputedStyle
      .getPropertyValue("grid-template-columns")
      .split(" ");
    setGridColumnCount(gridColumn.length);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Pokédex</h1>
      <InfiniteScroll
        className="pokedex"
        dataLength={pokemons.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div
            style={{
              gridColumn: `span ${gridColumnCount}`,
              justifySelf: "center",
              padding: "15px",
            }}
          >
            <div className="loader"></div>
          </div>
        }
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

export default Home;
