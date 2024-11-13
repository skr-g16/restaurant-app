import favoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createFavoriteButtonWithResto = async (restaurant) => {
  await favoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    restaurant,
  });
};

export { createFavoriteButtonWithResto };
