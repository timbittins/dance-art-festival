"use-strict";
console.log("JS Start check");
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const menuListItems = [...document.getElementsByClassName('menu__link')];
const removeClassFromMenuList = () => menuListItems.forEach(menuListItem => {
  menuListItem.classList.remove('current');
});



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

















  // TO TOP BUTTON
  const toTopButton = document.getElementById("toTopButton");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      toTopButton.style.display = "flex";
    } else {
      toTopButton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }