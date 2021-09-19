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

// M E N U
// Landing Page Load
var req = new XMLHttpRequest();
req.onreadystatechange = processResponse;
req.open("GET", "pages/home.html");
req.send();

function processResponse() {
  if (req.readyState != 4) return; // State 4 is DONE
  document.getElementById("main__website").innerHTML = req.responseText;
}

// Subpages Load
function requestHome() {
  removeClassFromMenuList("menu__link");
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/home.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestNews() {
  removeClassFromMenuList("menu__link");
  document.getElementById("news").classList.add("current");
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/news.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestGuests() {
  removeClassFromMenuList("menu__link");
  document.getElementById("guests").classList.add("current");
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/guests.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestFotos() {
  removeClassFromMenuList("menu__link");
  document.getElementById("fotos").classList.add("current");
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/fotos.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestVideos() {
  removeClassFromMenuList("menu__link");
  document.getElementById("videos").classList.add("current");
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/videos.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestPartners() {
  removeClassFromMenuList("menu__link");
  document.getElementById("partners").classList.add("current");
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/partners.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestImpressum() {
  removeClassFromMenuList("menu__link");
  document.getElementById("impressum").classList.add("current");
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/impressum.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}

function requestPrivacy() {
  removeClassFromMenuList("menu__link");
  document.getElementById("datenschutz").classList.add("current");
  var req = new XMLHttpRequest();
  req.onreadystatechange = processResponse;
  req.open("GET", "pages/privacy.html");
  req.send();

  function processResponse() {
    if (req.readyState != 4) return; // State 4 is DONE
    document.getElementById("main__website").innerHTML = req.responseText;
  }
}
