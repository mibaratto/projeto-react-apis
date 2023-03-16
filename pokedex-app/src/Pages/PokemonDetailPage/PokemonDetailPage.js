
import { useParams } from "react-router";
import { PokemonDetailContainer } from "./PokemonDetailPageStyle";


export function PokemonDetailPage({pokemonList}) {
    const { id } = useParams()

    const pokemonDetalhe = pokemonList.find(pokemon => pokemon.id === Number(id))
    const movesMaped = pokemonDetalhe.moves
        .slice(0, 7)
        .map((move) => (<p>{move}</p>))

    const baseStasNameMaped = pokemonDetalhe.baseStats.map((baseStat) => (<p>{baseStat.name}</p>))
    const baseStasBaseStasMaped = pokemonDetalhe.baseStats.map((baseStat) => (<p>{baseStat.baseStat}</p>))



    // console.log("movesmovesMaped", movesMaped)
    // console.log("moves", pokemonDetalhe.moves )

    return (
            <PokemonDetailContainer>
                <img src={pokemonDetalhe.image} alt="pokemon"></img>
                <img src={pokemonDetalhe.spritesFront} alt="pokemon"></img>
                <img src={pokemonDetalhe.spritesBack} alt="pokemon"></img>
                <>{pokemonDetalhe.name}</>
                <>{pokemonDetalhe.id}</>
                <>{pokemonDetalhe.types}</>
                <>{movesMaped}</>
                <div>
                    {baseStasNameMaped}
                </div>
                <div>
                    {baseStasBaseStasMaped}
                </div>

            </PokemonDetailContainer>
            
    )
}
