import logo from './logo.svg';
import './App.css';
import PokemonCard from './components/PokemonCard';
import React, { useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => {
        const pokemonWithTypes = data.results.map((pokemon, index) => ({
          ...pokemon,
          type: getPokemonType(index + 1),
        }));
        setPokemon(pokemonWithTypes);
      });
  }, []);

  const getPokemonType = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      const types = data.types.map((type) => type.type.name);
      return types;
    } catch (error) {
      console.error('Error fetching Pokemon type:', error);
    }
  };

  return (
    <div className="App">
      <ul className="pokemon-grid">
        {pokemon.map((pokemon, index) => (
          <li key={index} className="pokemon-card">
            <PokemonCard pokemon={pokemon} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;











//////////////
// import logo from './logo.svg';
// import './App.css';
// import PokemonCard from './components/PokemonCard';
// import React, { useState } from "react";
// import { useEffect } from "react";

// function App() {

//     const [pokemon, setPokemon] = useState([]);

//     const [types, setTypes] = useState(null);

    
  
//     // useEffect(() => {
//     //   fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
//     //     .then((response) => response.json())
//     //     .then((data) => setPokemon(data.results));
      
      
      

//     // }, []);



//     useEffect(() => {
//       fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
//         .then((response) => response.json())
//         .then((data) => setPokemon(data.results));

      

  

//     }, []);

//     console.log(types)

//   return (
//     <div className="App">
//       <ul className="pokemon-grid">
//       {pokemon.map((pokemon,index) => (
//         <ul key={index} className='pokemon-card'>
//           <PokemonCard pokemon = {pokemon} index = {index} />
//         </ul>
//               ))}

//         </ul>
//     </div>
//   );
// }

// export default App;
