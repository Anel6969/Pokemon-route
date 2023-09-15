import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importez les composants de react-router-dom
import Pokemons from './Pokemons';
import Moltres from './img/Moltres.png';
import Alakazam from './img/Alakazam.png';
import Arcanine from './img/Arcanine.png';
import Articuno from './img/Articuno.png';
import Gyarados from './img/Gyarados.png';
import Kangaskhan from './img/Kangaskhan.png';
import Persian from './img/Persian.png';
import Raichu from './img/Raichu.png';
import Rapidash from './img/Rapidash.png';
import Rattata from './img/Rattata.png';

const App = () => {
  const imgMoltres = Moltres;
  const imgAlakazam = Alakazam;
  const imgArcanine = Arcanine;
  const imgArticuno = Articuno;
  const imgGyarados = Gyarados;
  const imgKangaskhan = Kangaskhan;
  const imgPersian = Persian;
  const imgRaichu = Raichu;
  const imgRapidash = Rapidash;
  const imgRattata = Rattata;

  const pokemnoList = [
    {
      name: 'Moltres',
      image: imgMoltres,
      abilities: ['Pressure', 'Berserk', 'Flame Body'],
    },
    {
      name: 'Alakazam',
      image: imgAlakazam,
      abilities: ['Synchronize', ' Inner Focus' , 'Magic Guard'],
    },
    {
      name: 'Arcanine',
      image: imgArcanine,
      abilities: ['Intimidate', 'Flash Fire' , 'Justified'],
    },
    {
      name: 'Articuno',
      image: imgArticuno,
      abilities: ['Pressure', 'Competitive', 'Snow Cloak'],
    },
    {
      name: 'Gyarados',
      image: imgGyarados,
      abilities: ['Intimidate', 'Moxie' , 'Mold Breaker'],
    },
    {
      name: 'Kangaskhan',
      image: imgKangaskhan,
      abilities: ['Early Bird', 'ScrappyGen IV', 'Inner Focus'],
    },
    {
      name: 'Persian',
      image: imgPersian,
      abilities: ['Limber', ' TechnicianGen IV+' , 'Fur Coat'],
    },
    {
      name: 'Raichu',
      image: imgRaichu,
      abilities: ['Static', 'Surge Surfer' , 'MLightning Rod'],
    },
    {//
      name: 'Rapidash',
      image: imgRapidash,
      abilities: ['Run Away', 'Flash Fire' , 'Pastel Veil'],
    },
    {
      name: 'Rattata',
      image: imgRattata,
      abilities: ['Run Away', 'Gluttony' , 'Thick Fat'],
    },
    
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokemons pokemnoList={pokemnoList} />} />
       
      </Routes>
    </Router>
  );
}

export default App;
