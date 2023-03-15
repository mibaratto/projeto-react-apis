import { Button } from '@chakra-ui/react';
import { HeaderStyled } from "./HeaderStyle";
import logo from "../../assets/logo.png";
import { goToPokedexPage, goToPokemonListPage } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";


export const Header = () => {
    const navigate = useNavigate()

    return (
        <HeaderStyled>
            <Button onClick={() => goToPokemonListPage(navigate)} variant='header'>Lista</Button>
            <img src={logo} alt="logo do Pokemon"/>
            <Button onClick={() => goToPokedexPage(navigate)} variant='header'>Pokédex</Button>
        </HeaderStyled>
    )  
}