import {combineReducers, compose, createStore,applyMiddleware} from "redux"
import LoaderReducer from "./reducer/LoaderReducer";
import thunk from "redux-thunk";
import PokemonReducer from "./reducer/PokemonReducer";

const appReducer = combineReducers({
    pokemonStore: PokemonReducer,
    loaderStore: LoaderReducer,
});

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const appStore = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

export default appStore;