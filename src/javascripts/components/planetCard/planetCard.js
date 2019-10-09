import './planetCard.scss';

const createPlanetCard = (planet) => {
  const planetString = `
  <div class="card text-center ${planet.id}"  style="width: 18rem;">
  <img class="card-img-top" src="${planet.imageUrl}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${planet.name}</h2>
    <p class="card-text">${planet.description}</p>
    <p class="card-text">Gas Planet: ${planet.isGasPlanet}</p>
    <p class="card-text">Number of Moons: ${planet.numberOfMoons}</p>
    <p class="card-text">Name of Largest Moon: ${planet.nameOfLargestMoon}</p>
  </div>
</div>
  `;
  return planetString;
};

export default { createPlanetCard };
