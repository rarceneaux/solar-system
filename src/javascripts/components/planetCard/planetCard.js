// import $ from 'jquery';

import './planetCard.scss';

const pageLoadCard = (planet) => {
  const nameString = `
  <div class="card text-center name-pic" id="${planet.id}">
  <div class="card-body">
    <h1  id="${planet.id}" class="card-title">${planet.name}</h1>
    <img class="card-img-top planet-pic" src="${planet.imageUrl}" alt="${planet.id}"></img> 
    </div>
   </div>
</div>`;
  return nameString;
};

const createPlanetCard = (planet) => {
  const planetString = `
  <div class="card text-center full ${planet.id}"  style="width: 18rem;">
  <div class="remove fas fa-times-circle fa-3x"></div>
  <img class="card-img-top" src="${planet.imageUrl}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${planet.name}</h2>
    <p class="card-text">${planet.description}</p>
    <p class="card-text">Gas Planet: ${planet.isGasPlanet}</p>
    <p class="card-text">Number of Moons: ${planet.numberOfMoons}</p>
    <p class="card-text">Name of Largest Moon: ${planet.nameOfLargestMoon}</p>
  </div>
</div>`;
  return planetString;
};

export default { pageLoadCard, createPlanetCard };
