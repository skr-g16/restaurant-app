import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import renderData from './render-data.js';
import dataRestaurant from '../public/data/DATA.json';
import toggleBurger from './toggle-burger.js';
import burgerAcces from './burger-acces.js';

document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  toggleBurger();
  renderData(dataRestaurant);
  burgerAcces();
});
