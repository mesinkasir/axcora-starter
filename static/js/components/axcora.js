// ===== AXCORA FRAMEWORK JAVASCRIPT - MODERN & COMPLETE =====

class FrameworkJS {
    constructor() {
        this.init();
    }

    init() {
        // Initialize all components when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        this.initTheme();
        this.initNavbar();
        this.initDropdowns();
        this.initTabs();
        this.initModals();
        this.initSearch();
        this.initAccordions();
        this.initCarousels();
        this.initScrollspy();
        this.initForms();
        this.initSmoothScrolling();
        this.initLiteEmbeds();
        console.log('🚀 Axcora Framework JS initialized successfully!');
    }

    // ===== THEME SYSTEM =====
    initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        this.updateThemeButton(savedTheme);
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = html.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                html.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                this.updateThemeButton(newTheme);
                
                // Dispatch theme change event
                window.dispatchEvent(new CustomEvent('themeChanged', { 
                    detail: { theme: newTheme } 
                }));
            });
        }
    }

    updateThemeButton(theme) {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.innerHTML = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
        }
    }

    // ===== NAVBAR RESPONSIVE =====
    initNavbar() {
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

    // ===== DROPDOWN SYSTEM =====
    initDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            if (toggle && menu) {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other dropdowns
                    this.closeAllDropdowns();
                    
                    // Toggle current dropdown
                    const isOpen = menu.classList.contains('show');
                    if (isOpen) {
                        this.closeDropdown(dropdown);
                    } else {
                        this.openDropdown(dropdown);
                    }
                });
                
                // Close dropdown when clicking item
                const items = menu.querySelectorAll('.dropdown-item');
                items.forEach(item => {
                    item.addEventListener('click', () => {
                        this.closeDropdown(dropdown);
                    });
                });
            }
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            this.closeAllDropdowns();
        });
    }

    openDropdown(dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
    }

    closeDropdown(dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
    }

    closeAllDropdowns() {
        const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
        openDropdowns.forEach(menu => {
            const dropdown = menu.closest('.dropdown');
            this.closeDropdown(dropdown);
        });
    }

    // ===== TABS SYSTEM =====
