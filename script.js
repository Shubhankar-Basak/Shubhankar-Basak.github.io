const navLinks = document.querySelectorAll('nav a');
        window.addEventListener('scroll', () => {
            let current = "";
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
        //Typing Animation
        var typed = new Typed('#typing-text', {
            strings: ['Web Developer', 'UI/UX Designer', 'Problem Solver'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
        const menuToggle = document.querySelector('#mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

// Toggle Menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// Close menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
    });
});

const modal = document.getElementById("projectModal");

function openModal() {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevents background scrolling
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restores scrolling
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
