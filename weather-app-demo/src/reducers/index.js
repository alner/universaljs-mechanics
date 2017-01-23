import * as actionTypes from '../actions/constants';

export function places(state = [], action) {
    return state;
}

export function weather(state = {}, action) {
    console.log('weather: ', action);
    switch(action.type){
        case actionTypes.INIT_WEATHER:
            return action.payload;
    }
    return state;    
}
