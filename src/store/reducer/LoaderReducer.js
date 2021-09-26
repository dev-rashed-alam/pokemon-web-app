import {ActionTypes} from "../ActionType";

const initialState = {
    loader: false
};

const LoaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.OPEN_LOADER:
            return {loader: true};
        case ActionTypes.STOP_LOADER:
            return {loader: false};
        default:
            return state;
    }
};

export default LoaderReducer