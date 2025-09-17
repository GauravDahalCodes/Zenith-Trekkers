document.addEventListener('DOMContentLoaded', function() {
    // Testimonials Slider
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Set default to 1
        spaceBetween: 30,
        loop: true,
        centeredSlides: true, // Center the slide
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const hamburgerIcon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
});