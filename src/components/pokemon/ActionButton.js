import React from "react";
import {Button, Stack, useToast} from "@chakra-ui/react";
import pokemon from "../../assets/styles/pokemon.module.css";
import {useDispatch, useSelector} from "react-redux";
import {removePokemonFromMyTeam, storePokemonInMyTeam} from "../../store/action/MyPokemonAction";

const ActionButton = ({identifier}) => {

    const dispatch = useDispatch();
    const {pokemonList} = useSelector(store => store.myPokemonStore);
    const toast = useToast();

    const renderToast = (title, status) => {
        return (
            toast({
                title: title,
                position: "top-right",
                status: status,
                isClosable: true,
            })
        )
    };

    const addToMyTeam = () => {
        if (pokemonList.length < 6) {
            dispatch(storePokemonInMyTeam(pokemonList, identifier));
            if (!pokemonList.includes(identifier)) {
                renderToast(identifier + " added in your team!", "success")
            }
            else{
                renderToast(identifier + " already a part of your team", "warning")
            }
        } else {
            renderToast("Maximum limit 6!", "warning")
        }
    };

    const removeFromMyTeam = () => {
        if (pokemonList.length > 0 && pokemonList.includes(identifier)) {
            dispatch(removePokemonFromMyTeam(pokemonList, identifier));
            renderToast(identifier + " removed from your team!", "error")
        } else if (!pokemonList.includes(identifier)) {
            renderToast(identifier + " is not a part of your team!", "warning")
        }
    };

    return (
        <Stack mt={3} direction="row" align="center" justify="center" className={pokemon.actionButton}>
            <Button colorScheme="teal" size="sm" className={pokemon.btn} onClick={addToMyTeam}>
                Add to my Team
            </Button>
            <Button colorScheme="teal" size="sm" className={pokemon.btn + " " + pokemon.removeButton} onClick={removeFromMyTeam}>
                Remove from my Team
            </Button>
        </Stack>
    )
};

export default ActionButton