import React, {useEffect, useState} from "react"
import Loader from "../layout/Loader";
import ApiHandler from "../../config/ApiHandler";
import PokemonCard from "./PokemonCard";
import {Grid} from "@chakra-ui/react";
import PaginationButton from "./PaginationButton";

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [previousPage, setPreviousPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getPokemonList("pokemon");
    }, []);

    const getPokemonList = (url) => {
        ApiHandler.getApi(url).then((response) => {
            setNextPage(response.data.next);
            setPreviousPage(response.data.previous);
            response.data.results.forEach(async item => {
                await ApiHandler.getApi("pokemon/" + item.name).then((response) => {
                    setPokemonList(prevList => [...prevList, response.data]);
                }).catch((error) => {
                    console.log(error)
                })
            });
            setLoader(false);
        }).catch((error) => {
            console.log(error)
        })
    };


    const renderPokemonThumb = () => {
        return pokemonList.map((item) => {
            return <PokemonCard name={item.name} image={item.sprites.other.dream_world.front_default}
                                type={item.types}/>
        })
    };


    return (
        <>
            <Loader triggerLoader={loader}/>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {renderPokemonThumb()}
            </Grid>
            <PaginationButton previousPage={previousPage} nextPage={nextPage}/>
        </>
    )
};

export default PokemonList;
