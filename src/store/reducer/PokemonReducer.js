import {ActionTypes} from "../ActionType";

let stateValue = {
    searchContent: null,
    nextPage: null,
    previousPage: null,
    pokemonList: []
};

const PokemonReducer = (state = stateValue, action) => {
    switch (action.type) {
        case ActionTypes.STORE_POKEMON:
            return {
                searchContent: null,
                pokemonList: action.payload.data,
                nextPage: action.payload.nextPage,
                previousPage: action.payload.previousPage
            };
        case ActionTypes.STORE_SEARCHED_POKEMON:
            return {
                searchContent: action.payload.searchContent,
                pokemonList: action.payload.data,
                nextPage: action.payload.nextPage,
                previousPage: action.payload.previousPage
            };
        default:
            return stateValue;
    }
};

export default PokemonReducer