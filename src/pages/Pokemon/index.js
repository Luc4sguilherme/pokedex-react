import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getPokemon } from "../../services/pokeapi";
import getPokemonImage from "../../utils/getPokemonImage";

import "./style.css";

function Pokemon() {
  const { name: PokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const { id, weight, height, name, types, stats, sprites } = await getPokemon(PokemonName);

      setPokemon({
        sprite: getPokemonImage(sprites),
        id,
        weight,
        height,
        name,
        types,
        stats,
      });
    }

    fetchData();
  }, [PokemonName]);

  return (
    <>
      {pokemon && (
        <div className="pokemon-container">
          <div className="pokemon-wrapper">
            <div className="pokemon-wrapper-top">
              <h1 className="pokemon-name">
                {pokemon.name}
                <span> Nº{String(pokemon.id).padStart(3, 0)}</span>
              </h1>
              <button className="back-btn" onClick={() => navigate("/")}>
                <svg
                  width="13px"
                  height="20px"
                  viewBox="0 0 13 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Outlined"
                      transform="translate(-581.000000, -3434.000000)"
                    >
                      <g
                        id="Navigation"
                        transform="translate(100.000000, 3378.000000)"
                      >
                        <g
                          id="Outlined-/-Navigation-/-arrow_back_ios"
                          transform="translate(476.000000, 54.000000)"
                        >
                          <g>
                            <polygon
                              id="Path"
                              opacity="0.87"
                              points="0 0 24 0 24 24 0 24"
                            />
                            <polygon
                              id="🔹-Icon-Color"
                              fill="#1D1D1D"
                              points="17.51 3.87 15.73 2.1 5.84 12 15.74 21.9 17.51 20.13 9.38 12"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            <img
              className="pokemon-image"
              src={`${pokemon.sprite}`}
              alt={`${pokemon.name}`}
            />
            <div className="pokemon-infos">
              <div className="pokemon-types">
                Types:
                {pokemon.types.map(({ type }) => (
                  <div id="pokemon-type" className={`${type.name}`}>
                    {type.name}
                  </div>
                ))}
              </div>

              <div>
                Weight: <span>{pokemon.weight / 10} kg</span>
              </div>
              <div>
                Height: <span>{pokemon.height / 10} m</span>
              </div>

              {pokemon.stats.map(({ base_stat, stat }) => {
                const { name } = stat;

                return (
                  <div className="pokemon-stats" key={name}>
                    {name}: <span>{base_stat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Pokemon;
