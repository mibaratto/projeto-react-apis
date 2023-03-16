import { Button } from "@chakra-ui/react";
import { PokemonCardContainer } from "./PokemonCardStyled";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../Routes/coordinator";
import { Box } from "@chakra-ui/react";

export function PokemonCard({pokemon, addToPokedex, removeFromPokedex}) {
    const navigate = useNavigate(pokemon.id)
    const location = useLocation()

    const backgroundColor = () => {
        switch (pokemon.types[0]) {
            case "grass": return "#729F92"
            case "fire": return "#EAAB7D"
            case "water": return "#71C3FF"
            case "bug": return "#76A866"
            case "normal": return "#BF9762"
            default: return "blue"
        }
    }

    return (
            <PokemonCardContainer>
                <Box bg={backgroundColor}>
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
                </Box>
                
            </PokemonCardContainer>
            
    )
}
