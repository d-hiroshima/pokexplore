import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";

// Components
import Header from './components/parts/Header'
import PokemonList from './components/pokemonList'
import PokemonDetail from './components/pokemonDetail'

import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header />
      <PokemonList />
      {/* <PokemonDetail /> */}
    </div>
  );
}

export default App;
