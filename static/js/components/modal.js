function  initModals() {
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
function openModal(modalId) {
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

function closeModal(modalId) {
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