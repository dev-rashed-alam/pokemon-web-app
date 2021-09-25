import React from "react"
import Layout from "./layout/Layout"
import "../assets/styles/App.css"
import SearchBar from "./search/SearchBar";
import {Box, Container} from "@chakra-ui/react"
import PokemonList from "./pokemon/PokemonList";

function App() {
    return (
        <Layout>
            <Container maxW="container.xl">
                <Box padding="4" bg="gray.100" mt={8}>
                    <SearchBar/>
                    <PokemonList/>
                </Box>
            </Container>
        </Layout>
    );
}

export default App;
