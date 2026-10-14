const menuToggle = document.querySelector('#mobile-menu');
        const navContainer = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links a');

        // Toggle the mobile menu.
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.classList.toggle('active');

            navContainer.classList.toggle('active', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute(
                'aria-label',
                isOpen ? 'Close menu' : 'Open menu'
            );
        });

        // Close the mobile menu when a navigation link is clicked.
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navContainer.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open menu');
            });
        });

        // Close the mobile menu when the Escape key is pressed.
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                menuToggle.classList.remove('active');
                navContainer.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open menu');
            }
        });