import {ActionTypes} from "../ActionType";
import ApiHandler from "../../config/ApiHandler";
import {backendServerUrl} from "../../config/Config";
import {openLoader, stopLoader} from "./LoaderAction";

export const storeAllPokemon = (data) => {
    return {
        type: ActionTypes.STORE_POKEMON,
        payload: data
    }
};

export const fetchPokemonList = (url) => async (dispatch) => {
    dispatch(openLoader(true));
    ApiHandler.getApi(url).then((response) => {
        let pokemonData = {};
        pokemonData["nextPage"] = response.data.next;
        pokemonData["previousPage"] = response.data.previous;
        let setPokemonList = [];
        response.data.results.forEach(async item => {
            await ApiHandler.getApi(backendServerUrl + "pokemon/" + item.name).then((response) => {
                setPokemonList.push(response.data);
            }).catch((error) => {
                console.log(error)
            })
        });
        pokemonData["data"] = setPokemonList;
        setTimeout(() => {
            dispatch(stopLoader(false));
            dispatch(storeAllPokemon(pokemonData));
        }, 500)
    }).catch((error) => {
        console.log(error)
    })
};

export const searchPokemon = (identifier) => async (dispatch) => {
    dispatch(openLoader(true));
    let pokemonData = {};
    let setPokemonList = [];
    await ApiHandler.getApi(backendServerUrl + "pokemon/" + identifier).then((response) => {
        setPokemonList.push(response.data);
    }).catch((error) => {
        console.log(error)
    });
    pokemonData["searchContent"] = identifier;
    pokemonData["data"] = setPokemonList;
    setTimeout(() => {
        dispatch(stopLoader(false));
        dispatch(storeAllPokemon(pokemonData));
    }, 500)

};