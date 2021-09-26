import React, {useState} from "react";
import {Button, Input, InputGroup, InputLeftElement, Stack} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons";
import pokemon from "../../assets/styles/pokemon.module.css";
import {useDispatch} from "react-redux";
import {fetchPokemonList, searchPokemon} from "../../store/action/PokemonAction";
import {backendServerUrl} from "../../config/Config";

const SearchBar = () => {

    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState(null);

    const searchHandler = () => {
        dispatch(searchPokemon(searchInput.toString().toLowerCase()))
    };

    const resetHandler = () => {
        let url = backendServerUrl + "pokemon";
        dispatch(fetchPokemonList(url));
    };

    return (
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300"/>}
                />
                <Input type="text" placeholder="Search using pokemon name" value={searchInput}
                       onChange={(e) => setSearchInput(e.target.value)}/>
                <Button ml={2} size="md" className={pokemon.btn} onClick={searchHandler}>
                    Search
                </Button>
                <Button ml={2} size="md" className={pokemon.btn} onClick={resetHandler}>
                    Reset
                </Button>
            </InputGroup>
        </Stack>
    )
};

export default SearchBar;