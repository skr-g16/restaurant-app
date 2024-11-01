import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/index.js';
import App from './views/app';
import swRegister from './utils/sw-register.js';
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
  swRegister();
});
