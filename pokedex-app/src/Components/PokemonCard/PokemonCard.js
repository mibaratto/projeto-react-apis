import { PokemonCardContainer } from "./PokemonCardStyled";


export function PokemonCard({name}) {
    return (
            <PokemonCardContainer>
                <img src="https://picsum.photos/200" alt=""></img>
                <h1>{name}</h1>
            </PokemonCardContainer>
            
    )
}
