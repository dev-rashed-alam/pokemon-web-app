import React from "react";
import {Box, Container} from "@chakra-ui/react";
import SearchBar from "../search/SearchBar";
import PokemonList from "../pokemon/PokemonList";

const Home = () => {
    return (
        <Container maxW="container.xl">
            <Box padding="4" bg="gray.100" mt={8}>
                <SearchBar/>
                <PokemonList/>
            </Box>
        </Container>
    )
};

export default Home