import * as actionTypes from '../actions/constants';

export function places(state = [], action) {
    return state;
}

export function weather(state = {}, action) {
    console.log('Weather reducer: ', state, action);
    switch(action.type){
        case actionTypes.INIT_LOAD:
            return {...state, isLoading: true}
        case actionTypes.INIT_WEATHER:
            return {...action.payload, isLoading: false};
        case actionTypes.INIT_LOAD_FAILED:
            return {...state, isLoading: false, error: action.error};
        default:
            return state;
    }
}
