import favoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItem } from '../templates/template-creator';
import { stopLoadingAnimation } from '../../utils/anime-js-loading';

const favorite = {
  async render() {
    return `
      <hero-container></hero-container>
      <h3 class="title" tabindex="0" style="display: none;">Your Favorite Restaurants</h3>
      <div class="list"></div>
    `;
  },

  async afterRender() {
    const listOfRestaurant = await favoriteRestaurantIdb.getAllRestaurants();
    const listContainer = document.querySelector('.list');
    const titleElement = document.querySelector('.title');

    if (listOfRestaurant.length === 0) {
      listContainer.innerHTML =
        '<h3 tabindex="0" class="list">No favorite Restaurant</h3>';
      titleElement.style.display = 'none';
    } else {
      titleElement.style.display = 'block';
      listOfRestaurant.forEach((resto) => {
        listContainer.innerHTML += createRestoItem(resto);
      });
    }
    stopLoadingAnimation();
  },
};

export default favorite;
