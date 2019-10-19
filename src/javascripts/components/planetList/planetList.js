import $ from 'jquery';

import utils from '../../helpers/util';

import planetData from '../../helpers/data/planetData';

import planetCard from '../planetCard/planetCard';

import './planetList.scss';

const nameOnlyList = (text) => {
  const planets = planetData.getPlanets();
  const planetsToPrint = planets.filter((planet) => {
    if (text === undefined) {
      return true;
    }
    if (planet.name.toLowerCase().includes(text.toLowerCase())) {
      return true;
    }
    if (planet.description.toLowerCase().includes(text.toLowerCase())) {
      return true;
    }
    return false;
  });
  let domStringA = '<div id="test">';
  planetsToPrint.forEach((name) => {
    domStringA += planetCard.pageLoadCard(name);
  });
  domStringA += '</div>';
  $('#planets').html(domStringA);
};

$('body').on('click', '.name-pic', (e) => {
  const pickedPlanet = planetCard.createPlanetCard(planetData.getSinglePlanet(e.target.id)[0]);
  utils.printToDom('planets', '');
  utils.printToDom('planet', pickedPlanet);
});

$('body').on('click', '.remove', () => {
  utils.printToDom('planet', '');
  utils.printToDom('planets', nameOnlyList($('#input-info').val()));
});

export default { nameOnlyList };
