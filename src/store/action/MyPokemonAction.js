import {ActionTypes} from "../ActionType";
import ApiHandler from "../../config/ApiHandler";
import {backendServerUrl} from "../../config/Config";
import {openLoader, stopLoader} from "./LoaderAction";

export const storeMyPokemon = (data) => {
    return {
        type: ActionTypes.STORE_POKEMON_IN_MY_TEAM,
        payload: data
    }
};

export const fetchMyPokemonData = (data) => {
    return {
        type: ActionTypes.FETCH_MY_POKEMON,
        payload: data
    }
};

export const removeMyPokemon = (data) => {
    return {
        type: ActionTypes.REMOVE_POKEMON_FROM_MY_TEAM,
        payload: data
    }
};

export const fetchMyPokemonList = (pokemonList) => async (dispatch) => {
    dispatch(openLoader(true));
    let pokemonData = {};
    let myPokemonList = [];
    for (const item of pokemonList) {
        await ApiHandler.getApi(backendServerUrl + "pokemon/" + item).then((response) => {
            myPokemonList.push(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }
    pokemonData["data"] = myPokemonList;
    setTimeout(() => {
        dispatch(stopLoader(false));
        dispatch(fetchMyPokemonData(pokemonData));
    }, 500)
};


export const storePokemonInMyTeam = (pokemonList, identifier) => async (dispatch) => {
    if (!pokemonList.includes(identifier)) {
        dispatch(storeMyPokemon(identifier))
    }
};

export const removePokemonFromMyTeam = (pokemonList, identifier) => async (dispatch) => {
    if (pokemonList.includes(identifier)) {
        let newList = pokemonList.filter(item => item !== identifier);
        dispatch(removeMyPokemon(newList))
    }
};