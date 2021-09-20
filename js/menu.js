import { log, getSelector, getSelectors, getID } from "./setup.js";

autoMenuSwitch();
function autoMenuSwitch() {
  const navCheckbox = getID("navigation");
  const menuBars = getSelectors('[data-menu]');

  if (window.innerWidth > 1050) {
    navCheckbox.checked = true;
    menuBars.forEach((menuBar) => (menuBar.style.transition = "none"));
  } else {
    navCheckbox.checked = false;
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1050) {
      navCheckbox.checked = true;
    } else {
      navCheckbox.checked = false;
    }
  });
}

export default autoMenuSwitch;
