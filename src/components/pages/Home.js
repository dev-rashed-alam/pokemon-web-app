import React, {useEffect} from "react";
import {Box, Container} from "@chakra-ui/react";
import SearchBar from "../search/SearchBar";
import PokemonList from "../pokemon/PokemonList";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../layout/Loader";
import {openLoader} from "../../store/action/LoaderAction";

const Home = () => {

    const dispatch = useDispatch();
    const loaderFlag = useSelector(store => store.loaderStore);

    useEffect(() => {
        dispatch(openLoader(true));
    }, []);

    return (
        <Container maxW="container.xl">
            <Box padding="4" bg="gray.100" mt={8}>
                <SearchBar/>
                <Loader triggerLoader={loaderFlag}/>
                <PokemonList/>
            </Box>
        </Container>
    )
};

export default Home