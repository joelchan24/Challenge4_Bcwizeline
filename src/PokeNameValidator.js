import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  /**
   * Component logic goes here
   */
  let [indexpokemon,setIndexPokemon]=useState(Math.floor(Math.random()*pokemons.length-1));
    let [pokemonName,setName]=useState('');
  const validation = (e) => {
    setName(e.target.value);
      let pokeName=e.target.value;
    
     // alert(pokemonName+"  90");
      if(pokeName===pokemons[indexpokemon]){
        alert("Correct! Play again?");
        setName('');
        setIndexPokemon(Math.floor(Math.random()*pokemons.length-1))
      }
      
   // console.log(pokemonName);
  };
  return (
      
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{pokemons[indexpokemon]}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input type="text" placeholder="Enter the Pokémon name" onChange={e=>validation(e)} value={pokemonName} />
    </div>
  );
}
