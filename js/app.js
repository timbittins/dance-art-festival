console.log("start");
import { log, getSelector, getSelectors, getID } from "./setup.js";
import autoMenuSwitch from "./menu.js";
import toTopFunction from "./toTop.js";
import slideShow from "./slider.js";

autoMenuSwitch();
toTopFunction();
checkForHomepage();

function checkForHomepage() {
  let check = false;
  if (document.location.pathname === "/index.html") check = true;
  return check;
}
if (checkForHomepage() === true) slideShow();

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

log("end");
