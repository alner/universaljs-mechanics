import { push } from 'react-router-redux';
import * as actionTypes from './constants';

export function changeLocation(location) {
    return push(location);
}

export function initLoad() {
    return {
        type: actionTypes.INIT_LOAD
    }
}

// export function initLoadSucceded(){
//     return {
//         type: actionTypes.INIT_LOAD_SUCCEDED
//     }
// }

export function initLoadFailed(error) {
    return {
        type: actionTypes.INIT_LOAD_FAILED,
        error
    }
}

export function initWeather(data) {
    return {
        type : actionTypes.INIT_WEATHER,
        payload: data
    }
}

export function addPlace(place) {
    return {
        type:actionTypes.ADD_PLACE,
        payload: place
    }
}