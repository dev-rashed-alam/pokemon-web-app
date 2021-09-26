import {ActionTypes} from "../ActionType";

let loader = false;

const LoaderReducer = (state = loader, action) => {
    switch (action.type) {
        case ActionTypes.OPEN_LOADER:
            return action.payload;
        case ActionTypes.STOP_LOADER:
            return action.payload;
        default:
            return state;
    }
};

export default LoaderReducer