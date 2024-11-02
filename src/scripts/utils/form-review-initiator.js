import RestaurantDbSource from '../data/restaurantdb-source';
import urlParser from '../routes/url-parser';

const formReviewInitiator = async () => {
  const formReview = document.querySelector('#review-form');
  const nameInput = formReview.querySelector('#name');
  const reviewInput = formReview.querySelector('#review');
  nameInput.setAttribute('required', true);
  reviewInput.setAttribute('required', true);
  formReview.addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.target;
    const id = urlParser.parseActiveWithoutCombiner().id;
    const name = nameInput.value.trim();
    const review = reviewInput.value.trim();
    await RestaurantDbSource.postReview(id, name, review);
    form.reset();
  });
};

export default formReviewInitiator;
