/* eslint-disable no-undef */
const assert = require('assert');
Feature('Reviewing a Restaurant');

Scenario('should add and display a review for a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.name');
  const firstRestaurant = locate('.name').first();
  I.click(firstRestaurant);

  I.seeElement('#name');
  I.fillField('#name', 'Fahmy');

  I.seeElement('#review');
  I.fillField('#review', 'Lorem ipsum dolor sit amet');

  I.click('#submit-review');
  const lastReviewName = await I.grabTextFrom(
    locate('.reviews-item h4').last(),
  );
  const lastReviewText = await I.grabTextFrom(
    locate('.reviews-item .review-text').last(),
  );
  assert.strictEqual(lastReviewName, 'Fahmy');
  assert.strictEqual(lastReviewText, 'Lorem ipsum dolor sit amet');
});
