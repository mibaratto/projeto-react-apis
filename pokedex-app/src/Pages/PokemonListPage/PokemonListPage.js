import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { PokemonListPageContainer } from "./PokemonListPageStyle";



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
                            />
                        )
                    })}

                </main>
            </PokemonListPageContainer>
                        
    )
}