import React, { Component } from 'react';

import AddPlace from './addPlaceContainer';
import WeatherItem from './WeatherItem';

const WeatherList = ({weather, removePlace}) => {
    console.log(weather);
    return (
        <div className="weather-panel">
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