import $ from 'jquery';

import util from '../../helpers/util';

import planetList from '../planetList/planetList';

const makeInputField = () => {
  const inputString = `<form>
  <input id="input-info" type="text" placeholder="🔎Search"required>
  </form>`;
  util.printToDom('input-area', inputString);
  $('#input-info').focus();
};

const inputInfoBoxListener = () => {
  $('body').on('keyup', '#input-info', (e) => {
    const textInfo = e.target.value;
    util.printToDom('planets', '');
    planetList.nameOnlyList(textInfo);
  });
};
inputInfoBoxListener();

export default { makeInputField };
