/* eslint-disable no-undef */
const assert = require('assert');
Feature('Favoriting Movies');

Scenario('should favoriting and unfavoriting a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.name');

  const firstRestaurant = locate('.name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  // Favoriting the restaurant
  I.click(firstRestaurant);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list');
  const favoritedRestaurantName = await I.grabTextFrom('.name');
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  // Unfavorite the restaurant
  I.click(firstRestaurant);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.see('No favorite Restaurant', '.list');
});
