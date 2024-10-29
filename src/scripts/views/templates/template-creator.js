import CONFIG from '../../global/config';

const createRestoDetail = (resto) => `

`;

const createRestoItem = (resto) => `
<div class="card" id="card-${resto.id}">
        <div class="card2">
          <div class="card-image">
            <img tabindex="0" class="image" src="${CONFIG.BASE_IMAGE_SMALL_URL + resto.pictureId}" alt="${resto.name}">
          </div>
          <div class="card-content">
            <h3 class="name" tabindex="0"><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
            <p class="city" tabindex="0">${resto.city}</p>
            <p class="description" tabindex="0">${resto.description}</p>
            <p class="rating" tabindex="0"><strong>Rating:</strong> ⭐${resto.rating}</p>
          </div>
        </div>
      </div>
`;

const createFavoriteButton = (id) => `
  <button aria-label="favorite this resto" id="favoriteButton" class="favorite-button" data-id="${id}"> 
  `;

const createUnfavoriteButton = (id) => `
  <button aria-label="unfavorite this resto" id="unfavoriteButton" class="unfavorite-button" data-id="${id}"> 
  `;

export {
  createRestoItem,
  createRestoDetail,
  createFavoriteButton,
  createUnfavoriteButton,
};
