/*=============Toggle icon navbar==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

// Ensure the DOM is fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Typed.js
    var typed = new Typed(".multiple-text", {
        strings: ["Frontend Developer", "YouTuber", "Graphic Designer", "Video Editor"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000, 
        loop: true
    });

    // Get all sections and nav links
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Add event listener to window scroll
    window.addEventListener('scroll', () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
                });
            }
        });

        /*=============sticky navbar==========*/
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    /*=============remove toggle icon and navbar when click navbar link(scroll)==========*/
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('fa-x');
            navbar.classList.remove('active');
        });
    });
});
