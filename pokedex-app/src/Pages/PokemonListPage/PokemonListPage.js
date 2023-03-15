import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { PokemonListPageContainer } from "./PokemonListPageStyle";
import axios from "axios";
import { useEffect, useState } from "react";


export function PokemonListPage({pokemonList, addToPokedex, pokedexList}) {
  
    return (
            <PokemonListPageContainer>
                <main>
                    {pokemonList
                    .filter((pokemonInList) => !pokedexList.find((pokemonInPokedex) => 
                        pokemonInList.name === pokemonInPokedex.name))   
                    .map((pokemon, index)=> {
                        return (
                            <PokemonCard
                            key={index}
                            pokemon={pokemon}
                            addToPokedex={addToPokedex}
                            // nao tenho o id nessa chamada
                            />
                        )
                    })}

                </main>
            </PokemonListPageContainer>
                        
    )
}