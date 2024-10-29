import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/index.js';
// import renderData from './utils/render-data.js';
// import dataRestaurant from '../public/data/DATA.json';
// import toggleBurger from './utils/toggle-burger.js';
// import burgerAcces from './utils/burger-acces.js';
import App from './views/app';
const app = new App({
  button: document.querySelector('.burger'),
  drawer: document.querySelector('.nav-links'),
  content: document.querySelector('#container'),
  burgerBox: document.querySelector('#burger'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
