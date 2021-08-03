'use strict';

new Swiper('.section-slider', {
    navigation: {
        nextEl: '.section-slider__btn-next',
        prevEl: '.section-slider__btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        200: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        650: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1160: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
});

new Swiper('.catalog__slider', {
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.catalog__slider-next',
        prevEl: '.catalog__slider-prev',
    },

    breakpoints: {
        320: {
            spaceBetween: 15
        },
        800: {
            spaceBetween: 24
        }
    }
});


const mixer = mixitup('.catalog__items');


const iconMenu = document.querySelector('.header__hamburger');
if (iconMenu) {
    const menuBody = document.querySelector('.menu');
    iconMenu.addEventListener('click', function () {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}






