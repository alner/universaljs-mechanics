import React from 'react';
import './WeatherItem.css';

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

const WeatherItem = ({place, weather, isDebug, onRemoveItem}) => {
  const sunrise = new Date(weather.sys.sunrise * 1000);
  const sunset = new Date(weather.sys.sunset * 1000);
  return (
    <li className="weather-forecast">
        <h2 className="weather-place">
            {place}, {weather.sys.country}
            <button onClick={onRemoveItem}>x</button>
        </h2>
        <div className="weather-dt">
            {(new Date(weather.dt * 1000)).toUTCString()} &nbsp;
            <span>[{weather.coord.lat} , {weather.coord.lon}]</span>
        </div>
        <div className="weather-main">
            <div className="weather-temp">
                {weather.main.temp}°C
            </div>
            <div className="weather-temp-block">
                <div className="weather-temp-minmax">{weather.main.temp_max}°C</div>
                <div className="weather-temp-minmax">{weather.main.temp_min}°C</div>
            </div>
            <div className="weather-icon">
                <img className="weather-img" title={weather.weather[0].main} alt={weather.weather[0].main} src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />
            </div>
            <div className="weather-temp-block">
                <div className="weather-block-item"><span className="inactive-text">pressure</span> {weather.main.pressure}hpa</div>
                <div className="weather-block-item"><span className="inactive-text">humidity</span> {weather.main.humidity}%</div>
            </div>
            <div className="weather-temp-block">
                <div className="weather-block-item align-right-text"><span className="inactive-text">sunrise</span> {pad(sunrise.getUTCHours(),2)}:{pad(sunrise.getUTCMinutes(),2)}</div>
                <div className="weather-block-item align-right-text"><span className="inactive-text">sunset</span> {pad(sunset.getUTCHours(),2)}:{pad(sunset.getUTCMinutes(),2)}</div>
            </div>
            <div className="weather-temp-block">
                <div className="weather-block-item"><span className="inactive-text">wind</span> {weather.wind.speed}m/s&nbsp;{weather.wind.deg}°</div>
                <div className="weather-block-item"><span className="inactive-text">visibility</span> {weather.visibility}</div>
            </div>            
        </div>
        { isDebug &&
        <pre>
            {JSON.stringify(weather, null, " ")}
        </pre>
        }
    </li>
)};

export default WeatherItem;