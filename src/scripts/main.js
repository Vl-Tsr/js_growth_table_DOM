'use strict';

const tableElem = document.querySelector('table');

const addRowBtn = document.querySelector('.append-row');
const deleteRowBtn = document.querySelector('.remove-row');
const addColBtn = document.querySelector('.append-column');
const deleteColBtn = document.querySelector('.remove-column');

addRowBtn.addEventListener('click', (e) => {
  tableElem.append(document.querySelector('tr').cloneNode(true));
});

deleteRowBtn.addEventListener('click', (e) => {
  document.querySelector('tr').remove();
});

addColBtn.addEventListener('click', (e) => {
  const allRow = [...document.querySelectorAll('tr')];

  allRow.forEach((el) => {
    el.append(el.lastElementChild.cloneNode());
  });
});

deleteColBtn.addEventListener('click', (e) => {
  const allRow = [...document.querySelectorAll('tr')];

  allRow.forEach((el) => {
    el.lastElementChild.remove();
  });
});

function buttonCondition() {
  const rowCount = [...document.querySelectorAll('table tr')].length;
  const colCount = document.querySelector('tr').children.length;

  if (rowCount === 10) {
    addRowBtn.disabled = true;
  } else {
    addRowBtn.disabled = false;
  }

  if (rowCount === 2) {
    deleteRowBtn.disabled = true;
  } else {
    deleteRowBtn.disabled = false;
  }

  if (colCount === 10) {
    addColBtn.disabled = true;
  } else {
    addColBtn.disabled = false;
  }

  if (colCount === 2) {
    deleteColBtn.disabled = true;
  } else {
    deleteColBtn.disabled = false;
  }
}

document.addEventListener('click', buttonCondition);
