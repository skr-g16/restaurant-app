const renderData = (data) => {
  const listOfRestaurant = document.querySelector(".list");
  listOfRestaurant.innerHTML = "";
  data.restaurants.forEach((restaurant) => {
    listOfRestaurant.innerHTML += `
      <div class="card" id="card-${restaurant.id}">
        <div class="card2">
          <div class="card-image">
            <img tabindex="0" class="image" src="${restaurant.pictureId}" alt="${restaurant.name}">
          </div>
          <div class="card-content">
            <h3 class="name" tabindex="0">${restaurant.name}</h3>
            <p class="city" tabindex="0">${restaurant.city}</p>
            <p class="description" tabindex="0">${restaurant.description}</p>
            <p class="rating" tabindex="0"><strong>Rating:</strong> ⭐${restaurant.rating}</p>
          </div>
        </div>
      </div>
      `;
  });
};

export default renderData;
