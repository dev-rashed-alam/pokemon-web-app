import React, {useEffect, useState} from "react"
import {Box, Container, Grid, GridItem, Text} from "@chakra-ui/react";
import ApiHandler from "../../config/ApiHandler";
import {useParams} from "react-router-dom";
import pokemon from "../../assets/styles/pokemon.module.css"
import {backendServerUrl} from "../../config/Config";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../layout/Loader";
import {openLoader, stopLoader} from "../../store/action/LoaderAction";
import ActionButton from "../pokemon/ActionButton";

const PokemonDetailsView = (props) => {

    const dispatch = useDispatch();
    const [getPokemon, setPokemon] = useState({});
    const [pokemonDetails, setPokemonDetails] = useState({});
    const {identifier} = useParams();
    const {loader} = useSelector(store => store.loaderStore);

    useEffect(() => {
        dispatch(openLoader(true));
        ApiHandler.getApi(backendServerUrl + "pokemon/" + identifier).then((response) => {
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
            setTimeout(() => {
                dispatch(stopLoader(false))
            }, 500)
        }).catch((error) => {
            console.log(error)
        })
    }, [identifier]);

    const renderDetails = () => {
        if (!loader && Object.keys(getPokemon).length > 0) {
            return (
                <Grid templateColumns="repeat(5, 1fr)" gap={4} className={pokemon.detailsGrid}>
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
                            <ActionButton identifier={identifier}/>
                        </div>
                    </GridItem>
                </Grid>
            )
        }
    };


    return (
        <Container maxW="container.xl">
            <Box padding="4" bg="gray.100" mt={8} mb={8}>
                <Text className={pokemon.title}>Details view of {identifier}</Text>
                <Loader/>
                {renderDetails()}
            </Box>
        </Container>
    );
};

export default PokemonDetailsView