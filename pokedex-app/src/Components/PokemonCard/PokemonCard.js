import { Button, HStack, Image, Stack, Text, Box, VStack } from "@chakra-ui/react";
import { PokemonCardContainer } from "./PokemonCardStyled";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../Routes/coordinator";
import  bug  from "../../assets/bug.png"
import  fire  from "../../assets/fire.png"
import  water  from "../../assets/water.png"
import  grass  from "../../assets/grass.png"
import  normal  from "../../assets/normal.png"
import  poison  from "../../assets/poison.png"
import  flying  from "../../assets/flying.png"
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

    const renderImage = (tipo) => {
        switch (tipo) {
            case "grass": return grass;
            case "fire": return fire;
            case "water": return water;
            case 'bug': return bug;
            case "normal": return normal;
            case "poison": return poison;
            case "flying": return flying;

            default: return "not found"
        }
    }


    return (
        <Flex direction="column" pos="relative" borderRadius="10px" minW="260px" minH="150px" bg={backgroundColor} m="20px" p="12px">
            <VStack align='stretch'>
            <HStack align="left" color="white">
                <Stack direction="column">
                    <Stack spacing={0} >
                        <Text fontSize='sm'>{`#0${pokemon.id}`}</Text>
                        <Text fontSize='lg'as='b' textTransform="capitalize">{pokemon.name}</Text>
                    </Stack>
                    <HStack>
                            {pokemon.types.map((tipo) => {
                                return (
                                    <Image src={renderImage(tipo)}  w="60px" />
                                )                                
                             })
                            }
                    </HStack>                    
                </Stack>
                <Spacer/>
                <Stack position="absolute" top="-8" right="0" >
                    <Image src={pokemon.image} alt=""  h="120px" mr="12px"></Image>
                </Stack>
            </HStack>
            
            <Spacer />
           
            <HStack>
                <Stack >
                    <Button onClick={() => goToPokemonDetailPage(navigate, pokemon.id)} variant='link' color="white" as='u'>Detalhes</Button>  
                </Stack> 
                <Spacer/>
                <Stack>
                    {location.pathname === "/" ? (
                    <Button onClick={() => addToPokedex(pokemon)} size="sm" w="100px">Capturar!</Button>
                        ) : (
                    <Button onClick={() => removeFromPokedex(pokemon)} size="sm" >Remove Pokedex</Button>
                        )}
                </Stack>        
            </HStack>
            </VStack>
        </Flex>
        )
}
