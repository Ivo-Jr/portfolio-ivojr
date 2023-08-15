const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links li a');

let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
let header = document.getElementById('header');

function createSwiper(container, pagination, nextButton, prevButton) {
  return new Swiper(container, {
    slidesPerView: handleWitdh(),
    spaceBetween: 30,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  })
}

function handleWitdh() {
  let getWidth = window.innerWidth || document.documentElement.clientWidth;
  let slidesShow = 3;

  if (getWidth < 1001) {
    slidesShow = 2;
  }

  if (getWidth < 700) {
    slidesShow = 1;
  }

  return slidesShow
}

menuHamburguer.addEventListener('click', () => {
  nav.classList.toggle('active');
});

links.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
})

window.addEventListener('resize', () => {
  swiper.params.slidesPerView = handleWitdh();
  swiper.update();
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    header.style.background = '#191919'
  } else {
    header.style.background = 'transparent'
  }
});
