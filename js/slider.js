// "use strict";

// const log = console.log.bind(console);
// function getSelector(getElement) {
//   const element = document.querySelector(getElement);
//   if (element) {
//     return element;
//   } else {
//     throw Error(`There is no element called ${getElement}`);
//   }
// }
// function getSelectors(getElements) {
//   const elements = document.querySelectorAll(getElements);
//   if (elements.length == 0) {
//     throw Error(`There are no elements called ${getElements}`);
//   } else {
//     return elements;
//   }
// }
// function getID(getID) {
//   const element = document.getElementById(getID);
//   if (element) {
//     return element;
//   } else {
//     throw Error(`There is no ID called ${getID}`);
//   }
// }

// // `translateX( ${size}  px)`
// slideShow();

// function slideShow() {
//   const slider = getSelector(".background__slider");
//   const images = getSelectors(".background__image");
//   const size = images[0].clientWidth;
//   log(size);
//   let counter = 0;
//   counter++;
//   let move = size * counter;
//   log(move);

//   // while (counter < 6) slider.style.transform = `translateX(- ${move}px)`;

//   // if (counter > images.length) {
//   // log("yes");
//   // }
// }
// setTimeout(slideShow, 500);

// // var slideIndex = 0;
// // showSlides();

// // function showSlides() {
// //   var i;
// //   var slides = document.getElementsByClassName("background__image");
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";
// //   }
// //   slideIndex++;
// //   if (slideIndex > slides.length) {
// //     slideIndex = 1;
// //   }

// //   slides[slideIndex - 1].style.display = "block";
// //   setTimeout(showSlides, 2000); // Change image every 2 seconds
// // }
