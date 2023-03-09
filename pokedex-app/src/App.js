import { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";
import { PokemonListPage } from "./Pages/PokemonListPage/PokemonListPage";
import axios from "axios";

function App() {
  const [pokemonList, setPokemonList] = useState([])

  const getPokemonList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setPokemonList(response.data.results)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  useEffect(()=> {
    getPokemonList()
  }, [])

  console.log(pokemonList)


  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <PokemonListPage
      pokemonList={pokemonList}/>
    </div>
  );
}

export default App;
