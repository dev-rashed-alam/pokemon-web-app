import React from "react";
import {Button, Stack} from "@chakra-ui/react";
import pokemon from "../../assets/styles/pokemon.module.css";
import {useDispatch, useSelector} from "react-redux";
import {removePokemonFromMyTeam, storePokemonInMyTeam} from "../../store/action/MyPokemonAction";

const ActionButton = ({identifier}) => {

    const dispatch = useDispatch();
    const {pokemonList} = useSelector(store => store.myPokemonStore);

    const addToMyTeam = () => {
        if (pokemonList.length < 7) {
            dispatch(storePokemonInMyTeam(pokemonList, identifier))
        }
    };

    const removeFromMyTeam = () => {
        if (pokemonList.length > 0) {
            dispatch(removePokemonFromMyTeam(pokemonList, identifier))
        }
    };

    return (
        <Stack mt={3} direction="row" align="center" justify="center">
            <Button colorScheme="teal" size="sm" className={pokemon.btn} onClick={addToMyTeam}>
                Add to my Team
            </Button>
            <Button colorScheme="teal" size="sm" className={pokemon.btn} onClick={removeFromMyTeam}>
                Remove from my Team
            </Button>
        </Stack>
    )
};

export default ActionButton