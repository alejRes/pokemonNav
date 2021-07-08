import React, {useState} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { pokeContext } from './context/pokeContext';
import Main from './components/Main/Main'
import Header from './components/Header/Header'

const App = ()=> {
  const [pokelist, setPokeList] = useState([])

  const pushPokemon = (pokemon)=> setPokeList([...pokelist,pokemon])
 
  const value = {
    List: pokelist,
    insertPokemon: pushPokemon
  }

  return (
    <div className="App">
      <BrowserRouter>
        <pokeContext.Provider value={value}>
          <Header/>
          <Main/>
        </pokeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App