import { log, getSelector, getSelectors, getID } from "./setup.js";
import autoMenuSwitch from "./menu.js";
import slideShow from "./slider.js";

// // Close card Button
// const cardCloseBtns = getSelectors(".card__closer");
// const cardCheckboxes = [...getSelectors(".card__checkbox")];

// cardCloseBtns.forEach((button) => {
//   button.classList.add("card__closer--show");
// });

// for (let i = 0; i < cardCheckboxes.length; i++) {
//     cardCloseBtns[i].addEventListener("click", function () {
//         const checkboxID = getID(`cardSwitch_${i+1}`);
//         log(checkboxID);
//       checkboxID.checked = false;
//     });
// }

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
