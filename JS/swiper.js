var swiper = new Swiper('.swiper-3', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  freeMode: true,
  centeredSlides: true,
  //   loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  grid: {
    rows: 2,
  },
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.mySwiper-2', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.swiper-3', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  freeMode: true,
  centeredSlides: true,
  //   loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.swiper-4', {
  slidesPerView: 2,
  spaceBetween: 15,
  freeMode: true,
  centeredSlides: false,
  loop: true,
  //   autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Select all the elements you want to observe for animations
const statCards = document.querySelectorAll('.feature-card');

// Set up the observer options (you can tweak these if necessary)
const observerOptions = {
  root: null, // default to the viewport
  threshold: 0.1, // trigger when 10% of the element is visible
};

// Define the observer callback function
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target); // Optional: Stop observing once it's in view
    }
  });
};

// Create an observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Add each card to the observer with the fade-in class initially
statCards.forEach((card) => {
  card.classList.add('fade-in');
  observer.observe(card);
});