initTabs() {
    const tabLinks = document.querySelectorAll('.nav-tabs .nav-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Save both scroll positions
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;

            e.preventDefault();

            // Remove focus immediately
            link.blur();

            // Tab switch logic
            const navTabs = link.closest('.nav-tabs');
            const allLinks = navTabs.querySelectorAll('.nav-link');
            allLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            let tabContent = navTabs.nextElementSibling;
            while (tabContent && !tabContent.classList.contains('tab-content')) {
                tabContent = tabContent.nextElementSibling;
            }
            if (!tabContent) tabContent = navTabs.parentElement.querySelector('.tab-content');
            if (!tabContent) return;

            const allPanes = tabContent.querySelectorAll('.tab-pane');
            allPanes.forEach(pane => pane.classList.remove('active'));
            const targetId = link.getAttribute('href').replace('#', '');
            const targetPane = tabContent.querySelector('#' + targetId);
            if (targetPane) targetPane.classList.add('active');

            window.dispatchEvent(new CustomEvent('tabChanged', { detail: { activeTab: targetId } }));

            // Scroll lock: try to "freeze" the viewport during tab switching 
            let lockScroll = true;
            let lockCount = 0;
            const lockInterval = setInterval(() => {
                if (lockCount >= 10) {
                    clearInterval(lockInterval);
                    lockScroll = false;
                    return;
                }
                window.scrollTo(scrollX, scrollY);
                lockCount++;
            }, 10);

            // One last unlock after images/render!
            setTimeout(() => {
                window.scrollTo(scrollX, scrollY);
            }, 300);
        });
    });
}


    // ===== MODAL SYSTEM =====
    initModals() {
        // Open modal triggers
        const modalTriggers = document.querySelectorAll('[data-bs-toggle="modal"]');
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = trigger.getAttribute('data-bs-target').substring(1);
                this.openModal(targetId);
            });
        });
        
        // Close modal triggers
        const closeButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                if (modal) {
                    this.closeModal(modal.id);
                }
            });
        });
        
        // Close modal when clicking backdrop
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id);
                }
            });
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
                    this.closeModal(openModal.id);
                }
            }
        });
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            // Create backdrop
            const backdrop = document.createElement('div');
            backdrop.className = 'modal-backdrop';
            backdrop.id = `${modalId}-backdrop`;
            document.body.appendChild(backdrop);
            
            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            // Focus on modal
            modal.setAttribute('tabindex', '-1');
            modal.focus();
            
            // Dispatch modal open event
            window.dispatchEvent(new CustomEvent('modalOpened', {
                detail: { modalId }
            }));
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        const backdrop = document.getElementById(`${modalId}-backdrop`);
        
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
            
            if (backdrop) {
                backdrop.remove();
            }
            
            // Dispatch modal close event
            window.dispatchEvent(new CustomEvent('modalClosed', {
                detail: { modalId }
            }));
        }
    }

    // ===== ACCORDION SYSTEM =====
    initAccordions() {
        const accordionButtons = document.querySelectorAll('.accordion-button');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const accordion = button.closest('.accordion');
                const item = button.closest('.accordion-item');
                const collapse = item.querySelector('.accordion-collapse');
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                
                // Close all other items in this accordion
                const allItems = accordion.querySelectorAll('.accordion-item');
                allItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherButton = otherItem.querySelector('.accordion-button');
                        const otherCollapse = otherItem.querySelector('.accordion-collapse');
                        
                        otherButton.setAttribute('aria-expanded', 'false');
                        otherCollapse.style.height = '0px';
                    }
                });
                
                // Toggle current item
                if (isExpanded) {
                    button.setAttribute('aria-expanded', 'false');
                    collapse.style.height = '0px';
                } else {
                    button.setAttribute('aria-expanded', 'true');
                    collapse.style.height = collapse.scrollHeight + 'px';
                }
            });
        });
    }

    // ===== CAROUSEL SYSTEM =====
    initCarousels() {
        const carousels = document.querySelectorAll('.carousel');
        
        carousels.forEach(carousel => {
            let currentSlide = 0;
            const slides = carousel.querySelectorAll('.carousel-item');
            const indicators = carousel.querySelectorAll('.carousel-indicators button');
            const prevBtn = carousel.querySelector('.carousel-control-prev');
            const nextBtn = carousel.querySelector('.carousel-control-next');
            
            if (slides.length === 0) return;
            
            // Auto-play setup
            let autoPlayInterval;
            const autoPlay = carousel.hasAttribute('data-bs-ride');
            const interval = parseInt(carousel.getAttribute('data-bs-interval')) || 5000;
            
            // Initialize first slide
            slides[0].classList.add('active');
            if (indicators.length > 0) {
                indicators[0].classList.add('active');
            }
            
            const showSlide = (index) => {
                // Remove active from all
                slides.forEach(slide => slide.classList.remove('active'));
                indicators.forEach(indicator => indicator.classList.remove('active'));
                
                // Add active to target
                slides[index].classList.add('active');
                if (indicators[index]) {
                    indicators[index].classList.add('active');
                }
                
                currentSlide = index;
            };
            
            const nextSlide = () => {
                const next = (currentSlide + 1) % slides.length;
                showSlide(next);
            };
            
            const prevSlide = () => {
                const prev = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(prev);
            };
            
            // Event listeners
            if (nextBtn) {
                nextBtn.addEventListener('click', nextSlide);
            }
            
            if (prevBtn) {
                prevBtn.addEventListener('click', prevSlide);
            }
            
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => showSlide(index));
            });
            
            // Auto-play
            if (autoPlay) {
                const startAutoPlay = () => {
                    autoPlayInterval = setInterval(nextSlide, interval);
                };
                
                const stopAutoPlay = () => {
                    clearInterval(autoPlayInterval);
                };
                
                startAutoPlay();
                
                carousel.addEventListener('mouseenter', stopAutoPlay);
                carousel.addEventListener('mouseleave', startAutoPlay);
            }
        });
    }

    // ===== SEARCH SYSTEM =====
    initSearch() {
        const searchBox = document.getElementById('searchBox');
        const searchResults = document.getElementById('searchResults');

        if (!searchBox || !searchResults) return;

        let searchIndex = [];
        let searchTimeout;
        
        // Load search index
        fetch('/search.json')
            .then(response => response.json())
            .then(data => {
                searchIndex = data;
            })
            .catch(err => {
            });

        searchBox.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();
            if (query.length < 2) {
                searchResults.style.display = 'none';
                searchResults.innerHTML = '';
                return;
            }
            searchTimeout = setTimeout(() => {
                // Agar aman dari null/undefined
                const safe = str => (typeof str === 'string' ? str : '');
                const results = searchIndex.filter(item =>
                    safe(item.title).toLowerCase().includes(query.toLowerCase()) ||
                    safe(item.description).toLowerCase().includes(query.toLowerCase()) ||
                    (Array.isArray(item.tags) && item.tags.some(tag => safe(tag).toLowerCase().includes(query.toLowerCase()))) ||
                    safe(item.category).toLowerCase().includes(query.toLowerCase())
                ).slice(0, 5);

                if (results.length > 0) {
                    searchResults.innerHTML = results.map(result => `
                        <div class="p-3 row">
                        <a href="${result.url}" class="card rounded col-12 p-3 text-decoration-none">
                            <div class="search-result-title">${result.title}</div>
                            <div class="search-result-description">${safe(result.description).substring(0, 150)}...</div>
                            <div class="search-result-meta">
                                 ${safe(result.date)}
                                ${result.tags && result.tags.length > 0 ? ` • 🏷️ ${result.tags.slice(0, 3).map(safe).join(', ')}` : ''}
                            </div>
                        </a>
                        </div>
                    `).join('');
                    searchResults.style.display = 'block';
                } else {
                    searchResults.innerHTML = `<div style="padding: 1rem; text-align: center; color: var(--text-muted, #888); font-style: italic;">No results found for "<b>${query}</b>"</div>`;
                    searchResults.style.display = 'block';
                }
            }, 300);
        });

        // Hide search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                searchResults.style.display = 'none';
            }
        });
        // Shortcut: Ctrl+K/Cmd+K to focus search
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                if (searchBox) searchBox.focus();
            }
            if (e.key === 'Escape') {
                searchResults.style.display = 'none';
            }
        });
    }


    // ===== SCROLLSPY SYSTEM =====
    initScrollspy() {
        const scrollspyNav = document.querySelector('.scrollspy-nav');
        if (!scrollspyNav) return;
        
        const links = scrollspyNav.querySelectorAll('a');
        const sections = Array.from(links).map(link => 
            document.querySelector(link.getAttribute('href'))
        ).filter(section => section !== null);
        
        if (sections.length === 0) return;
        
        const updateActiveSection = () => {
            const scrollPos = window.scrollY + 100;
            
            let activeSection = sections[0];
            sections.forEach(section => {
                if (section.offsetTop <= scrollPos) {
                    activeSection = section;
                }
            });
            
            // Update active state
            links.forEach(link => link.classList.remove('active'));
            const activeLink = scrollspyNav.querySelector(`a[href="#${activeSection.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        };
        
        // Throttle scroll event
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateActiveSection();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        updateActiveSection(); // Initial call
    }

    // ===== FORM VALIDATION =====
    initForms() {
        const forms = document.querySelectorAll('.needs-validation');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!form.checkValidity()) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                form.classList.add('was-validated');
            });
        });
        
        // Real-time validation for inputs
        const inputs = document.querySelectorAll('.form-control, .form-select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value.trim()) {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                } else {
                    input.classList.remove('is-valid');
                    input.classList.add('is-invalid');
                }
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('is-invalid') || input.classList.contains('is-valid')) {
                    if (input.value.trim()) {
                        input.classList.remove('is-invalid');
                        input.classList.add('is-valid');
                    } else {
                        input.classList.remove('is-valid');
                        input.classList.add('is-invalid');
                    }
                }
            });
        });
    }

    // ===== SMOOTH SCROLLING =====
    initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===== UTILITY METHODS =====
    
    // Show toast notification
    showToast(message, type = 'info', duration = 3000) {
        const toastContainer = document.querySelector('.toast-container') || this.createToastContainer();
        
        const toast = document.createElement('div');
        toast.className = `toast align-items-center text-white bg-${type} border-0`;
        toast.setAttribute('role', 'alert');
        toast.innerHTML = `
            <div class="d-flex p-3">
                <div class="toast-body p-5">${message}</div>
                <button type="button" class="btn-close btn-close-white btn-sm me-2 m-auto" aria-label="Close"></button>
            </div>
        `;
        
        toastContainer.appendChild(toast);
        
        // Show toast
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Auto hide
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
        
        // Manual close
        const closeBtn = toast.querySelector('.btn-close');
        closeBtn.addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        });
    }
    
    createToastContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container position-fixed top-0 end-0 p-5';
        container.style.zIndex = '1070';
        document.body.appendChild(container);
        return container;
    }
    
    // Loading state for buttons
    setButtonLoading(button, loading = true) {
        if (loading) {
            button.disabled = true;
            button.dataset.originalText = button.innerHTML;
            button.innerHTML = '<span class="spinner spinner-sm spinner-border me-2"></span>Loading...';
        } else {
            button.disabled = false;
            button.innerHTML = button.dataset.originalText;
        }
    }
    
    // Animate elements on scroll
    animateOnScroll() {
        const elements = document.querySelectorAll('[data-animate]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = entry.target.dataset.animate;
                    entry.target.style.animation = animation;
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(el => observer.observe(el));
    }

initLiteEmbeds() {
  document.querySelectorAll('.youtube-lite').forEach(el => {
    // Cek kalau sudah diinisialisasi, skip
    if (el.classList.contains('yt-initialized')) return;
    el.classList.add('yt-initialized');

    // Ambil ID dan Judul
    const videoId = el.dataset.ytid;
    const title = el.dataset.title || 'YouTube Video';

    // Buat thumbnail & button
    const thumbDiv = document.createElement('div');
    thumbDiv.className = 'youtube-lite-thumb';
    thumbDiv.style.backgroundImage = `url('https://i.ytimg.com/vi/${videoId}/hqdefault.jpg')`;

    const playBtn = document.createElement('button');
    playBtn.type = 'button';
    playBtn.className = 'youtube-lite-play';
    playBtn.setAttribute('aria-label', `Play: ${title}`);

    const label = document.createElement('span');
    label.className = 'youtube-lite-label';
    label.textContent = title;

    el.innerHTML = '';
    el.appendChild(thumbDiv);
    el.appendChild(playBtn);
    el.appendChild(label);

    // Klik: replace thumb dengan iframe
    el.addEventListener('click', function handleLiteClick(e) {
      if (el.classList.contains('yt-activated')) return;
      el.classList.add('yt-activated');
      el.innerHTML = `<iframe width="560" height="315"
        src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0"
        title="${title}"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
        ></iframe>`;
    }, { once: true });
  });
}



}



// ===== INITIALIZE FRAMEWORK =====
const Framework = new FrameworkJS();

// ===== GLOBAL UTILITIES =====
window.Framework = {
    showToast: (message, type, duration) => Framework.showToast(message, type, duration),
    setButtonLoading: (button, loading) => Framework.setButtonLoading(button, loading),
    openModal: (modalId) => Framework.openModal(modalId),
    closeModal: (modalId) => Framework.closeModal(modalId),
    closeAllDropdowns: () => Framework.closeAllDropdowns()
};
