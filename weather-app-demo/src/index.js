import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';
//import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <WeatherApp />,
  root
);

if (module.hot) {
  module.hot.accept('./WeatherApp', () => {
    const NextWeatherApp = require('./WeatherApp').default;
    ReactDOM.render(
      <NextWeatherApp />,
      root
    );
  });
}