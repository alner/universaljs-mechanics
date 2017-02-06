import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as actionTypes from '../actions/constants';

// function places(state = [], action) {
//     return state;
// }

function weather(state = {}, action) {
    console.log('Weather reducer: ', state, action);
    switch(action.type){
        case actionTypes.INIT_LOAD:
            return {...state, isLoading: true}
        case actionTypes.INIT_WEATHER:
            return {...action.payload};
        case actionTypes.INIT_LOAD_FAILED:
            return {...state, error: action.error};
        case actionTypes.ADD_PLACE:
            return {...state, [action.place]: {isLoading: true}};
        case actionTypes.ADD_PLACE_SUCCEDED:
            return {...state, [action.place]: action.payload };
        case actionTypes.REMOVE_PLACE:
            let { [action.place]:undefined, ...result} = state;
            console.log(result);
            return result;
        default:
            console.log('Reducer: unknown action ', action.type, action.payload);
            return state;
    }
}

export default combineReducers({
        weather,
        routing: routerReducer
})
