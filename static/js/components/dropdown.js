function initDropdowns() {
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

function openDropdown(dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
    }

function closeDropdown(dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
    }

function closeAllDropdowns() {
        const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
        openDropdowns.forEach(menu => {
            const dropdown = menu.closest('.dropdown');
            this.closeDropdown(dropdown);
        });
    }