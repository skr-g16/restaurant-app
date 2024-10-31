import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoItem } from '../templates/template-creator';
const Home = {
  async render() {
    return `
        <hero-container></hero-container>
        <h3 id="list" class="title" tabindex="0">List of Restaurant</h3>
        <div class="list"></div>
    `;
  },

  async afterRender() {
    const listOfRestaurant = await RestaurantDbSource.listRestaurants();
    const listContainer = document.querySelector('.list');
    listOfRestaurant.forEach((resto) => {
      listContainer.innerHTML += createRestoItem(resto);
    });
  },
};

export default Home;
