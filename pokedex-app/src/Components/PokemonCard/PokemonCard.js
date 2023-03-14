import { Button } from "@chakra-ui/react";
import { PokemonCardContainer } from "./PokemonCardStyled";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../Routes/coordinator";


export function PokemonCard({name, id}) {
    const navigate = useNavigate(id)

    return (
            <PokemonCardContainer>
                <img src="https://picsum.photos/200" alt=""></img>
                <h1>{name}</h1>
                <Button onClick={() => goToPokemonDetailPage(navigate, id)} >Detalhe</Button>
            </PokemonCardContainer>
            
    )
}
