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

export function initWeather(data) {
    return {
        type : actionTypes.INIT_WEATHER,
        payload: data
    }
}