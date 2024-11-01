import favoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItem } from '../templates/template-creator';
const favorite = {
  async render() {
    return `
      <hero-container></hero-container>
        <h3 id="list" class="title" tabindex="0">Your Favorite Restaurants</h3>
        <div class="list"></div>
    `;
  },

  async afterRender() {
    const listOfRestaurant = await favoriteRestaurantIdb.getAllRestaurants();
    const listContainer = document.querySelector('.list');
    listOfRestaurant.forEach((resto) => {
      listContainer.innerHTML += createRestoItem(resto);
    });
  },
};

export default favorite;
