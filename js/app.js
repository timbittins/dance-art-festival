"use strict";
const log = console.log.bind(console);
function getSelector(getElement) {
  const element = document.querySelector(getElement);
  if (element) {
    return element;
  } else {
    throw Error(`There is no element called ${getElement}`);
  }
}
function getSelectors(getElements) {
  const elements = document.querySelectorAll(getElements);
  if (elements.length < 1) {
    throw Error(`There are no elements called ${getElements}`);
  } else {
    return elements;
  }
}
function getID(getElementID) {
  const elementID = document.getElementById(getElementID);
  if (elementID) {
    return elementID;
  } else {
    throw Error(`There is no ID called ${getElementID}`);
  }
}

// Close card Button
const cardCloseBtns = getSelectors(".card__closer");
const cardCheckboxes = [...getSelectors(".card__checkbox")];

cardCloseBtns.forEach((button) => {
  button.classList.add("card__closer--show");
});

for (let i = 0; i < cardCheckboxes.length; i++) {
    cardCloseBtns[i].addEventListener("click", function () {
        const checkboxID = getID(`cardSwitch_${i+1}`);
        log(checkboxID);
      checkboxID.checked = false;
    });
}






// TO TOP BUTTON
const toTopButton = getID("toTopButton");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    toTopButton.style.display = "flex";
  } else {
    toTopButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
