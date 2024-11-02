import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoDetail } from '../templates/template-creator';
import urlParser from '../../routes/url-parser';
import favoriteButtonInitiator from '../../utils/favorite-button-initiator';
import formReviewInitiator from '../../utils/form-review-initiator';

const Detail = {
  async render() {
    return `
      <div class="detail"></div>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = urlParser.parseActiveWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const listContainer = document.querySelector('.detail');
    listContainer.innerHTML = createRestoDetail(restaurant);

    favoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer',
      ),
      restaurant,
    });
    formReviewInitiator();
  },
};

export default Detail;
