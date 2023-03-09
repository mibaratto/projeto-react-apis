import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { PokemonListPageContainer } from "./PokemonListPageStyle";




export function PokemonListPage({pokemonList}) {
    
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