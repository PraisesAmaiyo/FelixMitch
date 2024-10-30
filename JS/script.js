const btnNavEl = document.querySelector('.btn-mobile-nav');
const allLinks = document.querySelectorAll('a:link');
const headerEl = document.querySelector('.navigation-header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
      e.preventDefault();
    }

    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

// Sticky Navigation
const navigationHeader = document.querySelector('.navigation-header');
const initialNavigation = document.querySelector('.initial-navigation');
const stickyNavigation = document.querySelector('.sticky-nav');
const sectionHero = document.querySelector('.section-hero');

document.addEventListener('DOMContentLoaded', function () {
  let lastScrollTop = 0;

  function handleScroll() {
    const scrollTop = window.scrollY;

    if (scrollTop > 40 && scrollTop > lastScrollTop) {
      navigationHeader.classList.add('sticky-nav');
      navigationHeader.classList.remove('initial-navigation');
    } else if (scrollTop <= 40 && scrollTop < lastScrollTop) {
      navigationHeader.classList.remove('sticky-nav');
      navigationHeader.classList.add('initial-navigation');
    }

    lastScrollTop = scrollTop;
  }

  window.addEventListener('scroll', handleScroll);
});

// JavaScript for the slideshow transitions
const images = document.querySelectorAll('.slideshow-image');
let currentIndex = 0;

if (images.length > 0) {
  //   console.log(images.length);

  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add('active');
  }

  // Change image every 6 seconds
  setInterval(showNextImage, 6000);
}

// Project Swiper images
document.querySelectorAll('.project-slide_overlay').forEach((el) => {
  const bg = el.getAttribute('data-bg');
  if (bg) {
    el.style.backgroundImage = `url(${bg})`;
  }
});

// Pquipment Swiper images
document.querySelectorAll('.equipment-slide_overlay').forEach((el) => {
  const bg = el.getAttribute('data-bg');
  if (bg) {
    el.style.backgroundImage = `url(${bg})`;
  }
});
