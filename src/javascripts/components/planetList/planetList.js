import $ from 'jquery';

import planetData from '../../helpers/data/planetData';

import planetCard from '../planetCard/planetCard';

import './planetList.scss';

const createPlanetList = () => {
  const planets = planetData.getPlanets();
  let domString = '<div class="planet">';
  planets.forEach((planet) => {
    domString += planetCard.createPlanetCard(planet);
  });
  domString += '</div>';
  $('#planets').append(domString);
};

export default { createPlanetList };
