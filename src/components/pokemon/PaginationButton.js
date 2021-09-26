import React from "react";
import {Button, Stack} from "@chakra-ui/react";
import pokemon from "../../assets/styles/pokemon.module.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonList} from "../../store/action/PokemonAction";

const PaginationButton = () => {

    const dispatch = useDispatch();
    const {nextPage, previousPage} = useSelector(store => store.pokemonStore);

    const handlePrevious = () => {
        dispatch(fetchPokemonList(previousPage))
    };

    const handleNext = () => {
        dispatch(fetchPokemonList(nextPage))
    };

    return (
        <Stack mt={5} direction="row-reverse" align="center">
            {nextPage && <Button colorScheme="teal" size="sm" className={pokemon.btn} onClick={handleNext}>
                Next Page
            </Button>}
            {previousPage && <Button colorScheme="teal" size="sm" className={pokemon.btn} onClick={handlePrevious}>
                Previous Page
            </Button>}
        </Stack>
    )
};

export default PaginationButton