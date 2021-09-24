import React from "react"
import Layout from "./layout/Layout"
import "../assets/styles/App.css"
import SearchBar from "./search/SearchBar";
import {Box, Container} from "@chakra-ui/react"

function App() {
    return (
        <Layout>
            <Container maxW="container.xl">
                <Box padding="4" bg="gray.100" mt={8}>
                    <SearchBar/>
                </Box>
            </Container>
        </Layout>
    );
}

export default App;
