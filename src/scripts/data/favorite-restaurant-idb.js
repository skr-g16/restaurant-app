/* eslint-disable no-prototype-builtins */
import { openDB } from 'idb';
import {
  startLoadingAnimation,
  stopLoadingAnimation,
  showErrorFeedback,
} from '../utils/anime-js-loading';
import CONFIG from '../global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const favoriteRestaurantIdb = {
  async getRestaurant(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestaurants() {
    try {
      startLoadingAnimation();
      return (await dbPromise).getAll(OBJECT_STORE_NAME);
    } catch (error) {
      showErrorFeedback(
        'Error loading favorite restaurants. Please try again.',
      );
      throw error;
    } finally {
      stopLoadingAnimation();
    }
  },
  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default favoriteRestaurantIdb;
