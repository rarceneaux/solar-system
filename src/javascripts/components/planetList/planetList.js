import $ from 'jquery';

import planetData from '../../helpers/data/planetData';

import planetCard from '../planetCard/planetCard';

import './planetList.scss';

const nameOnlyList = () => {
  const planets = planetData.getPlanets();
  let domStringA = '<div>';
  planets.forEach((name) => {
    domStringA += planetCard.pageLoadCard(name);
  });
  domStringA += '</div>';
  $('#planets').html(domStringA);
};

// const createPlanetList = () => {
//   const planets = planetData.getPlanets();
//   let domString = '<div class="planetA">';
//   planets.forEach((planet) => {
//     domString += planetCard.createPlanetCard(planet);
//   });
//   domString += '</div>';
//   $('#planetsA').html(domString);
// };

export default { nameOnlyList };
