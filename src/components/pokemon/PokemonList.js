import React, {useEffect, useState} from "react"
import ApiHandler from "../../config/ApiHandler";
import PokemonCard from "./PokemonCard";
import {Grid} from "@chakra-ui/react";
import PaginationButton from "./PaginationButton";
import {useDispatch} from "react-redux";
import {stopLoader} from "../../store/action/LoaderAction";

const PokemonList = () => {

    const dispatch = useDispatch();
    const [pokemonList, setPokemonList] = useState([]);
    const [previousPage, setPreviousPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);

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
            dispatch(stopLoader(false))
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
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {renderPokemonThumb()}
            </Grid>
            <PaginationButton previousPage={previousPage} nextPage={nextPage}/>
        </>
    )
};

export default PokemonList;
