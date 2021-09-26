import {ActionTypes} from "../ActionType";

export const openLoader = (data) => {
    return {
        type: ActionTypes.OPEN_LOADER,
        payload: data
    }
};

export const stopLoader = (data) => {
    return {
        type: ActionTypes.STOP_LOADER,
        payload: data
    }
};
