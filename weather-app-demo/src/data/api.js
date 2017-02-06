import fetch from 'isomorphic-fetch'
import { APIKEY } from './API_KEY.json'

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=${APIKEY}`;

import data from './data.json';

export function getData() {
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            if(Math.random()<0.3)
                reject("Bad network request");
            else
                resolve(data);
        }
        ,1500)
    ) 
    //Promise.resolve(data); // fake api
}

export function getWeatherByPlace(place) {
  return fetch(`${WEATHER_URL}&q=${place}`)
    .then(response => response.json())
    .then(data => ({
        place,
        data
    }))
}