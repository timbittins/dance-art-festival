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

export { log, getSelector, getSelectors, getID };
