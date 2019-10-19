const planets = [
  {
    id: 'planet1',
    name: 'Earth',
    imageUrl: 'https://www.universetoday.com/wp-content/uploads/2010/05/Earth-Western-Hemisphere.jpg',
    description: 'Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface.',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'Luna',
  },
  {
    id: 'planet2',
    name: 'Mars',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
    description: 'The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos',
  },
  {
    id: 'planet3',
    name: 'Venus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
    description: 'Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'None',
  },
  {
    id: 'planet4',
    name: 'Jupiter',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/iEv6pmS4gfbefs5JbwHWiJ-320-80.png',
    description: 'Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.',
    isGasPlanet: true,
    numberOfMoons: 79,
    nameOfLargestMoon: 'Ganymede',
  },
  {
    id: 'planet5',
    name: 'Saturn',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuMoxFoIQMBelFmwONI34fNDpVJlqGyj9CPnOxxh2Qsybo1pdLg',
    description: 'Saturn is the sixth planet from the Sun and the second largest planet in our solar system.',
    isGasPlanet: true,
    numberOfMoons: 53,
    nameOfLargestMoon: 'Titan',
  },
  {
    id: 'planet6',
    name: 'Uranus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg',
    description: 'Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.',
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'Titania',
  },
  {
    id: 'planet7',
    name: 'Neptune',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg',
    description: 'Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet from the Sun.',
    isGasPlanet: true,
    numberOfMoons: 14,
    nameOfLargestMoon: 'Triton',
  },
  {
    id: 'planet8',
    name: 'Mercury',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/MTEiJvP99DScN3vkAsE9LA-320-80.jpg',
    description: 'The smallest planet in our solar system and nearest to the Sun.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'None',
  },
];

const getPlanets = () => planets;

const getSinglePlanet = (id) => planets.filter((planet) => planet.id === id);

export default { getPlanets, getSinglePlanet };
