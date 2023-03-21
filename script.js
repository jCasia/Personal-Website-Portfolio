"use strict";

// Reload, Back to the top of the screen
// window.addEventListener("beforeunload", () => {
//   window.scrollTo(0, 0);
// });

// Sticky Navigation
const header = document.querySelector(".header");
console.log(header);
const hero = document.querySelector(".hero");
console.log(hero);

const observer = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      header.classList.add("observe-scroll");
    } else {
      header.classList.remove("observe-scroll");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-200px",
  }
);

observer.observe(hero);

//Hero Animation
const topHeading = document.querySelector(".top-heading");
const botHeading = document.querySelector(".bot-heading");
const navLinks = document.querySelectorAll(".header__link");
const logo = document.querySelector(".header__logo");
const heroImg = document.querySelector(".hero__img");
const arrow = document.querySelector(".hero__arrow");
const heroSection = document.querySelector(".hero-section");

const revealAnimation = () => {
  const timelineHero = gsap.timeline();

  gsap.to(arrow, {
    keyframes: [
      { y: 25, duration: 1 },
      { y: 0, duration: 1 },
      { y: 25, duration: 1 },
      { y: 0, duration: 1 },
    ],
    repeat: Infinity,
  });

  timelineHero
    .to(heroSection, { clipPath: "circle(100% at 50% 50%)", duration: 2.25 })
    .from(topHeading, { autoAlpha: 0, x: -50, duration: 0.75 }, "-=1.75")
    .from(heroImg, { autoAlpha: 0, duration: 0.75 }, "-=1.5")
    .from(
      botHeading,
      { autoAlpha: 0, y: 50, scale: 2, duration: 0.75 },
      "-=1.25"
    )
    .from(arrow, { autoAlpha: 0, duration: 0.75 }, "-=0.6")
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
