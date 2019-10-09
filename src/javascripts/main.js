import 'bootstrap';
import '../styles/main.scss';
import planetList from './components/planetList/planetList';

const init = () => {
  planetList.createPlanetList();
};
init();
