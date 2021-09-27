import React, {useEffect} from "react"
import PokemonCard from "../pokemon/PokemonCard";
import {Box, Container, Grid, Text} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import pokemon from "../../assets/styles/pokemon.module.css";
import Loader from "../layout/Loader";
import {fetchMyPokemonList} from "../../store/action/MyPokemonAction";
import listStyle from "../../assets/styles/pokemon.module.css"

const MyTeamList = () => {

    const dispatch = useDispatch();
    const {myPokemon, pokemonList} = useSelector(store => store.myPokemonStore);
    const {loader} = useSelector(store => store.loaderStore);


    useEffect(() => {
        dispatch(fetchMyPokemonList(pokemonList))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderPokemonThumb = () => {
        if (myPokemon.length > 0) {
            return myPokemon.map((item) => {
                return <PokemonCard name={item.name} image={item.sprites.other.dream_world.front_default}
                                    type={item.types}/>
            })
        }
    };


    return (
        <Container maxW="container.xl">
            <Box padding="4" bg="gray.100" mt={8} mb={8}>
                <Text className={pokemon.title}>Details of my Team</Text>
                <Loader/>
                <Grid templateColumns="repeat(5, 1fr)" gap={6} className={listStyle.listGrid + " "}>
                    {!loader && renderPokemonThumb()}
                </Grid>
            </Box>
        </Container>
    )
};

export default MyTeamList;
