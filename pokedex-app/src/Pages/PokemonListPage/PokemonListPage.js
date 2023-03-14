import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { PokemonListPageContainer } from "./PokemonListPageStyle";
import axios from "axios";
import { useEffect, useState } from "react";


export function PokemonListPage() {

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
            <PokemonListPageContainer>
                <main>
                    {pokemonList.map((pokemon, index)=> {
                        return (
                            <PokemonCard
                            key={index}
                            name={pokemon.name}
                            />
                        )
                    })}

                </main>
            </PokemonListPageContainer>
                        
    )
}