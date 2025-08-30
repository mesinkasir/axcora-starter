function initAccordions() {
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