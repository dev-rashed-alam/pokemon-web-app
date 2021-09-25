import React, {useEffect, useState} from "react"
import {Box, Button, Container, Grid, GridItem, Stack, Text} from "@chakra-ui/react";
import ApiHandler from "../../config/ApiHandler";
import {useParams} from "react-router-dom";
import pokemon from "../../assets/styles/pokemon.module.css"

const PokemonDetailsView = (props) => {

    const [getPokemon, setPokemon] = useState({});
    const [pokemonDetails, setPokemonDetails] = useState({});
    const {identifier} = useParams();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        ApiHandler.getApi("pokemon/" + identifier).then((response) => {
            setPokemon(response.data);
            let typeString = "";
            let abilities = "";
            let stats = "";
            let moves = "";
            let indices = "";
            response.data.types.forEach((item) => {
                typeString = typeString ? typeString + "," + item.type.name : item.type.name;
            });
            response.data.moves.forEach((item) => {
                moves = moves ? moves + "," + item.move.name : item.move.name;
            });
            response.data.stats.forEach((item) => {
                stats = stats ? stats + "," + item.stat.name : item.stat.name;
            });
            response.data.abilities.forEach((item) => {
                abilities = abilities ? abilities + "," + item.ability.name : item.ability.name;
            });
            response.data.game_indices.forEach((item) => {
                indices = indices ? indices + "," + item.version.name : item.version.name;
            });
            setPokemonDetails({
                types: typeString,
                moves: moves,
                abilities: abilities,
                indices: indices,
                stats: stats
            });
            setLoader(false)
        }).catch((error) => {
            console.log(error)
        })
    }, [identifier]);

    const renderDetails = () => {
        if (!loader) {
            return (
                <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                    <GridItem colSpan={2}>
                        <div className={pokemon.item + " " + pokemon.detailsItem}>
                            <div>
                                <img src={getPokemon.sprites.other.dream_world.front_default} alt={getPokemon.name}
                                     className={pokemon.detailImage}/>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem colStart={6} colEnd={3}>
                        <div className={pokemon.item + " " + pokemon.detailsItem}>
                            <Text className={pokemon.text}><span
                                className={pokemon.textHeading}>Abilities: </span>{pokemonDetails.abilities}</Text>
                            <Text className={pokemon.text}><span
                                className={pokemon.textHeading}>Height: </span>{getPokemon.height}</Text>
                            <Text className={pokemon.text}><span
                                className={pokemon.textHeading}>Types: </span>{pokemonDetails.types}</Text>
                            <Text className={pokemon.text}><span
                                className={pokemon.textHeading}>Stats: </span>{pokemonDetails.stats}</Text>
                            <Text className={pokemon.text}><span
                                className={pokemon.textHeading}>Moves: </span>{pokemonDetails.moves}</Text>
                            <Text className={pokemon.text}><span
                                className={pokemon.textHeading}>Game Indices: </span>{pokemonDetails.indices}</Text>
                        </div>
                    </GridItem>
                </Grid>
            )
        }
    };

    const renderButton = () => {
        return (
            <Stack mt={3} direction="row" align="center" justify="center">
                <Button colorScheme="teal" size="sm" className={pokemon.btn}>
                    Add to my Team
                </Button>
                <Button colorScheme="teal" size="sm" className={pokemon.btn}>
                    Remove from my Team
                </Button>
            </Stack>
        )
    };

    return (
        <Container maxW="container.xl">
            <Box padding="4" bg="gray.100" mt={8} mb={8}>
                <Text className={pokemon.title}>Details view of {getPokemon.name}</Text>
                {renderDetails()}
                {renderButton()}
            </Box>
        </Container>
    );
};

export default PokemonDetailsView