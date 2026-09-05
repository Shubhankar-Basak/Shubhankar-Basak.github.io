// Hamburger toggle
const menuToggle = document.querySelector('#mobile-menu');
const navContainer = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navContainer.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navContainer.classList.remove('active');
    });
});

// Fade-in for about rows
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.18 });

document.querySelectorAll('.about-row').forEach(r => {
    r.style.opacity = "0";
    r.style.transform = "translateY(60px)";
    r.style.transition = "all 1s ease-out";
    obs.observe(r);
});
