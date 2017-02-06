import React from 'react';

const WeatherItem = ({place, weather, onRemoveItem}) => (
    <li className="weather-item">
        <h2>
            {place}
            <button onClick={onRemoveItem}>x</button>
        </h2>
        <h3>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />
            {weather.main.temp}°C &nbsp; {weather.weather[0].main}
        </h3>
        <p>
        {weather.weather[0].description}
        </p>
        <p>{(new Date(weather.dt * 1000)).toUTCString()}</p>
        <pre>
            {JSON.stringify(weather, null, " ")}
        </pre>
    </li>
);

export default WeatherItem;