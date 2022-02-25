import React from "react";
import { useNavigate } from "react-router-dom";

import getPokemonImage from "../../utils/getPokemonImage";

import "./styles.css";

function Card(props) {
  const navigate = useNavigate();
  const elementTypes = props.types.map((typesInfo) => typesInfo.type.name);

  return (
    <div
      className={`card ${elementTypes[0]}`}
      onClick={() => navigate(`/pokemon/${props.name}`)}
    >
      <img
        className="card-image"
        src={`${getPokemonImage(props.sprites)}`}
        alt={`${props.name}`}
      />
      <h2 className="card-title">{`${props.id}. ${props.name}`}</h2>
      <p className="card-subtitle">{`${elementTypes.join(" | ")}`}</p>
    </div>
  );
}

export default Card;
