"use strict";

//Hero Animation
const topHeading = document.querySelector(".top-heading");
const botHeading = document.querySelector(".bot-heading");
const navLinks = document.querySelectorAll(".header__link");
const logo = document.querySelector(".header__logo");
const heroImg = document.querySelector(".hero__img");
const arrow = document.querySelector(".arrow");

// when screen reloaded go back to the top of the page
// window.addEventListener("beforeunload", () => {
//   window.scrollTo(0, 0);
// });

const revealAnimation = () => {
  const timelineFade = gsap.timeline();

  gsap.to(arrow, {
    keyframes: [
      { y: 25, duration: 1 },
      { y: 0, duration: 1 },
      { y: 25, duration: 1 },
      { y: 0, duration: 1 },
    ],
    repeat: Infinity,
  });

  timelineFade
    .from(topHeading, { autoAlpha: 0, x: -50, delay: 0.1, duration: 0.75 })
    .from(heroImg, { autoAlpha: 0, duration: 0.75 }, "-=0.35")
    .from(
      botHeading,
      { autoAlpha: 0, y: 50, scale: 1.75, duration: 0.75 },
      "-=0.5"
    )
    .from(arrow, { autoAlpha: 0, duration: 0.75 }, "-=0.5")
    .from(
      navLinks,
      { autoAlpha: 0, y: -50, duration: 0.5, stagger: 0.1 },
      "-=0.25"
    )
    .from(logo, { autoAlpha: 0, y: -50 }, "<");
};

window.addEventListener("load", revealAnimation);

//Box Animation

const box = document.querySelector(".box");
const tools = document.querySelector(".toggle-wrapper");
const curlyArrow = document.querySelector(".curly-arrow");

const boxReveal = () => {
  tools.classList.toggle("box-toggle");
  curlyArrow.classList.toggle("hide");

  if (tools.classList.contains("box-toggle")) {
    box.classList.replace("fa-box", "fa-box-open");
  } else {
    box.classList.replace("fa-box-open", "fa-box");
  }
};

box.addEventListener("click", boxReveal);
