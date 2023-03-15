import { PokedexListPageContainer } from "./PokedexPageStyle"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"


export function PokedexPage({pokedexList, removeFromPokedex}) {

    return (
        <PokedexListPageContainer>
            <main>
                {pokedexList.map((pokemon, index)=> {
                    return (
                        <PokemonCard
                        key={index}
                        pokemon={pokemon}
                        removeFromPokedex={removeFromPokedex}
                        // removeToPokedex={removeToPokedex}
                        // nao tenho o id nessa chamada
                        />
                    )
                })}

            </main>
        </PokedexListPageContainer>
                    
)
}