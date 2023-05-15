'use strict';

//RELOAD BACK TO THE TOP
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

//HERO ANIMATION
const topHeading = document.querySelector('.top-heading');
const botHeading = document.querySelector('.bot-heading');
const navLinks = document.querySelectorAll('.header__link');
const mobileBtn = document.querySelector('.mobile-nav-btn');
const logo = document.querySelector('.header__logo');
const heroImg = document.querySelector('.hero__img');
const arrow = document.querySelector('.hero__arrow');
const heroSection = document.querySelector('.hero-section');

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
    .to(heroSection, { clipPath: 'circle(100% at 50% 50%)', duration: 2.25 })
    .from(topHeading, { autoAlpha: 0, x: -50, duration: 0.75 }, '-=1.75')
    .from(heroImg, { autoAlpha: 0, duration: 0.75 }, '-=1.5')
    .from(
      botHeading,
      { autoAlpha: 0, y: 50, scale: 2, duration: 0.75 },
      '-=1.25'
    )
    .from(arrow, { autoAlpha: 0, duration: 0.75 }, '-=0.6')
    .from(
      navLinks,
      { autoAlpha: 0, y: -50, duration: 0.5, stagger: 0.1 },
      '-=0.25'
    )
    .from(logo, { autoAlpha: 0, y: -50 }, '<')
    .from(mobileBtn, { autoAlpha: 0, y: -50 }, '<');
};

window.addEventListener('load', revealAnimation);

//STICKY NAVIGATION
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

const observer = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      header.classList.add('observe-scroll');
    } else {
      header.classList.remove('observe-scroll');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-200px',
  }
);

observer.observe(hero);

//MOBILE NAVIGATION
const navLinksContainer = document.querySelector('.header-nav');
const mobileBtnIcon = document.querySelector('.mobile-nav-icon');

const openNav = () => {
  navLinksContainer.classList.toggle('header-nav-open');

  if (navLinksContainer.classList.contains('header-nav-open')) {
    mobileBtnIcon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    mobileBtnIcon.classList.replace('fa-xmark', 'fa-bars');
  }
};

mobileBtn.addEventListener('click', openNav);

//NAVIGATION SCROLLTO USING EVENT DELEGATION

const linksParent = document.querySelector('.header-nav__list');
console.log(linksParent);

linksParent.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('header__link')) {
    navLinksContainer.classList.remove('header-nav-open');
    mobileBtnIcon.classList.replace('fa-xmark', 'fa-bars');

    const targetName = event.target.getAttribute('href');
    gsap.to(window, { duration: 0.75, scrollTo: `${targetName}` });
  }
});

//BOX REVEALS

const box = document.querySelector('.box');
const tools = document.querySelector('.toggle-wrapper');
const curlyArrow = document.querySelector('.curly-arrow');

const toggle = () => {
  tools.classList.toggle('box-toggle');
  curlyArrow.classList.toggle('hide');

  if (tools.classList.contains('box-toggle')) {
    box.classList.replace('fa-box', 'fa-box-open');
  } else {
    box.classList.replace('fa-box-open', 'fa-box');
  }
};

const boxReveal = () => {
  toggle();
};

const boxRevealKeyPress = (e) => {
  if (e.key === 'Enter') {
    toggle();
  }
};

box.addEventListener('click', boxReveal);
box.addEventListener('keydown', boxRevealKeyPress);

// SCROLL TRIGGERS

const sectionContents = document.querySelectorAll('.section-content');
const projects = document.querySelectorAll('.project');

sectionContents.forEach((section) => {
  gsap.from(section, {
    autoAlpha: 0,
    duration: 1.5,
    y: 20,
    scale: 0.85,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 75%',
      end: 'bottom top',
      toggleActions: 'play reverse play reverse',
    },
  });
});

projects.forEach((project, index) => {
  if (index % 2) {
    gsap.from(project, {
      autoAlpha: 0,
      duration: 1,
      x: 20,
      scrollTrigger: {
        trigger: project,
        start: 'top 75%',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse',
      },
    });
  } else {
    gsap.from(project, {
      autoAlpha: 0,
      duration: 1,
      x: -20,
      scrollTrigger: {
        trigger: project,
        start: 'top 75%',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse',
      },
    });
  }
});
