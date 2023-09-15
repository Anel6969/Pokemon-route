// Pokemons.js

import React from 'react';
import './App.css'; 
import AffichePokemons from './components/Pokemons/AffichePokemons';

const Pokemons = ({ pokemnoList }) => {
  return (
    <div className="app">
      {pokemnoList.map((pokemon, index) => (
        <div key={index} className="pokemon-card">
          <AffichePokemons
            name={pokemon.name}
            image={pokemon.image}
            abilities={pokemon.abilities}
          />
        </div>
      ))}
      <div className="extra-div">
        <h1>MES CARTES</h1>
        <p>Cégep de Trois Riviere - Programme Web Développement 2022-2024</p>
        <p>Anel Grebovic</p>
      </div>
    </div>
  );
};

export default Pokemons;
