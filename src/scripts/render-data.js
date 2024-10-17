const renderData = (data) => {
  const listOfRestaurant = document.querySelector(".list");
  listOfRestaurant.innerHTML = "";
  data.restaurants.forEach((restaurant) => {
    listOfRestaurant.innerHTML += `
      <div class="card" id="card-${restaurant.id}">
       <div class="card2">
        <div class="card-image">
          <img class="image" src="${restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="card-content">
          <h3 class="name">${restaurant.name}</h3>
          <p class="city">${restaurant.city}</p>
          <p class="description">${restaurant.description}</p>
          <p class="rating"><strong>Rating:</strong> ⭐${restaurant.rating}</p>
        </div>
       </div>
      </div>
      `;
  });
};

export default renderData;
