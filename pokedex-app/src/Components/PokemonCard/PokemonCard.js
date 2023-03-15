import { Button } from "@chakra-ui/react";
import { PokemonCardContainer } from "./PokemonCardStyled";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../Routes/coordinator";


export function PokemonCard({pokemon, addToPokedex, removeFromPokedex}) {
    const navigate = useNavigate(pokemon.id)
    const location = useLocation()


    return (
            <PokemonCardContainer>
                <img src={pokemon.image} alt=""></img>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.id}</h1>
                <h1>{pokemon.types}</h1>
                <div>
                    {location.pathname === "/" ? (
                        <Button onClick={() => addToPokedex(pokemon)} >Adiciona Pokedex</Button>
                    ) : (
                        <Button onClick={() => removeFromPokedex(pokemon)} >Remove Pokedex</Button>
                    )}
                </div>   
                <Button onClick={() => goToPokemonDetailPage(navigate, pokemon.id)} >Detalhe</Button>
            </PokemonCardContainer>
            
    )
}
