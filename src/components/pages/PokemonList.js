import React, {useEffect} from "react"
import PokemonCard from "../pokemon/PokemonCard";
import {Grid} from "@chakra-ui/react";
import PaginationButton from "../pokemon/PaginationButton";
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonList} from "../../store/action/PokemonAction";
import {backendServerUrl} from "../../config/Config";
import listStyle from "../../assets/styles/pokemon.module.css"

const PokemonList = () => {

    const dispatch = useDispatch();
    const {pokemonList} = useSelector(store => store.pokemonStore);
    const {loader} = useSelector(store => store.loaderStore);

    useEffect(() => {
        let url = backendServerUrl + "pokemon";
        dispatch(fetchPokemonList(url));
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Grid templateColumns="repeat(5, 1fr)" gap={6} className={listStyle.listGrid + " "}>
                {!loader && renderPokemonThumb()}
            </Grid>
            {!loader && <PaginationButton/>}
        </>
    )
};

export default PokemonList;
