const contactForm = document.getElementById("contact-form");
        const formStatus = document.getElementById("form-status");

        async function handleFormSubmit(event) {
            event.preventDefault();
            const data = new FormData(event.target);
            const submitBtn = document.getElementById("submit-btn");

            formStatus.style.display = "block";
            formStatus.style.opacity = "1";
            formStatus.style.color = "var(--text-gray)";
            formStatus.innerText = "Sending your message...";
            submitBtn.disabled = true;

            fetch(event.target.action, {
                method: contactForm.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    formStatus.innerText = "Thanks! Your message has been sent.";
                    formStatus.style.color = "var(--primary-blue)";
                    contactForm.reset();
                } else {
                    formStatus.innerText = "Oops! Something went wrong.";
                    formStatus.style.color = "var(--error-red)";
                }
            }).catch(error => {
                formStatus.innerText = "Error connecting to server.";
                formStatus.style.color = "var(--error-red)";
            }).finally(() => {
                submitBtn.disabled = false;
                setTimeout(() => {
                    formStatus.style.transition = "opacity 1s ease";
                    formStatus.style.opacity = "0";
                    setTimeout(() => {
                        formStatus.style.display = "none";
                    }, 1000);
                }, 5000);
            });
        }

        contactForm.addEventListener("submit", handleFormSubmit);

        // Entrance Animation
        window.addEventListener('load', () => {
            const grid = document.querySelector('.contact-grid');
            grid.style.opacity = "0";
            grid.style.transform = "translateY(30px)";
            grid.style.transition = "all 1s ease-out";
            setTimeout(() => {
                grid.style.opacity = "1";
                grid.style.transform = "translateY(0)";
            }, 150);
        });

        // Hamburger
        const menuToggle = document.querySelector('#mobile-menu');
        const navContainer = document.querySelector('.nav-links');
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navContainer.classList.toggle('active');
        });
