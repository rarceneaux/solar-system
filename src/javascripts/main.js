import 'bootstrap';
import '../styles/main.scss';
import planetList from './components/planetList/planetList';
import inputForm from './components/inputForm/inputForm';


const init = () => {
  planetList.nameOnlyList();
  inputForm.makeInputField();
};
init();
