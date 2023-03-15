
import { useParams } from "react-router";
import { PokemonDetailContainer } from "./PokemonDetailPageStyle";


export function PokemonDetailPage({pokemonList}) {
    const { id } = useParams()

    const pokemonDetalhe = pokemonList.find(pokemon => pokemon.id === Number(id))

    return (
            <PokemonDetailContainer>

                <img src={pokemonDetalhe.image} alt=""></img>
                <h1>{pokemonDetalhe.name}</h1>
                <h1>{pokemonDetalhe.id}</h1>
                <h1>{pokemonDetalhe.types}</h1>
            </PokemonDetailContainer>
            
    )
}
