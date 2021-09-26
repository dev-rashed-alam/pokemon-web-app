import React, {useEffect} from "react"
import PokemonCard from "./PokemonCard";
import {Grid} from "@chakra-ui/react";
import PaginationButton from "./PaginationButton";
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonList} from "../../store/action/PokemonAction";
import {backendServerUrl} from "../../config/Config";

const PokemonList = () => {

    const dispatch = useDispatch();
    const {nextPage, previousPage, pokemonList} = useSelector(store => store.pokemonStore);

    useEffect(() => {
        let url = backendServerUrl + "pokemon";
        dispatch(fetchPokemonList(url));
    }, []);


    const renderPokemonThumb = () => {
        if (pokemonList.length > 0) {
            return pokemonList.map((item) => {
                return <PokemonCard name={item.name} image={item.sprites.other.dream_world.front_default}
                                    type={item.types}/>
            })
        }
    };


    return (
        <>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {renderPokemonThumb()}
            </Grid>
            <PaginationButton previousPage={previousPage} nextPage={nextPage}/>
        </>
    )
};

export default PokemonList;
