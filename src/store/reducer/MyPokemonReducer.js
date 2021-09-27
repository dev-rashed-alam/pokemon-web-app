import {ActionTypes} from "../ActionType";

const stateValue = {
    myPokemon: [],
    pokemonList: []
};

const MyPokemonReducer = (state = stateValue, action) => {
    switch (action.type) {
        case ActionTypes.STORE_POKEMON_IN_MY_TEAM:
            return {
                myPokemon: [],
                pokemonList: [...state.pokemonList, action.payload],
            };
        case ActionTypes.FETCH_MY_POKEMON:
            return {...state, myPokemon: action.payload.data};
        case ActionTypes.REMOVE_POKEMON_FROM_MY_TEAM:
            return {
                myPokemon: [],
                pokemonList: action.payload
            };
        default:
            return state;
    }
};

export default MyPokemonReducer