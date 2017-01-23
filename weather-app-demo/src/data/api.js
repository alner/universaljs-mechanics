import fetch from 'isomorphic-fetch'
import { APIKEY } from './API_KEY.json'

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=${APIKEY}`;

import data from './data.json';

export function getData() {
    return Promise.resolve(data); // fake api
}

export function getWeatherByCity(city) {
  return fetch(`${WEATHER_URL}&q=${city}`)
    .then(response => response.json())
    .then(json => json)
}