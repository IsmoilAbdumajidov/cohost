$(document).ready(function () {
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        speed: 8000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            850: {
                items: 2,

            },

            1000: {
                items: 3,

            }
        }
    });
})

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false
    }
})

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    console.log(scrollHeight);


    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight * 4) {
        navbar.classList.add('fixed-nav');
        // navbar.style.backgroundColor='red';
        // console.log('success');
    } else {
        navbar.classList.remove('fixed-nav');
        // navbar.style.backgroundColor='black';
        // console.log('failed');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})
