import dataRestaurant from "../public/data/DATA.json";
const renderData = (data) => {
  const listOfRestaurant = document.querySelector(".list");
  listOfRestaurant.innerHTML = "";
  data.restaurants.forEach((restaurant) => {
    listOfRestaurant.innerHTML += `
      <div class="card" id="card-${restaurant.id}">
        <div class="card-image">
          <img src="${restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="card-content">
          <h3>${restaurant.name}</h3>
          <p><strong>City:</strong> ${restaurant.city}</p>
          <p>${restaurant.description}</p>
          <p><strong>Rating:</strong> ⭐${restaurant.rating}</p>
        </div>
      </div>
      `;
  });
};
renderData(dataRestaurant);
export default renderData;
