import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoDetail } from '../templates/template-creator';
import urlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <div class="detail"></div>
      
    `;
  },

  async afterRender() {
    const url = urlParser.parseActiveWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    console.log(restaurant);
    const listContainer = document.querySelector('.detail');
    listContainer.innerHTML = createRestoDetail(restaurant);
  },
};

export default Detail;
