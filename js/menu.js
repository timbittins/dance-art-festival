import { log, getSelector, getSelectors, getID } from "./setup.js";

function autoMenuSwitch() {
  const navCheckbox = getID("navigation");
  const menuBars = [...getSelectors("[data-menu]")];
  const menuButton = getSelector(".menu__button");

  // On load
  if (window.innerWidth > 1050) {
    // log("bigger then 1050");
    navCheckbox.checked = true;
    menuBars.forEach((menuBar) => (menuBar.style.transitionDuration = "0s"));
  } else {
    navCheckbox.checked = false;
    menuBars.forEach((menuBar) => (menuBar.style.transitionDuration = "600ms"));
  }

  // On resize
  window.addEventListener("resize", function () {
    log(window.innerWidth);
    if (window.innerWidth < 1050) navCheckbox.checked = false;
  });

  // On menubutton click
  menuButton.addEventListener("click", function () {
    // log("button clicked");
    menuBars.forEach((menuBar) => (menuBar.style.transitionDuration = "600ms"));
  });
}

export default autoMenuSwitch;

