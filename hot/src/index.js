import render from './render';
import './styles.css';

//console.log('Hello world!');
// document.addEventListener("DOMContentLoaded", () => {
//     render(str)
// });

const str = 'Hello world!';
render(str);

if(module.hot) {
    module.hot.accept();
}