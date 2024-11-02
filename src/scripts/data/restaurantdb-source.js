import API_ENDPOINT from '../global/api-endpoint';
import {
  startLoadingAnimation,
  stopLoadingAnimation,
  showErrorFeedback,
} from '../utils/anime-js-loading';

class RestaurantDbSource {
  static async listRestaurants() {
    try {
      startLoadingAnimation();
      const response = await fetch(API_ENDPOINT.HOME);
      if (!response.ok) throw new Error('Failed to fetch restaurants');
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      showErrorFeedback('Error loading restaurant list. Please try again.');
      throw error;
    } finally {
      stopLoadingAnimation();
    }
  }

  static async detailRestaurant(id) {
    try {
      startLoadingAnimation();
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (!response.ok) throw new Error('Failed to fetch restaurant details');
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      showErrorFeedback('Error loading restaurant details. Please try again.');
      throw error;
    } finally {
      stopLoadingAnimation();
    }
  }

  static async postReview(id, name, review) {
    try {
      startLoadingAnimation();
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          review,
        }),
      });

      if (!response.ok) throw new Error('Failed to post review');
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      showErrorFeedback('Error posting review. Please try again.');
      throw error;
    } finally {
      stopLoadingAnimation();
    }
  }
}

export default RestaurantDbSource;
