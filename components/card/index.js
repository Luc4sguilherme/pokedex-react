import React from 'react';

import './styles.css'
import getPokemonImage from '../../utils/getPokemonImage'

function card(props) {
  const elementTypes = props.types.map(typesInfo => typesInfo.type.name)

  return (
    <div className={`card ${elementTypes[0]}`}>
      <img className="card-image" src={`${getPokemonImage(props.sprites)}`} alt={`${props.name}`}/>
      <h2 className="card-title">{`${props.id}. ${props.name}`}</h2>
      <p className="card-subtitle">{`${elementTypes.join(' | ')}`}</p>
    </div>
  );
}

export default card;