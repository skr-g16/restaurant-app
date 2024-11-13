import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as testFactories from './helpers/tesFactories';

describe('Make favorite a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };
  beforeEach(() => {
    addLikeButtonContainer();
  });
  describe('Favoriting a Restaurant', () => {
    it('should show the like button when the restaurant has not been liked before', async () => {
      await testFactories.createFavoriteButtonWithResto({ id: 1 });
      expect(
        document.querySelector('[aria-label="like this resto"]'),
      ).toBeTruthy();
    });
    it('should not show the unlike button when the restaurant has not been liked before', async () => {
      await testFactories.createFavoriteButtonWithResto({ id: 1 });
      expect(
        document.querySelector('[aria-label="unlike this resto"]'),
      ).toBeFalsy();
    });
    it('should be able to like the restaurant', async () => {
      await testFactories.createFavoriteButtonWithResto({ id: 1 });
      document
        .getElementById('favoriteButton')
        .dispatchEvent(new Event('click'));
      const resto = await favoriteRestaurantIdb.getRestaurant(1);
      expect(resto).toEqual({ id: 1 });
      await favoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant again when its already liked', async () => {
      await testFactories.createFavoriteButtonWithResto({ id: 1 });
      await favoriteRestaurantIdb.putRestaurant({ id: 1 });
      document
        .getElementById('favoriteButton')
        .dispatchEvent(new Event('click'));
      expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([
        { id: 1 },
      ]);
      await favoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant when it has no id', async () => {
      await testFactories.createFavoriteButtonWithResto({});
      document
        .getElementById('favoriteButton')
        .dispatchEvent(new Event('click'));
      expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
  });

  describe('Unfavoriting a Restaurant', () => {
    beforeEach(() => {
      favoriteRestaurantIdb.putRestaurant({ id: 1 });
    });
    afterEach(() => {
      favoriteRestaurantIdb.deleteRestaurant(1);
    });
    it('should not show the unlike button when the restaurant has not been liked before', async () => {
      await testFactories.createFavoriteButtonWithResto({ id: 1 });
      expect(
        document.querySelector('[aria-label="unlike this resto"]'),
      ).toBeTruthy();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
      await testFactories.createFavoriteButtonWithResto({ id: 1 });
      expect(
        document.querySelector('[aria-label="like this resto"]'),
      ).toBeFalsy();
    });

    it('should be able to unlike the restaurant', async () => {
      await testFactories.createFavoriteButtonWithResto({ id: 1 });
      document
        .querySelector('[aria-label="unlike this resto"]')
        .dispatchEvent(new Event('click'));
      expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
    it('should not add a restaurant again when its already unliked', async () => {
      await testFactories.createFavoriteButtonWithResto({ id: 1 });
      await favoriteRestaurantIdb.deleteRestaurant(1);
      document
        .querySelector('[aria-label="unlike this resto"]')
        .dispatchEvent(new Event('click'));
      expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
  });
});
