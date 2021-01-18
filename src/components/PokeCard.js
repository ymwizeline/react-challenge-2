import React, { useState } from "react";
import { mockPokemonData } from "../mock/pokeData";
const { name, sprites, video } = mockPokemonData;

const PokeCard = () => {
  const [showShiny, setShowShiny] = useState(false);
  const imageToSee = showShiny ? "default" : "shiny";
  const imageLink = showShiny ? sprites.front_shiny : sprites.front_default;

  const handleButton = () => setShowShiny(!showShiny);

  return (
    <div className="poke-card">
      <h1>{name}</h1>
      <button onClick={handleButton}>Switch to {imageToSee} image</button>
      <div className="image-container">
        <img src={imageLink} alt="pokePic" />
      </div>
      <a href={video}>See video</a>
    </div>
  );
};

export default PokeCard;
