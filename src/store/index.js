import {combineReducers, compose, createStore} from "redux"
import LoaderReducer from "./reducer/LoaderReducer";

const appReducer = combineReducers({
    loaderStore: LoaderReducer
});

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const appStore = createStore(appReducer, composeEnhancers());

export default appStore;