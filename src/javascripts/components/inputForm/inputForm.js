import $ from 'jquery';

import util from '../../helpers/util';

const makeInputField = () => {
  const inputString = `<form>
  <input id="input-info" type="text" placeholder="🔎Search"required>
  </form>`;
  util.printToDom('input-area', inputString);
  $('#input-info').focus();
};

export default { makeInputField };
