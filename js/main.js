document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle itinerary plan visibility
    const toggleButtons = document.querySelectorAll('.toggle-plan');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const plan = button.nextElementSibling;
            if (plan.style.display === 'block') {
                plan.style.display = 'none';
                button.textContent = 'View Day-by-Day Plan';
            } else {
                plan.style.display = 'block';
                button.textContent = 'Hide Day-by-Day Plan';
            }
        });
    });

    // Testimonials Slider
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
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

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) { // Check if elements exist
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});