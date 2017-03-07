import React, { Component } from 'react';

import AddPlace from './addPlaceContainer';
import WeatherItem from './WeatherItem';
import './WeatherList.css';

const WeatherList = ({weather, removePlace}) => {
    console.log(weather);
    return (
        <div className="weather-list">
            <AddPlace />
            <div style={{textAlign: "justify"}}>
                {weather.isLoading &&
                    <span>Loading...</span>
                }
                {weather.error &&
                    <span>{weather.error}</span>
                }
                <ul className="weather-list">
                {!(weather.isLoading || weather.error) && Object.keys(weather).map(item => 
                    <WeatherItem 
                        key={item} 
                        place={item} 
                        weather={weather[item]} 
                        onRemoveItem={removePlace.bind(null, item)} />
                )}
                </ul>
            </div>
        </div>
    )
}

export default WeatherList;