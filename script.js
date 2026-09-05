//Typing Animation
        var typed = new Typed('#typing-text', {
            strings: ['Web Developer', 'UI/UX Designer', 'Problem Solver'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });

        const menuToggle = document.querySelector('#mobile-menu');
        const navContainer = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navContainer.classList.toggle('active');
        });

        const navItems = document.querySelectorAll('.nav-links a');

        navItems.forEach((item) => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navContainer.classList.remove('active');
            });
        });
