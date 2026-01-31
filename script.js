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
const contactForm = document.getElementById("my-form");
const formStatus = document.getElementById("form-status");

async function handleFormSubmit(event) {
    event.preventDefault(); 
    const data = new FormData(event.target);
    
    // Reset status for a new attempt
    formStatus.style.display = "block";
    formStatus.style.opacity = "1";
    formStatus.style.color = "var(--text-gray)";
    formStatus.innerText = "Sending your message...";

    fetch(event.target.action, {
        method: contactForm.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            // SUCCESS CASE
            formStatus.innerText = "Thanks! Your message has been sent.";
            formStatus.style.color = "#00acee"; 
            contactForm.reset(); 
        } else {
            // REJECT / PROBLEM CASE
            formStatus.innerText = "Oops! Something went wrong.";
            formStatus.style.color = "#ff4d4d";
        }
    }).catch(error => {
        // NETWORK ERROR CASE
        formStatus.innerText = "Error connecting to server.";
        formStatus.style.color = "#ff4d4d";
    }).finally(() => {
        // --- THIS RUNS FOR BOTH SUCCESS AND REJECT ---
        setTimeout(() => {
            formStatus.style.transition = "opacity 1s ease";
            formStatus.style.opacity = "0";
            setTimeout(() => {
                formStatus.style.display = "none";
            }, 1000); // Wait for transition to finish
        }, 5000); // Show message for 5 seconds
    });
}

contactForm.addEventListener("submit", handleFormSubmit);

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
