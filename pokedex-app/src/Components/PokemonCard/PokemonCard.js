import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { PokemonCardContainer } from "./PokemonCardStyled";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../Routes/coordinator";
import { Box } from "@chakra-ui/react";
import bug from "../../assets/bug.png"
import grass from "../../assets/grass.png";
import fire from "../../assets/fire.png";
import water from "../../assets/water.png";
import normal from "../../assets/normal.png";
import logo from "../../assets/logo.png";

import { Flex, Spacer } from '@chakra-ui/react'


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

    // const tagTipe = () => {
    //     switch (pokemon.types[0]) {
    //         case "grass": return grass;
    //         case "fire": return fire;
    //         case "water": return water;
    //         case "bug": return bug;
    //         case "normal": return normal;
    //         default: return "not found"
    //     }
    // }

    console.log("tag" , grass, "bug", bug)

    return (
        <Flex  m="10px" direction="column" pos="relative" border="1px">
            <Box  bg="red" opacity="0.0">1</Box>
            <Box flexGrow={1}>
            <HStack bg={backgroundColor} alignItems="baseline">
                <Stack border="1px" ml="8px" >
                    <Text as="p">{pokemon.id}</Text>
                    <Text>{pokemon.name}</Text>
                    <img src="" alt="tipo pokemon"/>
                    
                </Stack>
                <Spacer/>
                <Stack border="1px" position="absolute" top="0" right="0" >
                    <Image src={pokemon.image} alt=""  boxSize='100px' mr="12px"></Image>
                </Stack>
            </HStack>
            </Box>
            <HStack  bg={backgroundColor}>
                <Stack>
                    {location.pathname === "/" ? (
                    <Button onClick={() => addToPokedex(pokemon)} >Adiciona Pokedex</Button>
                        ) : (
                    <Button onClick={() => removeFromPokedex(pokemon)} >Remove Pokedex</Button>
                        )}
                </Stack>
                    <Spacer/>
                <Stack>
                    <Button onClick={() => goToPokemonDetailPage(navigate, pokemon.id)} >Detalhe</Button>  
                </Stack>        
            </HStack>
        </Flex>


                )
}
