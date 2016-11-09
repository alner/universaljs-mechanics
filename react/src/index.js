import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'; 
import App from './app';
import './styles.css';

const mainNode = document.getElementById('main');

render(
    <AppContainer>
        <App 
            defaultValue={"Enter text"} 
            onPost={(e) => console.log(e) }/>
    </AppContainer>, 
    mainNode);

if(_DEV_ && module.hot) {
    module.hot.accept();
}