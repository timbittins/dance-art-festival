import { log, getSelector, getSelectors, getID } from "./setup.js";
import autoMenuSwitch from "./menu.js";
import slideShow from "./slider.js";

function toTopFunction() {
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

  toTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

export default toTopFunction;
