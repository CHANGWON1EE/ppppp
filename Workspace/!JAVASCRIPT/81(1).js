'use strict';

let service_header = document.getElementsByClassName('service_header'),
  btn_collapseAll = document.querySelector('.btn_collapseAll');

let openedList = service_header[0];

function setOpenedList() {
  openedList.parentNode.classList.add('hidden');
  openedList.textContent = openedList.textContent.replace('-', '+');
  // openedList.textContent = `+${openedList.textContent.slice(1)}`;
}

for (let i = 0; i < service_header.length; i++) {
  service_header[i].addEventListener('click', function () {
    setOpenedList();

    this.parentNode.classList.remove('hidden');
    this.textContent = this.textContent.replace('+', '-');

    openedList = this;
  });
}

btn_collapseAll.addEventListener('click', function () {
  setOpenedList();
});