import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import renderData from "./render-data.js";
import dataRestaurant from "../public/data/DATA.json";

import toggleBurger from "./toggle-burger.js";
toggleBurger();
renderData(dataRestaurant);
