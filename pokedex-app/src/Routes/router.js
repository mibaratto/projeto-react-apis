import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonDetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage";
import { PokemonListPage } from "../Pages/PokemonListPage/PokemonListPage"
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage"
import { Header } from "../Components/Header/Header"
import axios from "axios";
import { useEffect, useState } from "react";


 export const Router = () => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokedexList, setPokedexList] = useState([])

    const getPokemonList = async () => {
      const nameUrlResponse = await axios.get("https://pokeapi.co/api/v2/pokemon")
      const namesAndUrls = nameUrlResponse.data.results 

      const pokemons = []
      for (let i = 0; i < namesAndUrls.length; i++) {        
        const pokemonResponse = await axios.get(namesAndUrls[i].url)
        const tipos = pokemonResponse.data.types.map((cadaTipo) => {
          return cadaTipo.type.name
        }) 

        const pokemon = { 
          name: pokemonResponse.data.name,
          image: pokemonResponse.data.sprites.other["dream_world"]["front_default"],
          id: pokemonResponse.data.id,
          types: tipos
        }
        pokemons.push(pokemon)
      }
      console.log("pokemons", pokemons)
      setPokemonList(pokemons)
    }

    useEffect(()=> {
        getPokemonList()
    }, [])

  const addToPokedex = (pokemon) => {
    const newPokedexList = [...pokedexList, pokemon ]
    setPokedexList(newPokedexList);
  }

  const removeFromPokedex = (pokemon) => {
    const newPokedexList = pokedexList.filter(pokemonInPokedex => {
      return pokemon !== pokemonInPokedex
    })
    setPokedexList(newPokedexList)
  }


  console.log(" NOVA Pokedex", pokedexList)


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route 
                path="/" 
                element={
                <PokemonListPage
                pokemonList={pokemonList}
                addToPokedex={addToPokedex}
                pokedexList={pokedexList}

                 />}/>
                <Route 
                path="/pokedex" 
                element={
                <PokedexPage
                pokedexList={pokedexList}
                removeFromPokedex={removeFromPokedex}
                />}/>
                <Route 
                path="/detail/:id" 
                element={
                <PokemonDetailPage

                 />}/>
            </Routes>
        </BrowserRouter>
    )
 }