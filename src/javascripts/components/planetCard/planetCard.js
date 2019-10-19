import $ from 'jquery';

import './planetCard.scss';


const pageLoadCard = (planet) => {
  const nameString = `
  <div class="card text-center name-pic" id="${planet.id}">
  <img class="card-img-top planet-pic hide" src="${planet.imageUrl}" alt="${planet.id}"> 
  <div class="card-body">
    <h1  id="title" class="card-title-a">${planet.name}</h1>
    </div>
    </div>`;
  return nameString;
};

const cardListEvents = () => {
  $('body').on('mouseenter', '.card', (e) => {
    $(e.target).find('.planet-pic').removeClass('hide');
    $(e.target).find('.card-title-a').addClass('hide');
  });

  $('body').on('mouseleave', '.card', (e) => {
    $(e.target).find('.card-title-a').removeClass('hide');
    $(e.target).find('.planet-pic').addClass('hide');
  });
};
cardListEvents();

const createPlanetCard = (planet) => {
  const planetString = `
  <div class="card text-center full ${planet.id}"  style="width: 18rem;">
  <div class="remove">X</div>
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
