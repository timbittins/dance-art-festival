import { log, getSelector, getSelectors, getID } from "./setup.js";

let slideIndex = 0;

function slideShow() {
  const fallBackBackground = getSelector(".landing__container");
  fallBackBackground.style.background = "none";
  let i;
  const slideImages = [...getSelectors(".slide__image")]
  for (i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slideImages.length) {
    slideIndex = 1;
  }

  slideImages[slideIndex - 1].style.display = "block";
  setTimeout(slideShow, 5000); 
}

export default slideShow;