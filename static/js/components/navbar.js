function initNavbar() {
        const navToggler = document.getElementById('navToggler');
        const navbarNav = document.getElementById('navbarNav');
        
        if (navToggler && navbarNav) {
            navToggler.addEventListener('click', () => {
                navbarNav.classList.toggle('show');
                navToggler.setAttribute('aria-expanded', 
                    navbarNav.classList.contains('show'));
            });
            
            // Close navbar when clicking a link (mobile)
            const navLinks = navbarNav.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        navbarNav.classList.remove('show');
                        navToggler.setAttribute('aria-expanded', 'false');
                    }
                });
            });
            
            // Close navbar when clicking outside
            document.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    if (!navToggler.contains(e.target) && !navbarNav.contains(e.target)) {
                        navbarNav.classList.remove('show');
                        navToggler.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        }
    }
