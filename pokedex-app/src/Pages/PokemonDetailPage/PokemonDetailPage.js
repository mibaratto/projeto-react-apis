
import { Container, Flex, HStack, Image, Progress, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router";
import { PokemonDetailContainer } from "./PokemonDetailPageStyle";


export function PokemonDetailPage({pokemonList}) {
    const { id } = useParams()

    const pokemonDetalhe = pokemonList.find(pokemon => pokemon.id === Number(id))
    const movesMaped = pokemonDetalhe.moves
        .slice(0, 7)
        .map((move) => (<p>{move}</p>))

    const baseStasNameMaped = pokemonDetalhe.baseStats.map((baseStat) => (<p>{baseStat.name}</p>))
    const baseStasBaseStasMaped = pokemonDetalhe.baseStats.map((baseStat) => (<Progress value={baseStat.baseStat}/>))

    const backgroundColor = () => {
        switch (pokemonDetalhe.types[0]) {
            case "grass": return "#729F92"
            case "fire": return "#EAAB7D"
            case "water": return "#71C3FF"
            case "bug": return "#76A866"
            case "normal": return "#BF9762"
            default: return "blue"
        }
    }


    // console.log("movesmovesMaped", movesMaped)
    // console.log("moves", pokemonDetalhe.moves )

    return (
                <Flex  justify="space-between"  size="fit-content" bg={backgroundColor}  m="5vh" borderRadius="30px" p="48px" maxW="70vw">
                    <VStack>
                        <Stack  bg="white" p="50px" borderRadius="16px">
                            <Image src={pokemonDetalhe.spritesFront} alt="pokemon"/>
                        </Stack>
                        <Spacer/>
                        <Stack  bg="white" p="50px" borderRadius="16px">
                            <Image src={pokemonDetalhe.spritesBack} alt="pokemon" />
                        </Stack>
                    </VStack>
                    <VStack align='stretch' bg="white" borderRadius="16px">
                        <HStack align='stretch' p="16px" >
                            <Stack >
                                {baseStasNameMaped}
                            </Stack>
                            <Stack minW="150px">
                                {baseStasBaseStasMaped}
                            </Stack>
                        </HStack>
                    </VStack >
                    <VStack    align="letf">
                        <Stack spacing={0}>
                            <Text fontSize='lg'>{`#0${pokemonDetalhe.id}`}</Text>
                            <Text fontSize='lg'as='b' textTransform="capitalize">{pokemonDetalhe.name}</Text>
                            {/* <Text>{pokemonDetalhe.types}</Text> */}
                        </Stack >
                        <Stack mt="24px" bg="white" p="24px" borderRadius="16px">
                            {movesMaped}
                        </Stack>
                    </VStack>
                    <Stack >
                    <Image src={pokemonDetalhe.image} alt="pokemon" minW="150px" maxW="200px"/>
                    </Stack>
                </Flex>  
    )
}
