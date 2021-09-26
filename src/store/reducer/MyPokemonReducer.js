import {ActionTypes} from "../ActionType";

const stateValue = {
    myPokemon: [],
    pokemonList: []
};

const MyPokemonReducer = (state = stateValue, action) => {
    switch (action.type) {
        case ActionTypes.STORE_POKEMON_IN_MY_TEAM:
            return {
                ...state,
                pokemonList: [...stateValue.pokemonList, action.payload],
            };
        case ActionTypes.FETCH_MY_POKEMON:
            return {...state, myPokemon: action.payload.data};
        case ActionTypes.REMOVE_POKEMON_FROM_MY_TEAM:
            return {
                ...state,
                pokemonList: action.payload
            };
        default:
            return stateValue;
    }
};

export default MyPokemonReducer