import $ from 'jquery';

const printToDom = (divId, ToPrint) => {
  $(`#${divId}`).html(ToPrint);
};

export default { printToDom };
