function showToast(message, type = 'info', duration = 3000) {
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
function createToastContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container position-fixed top-0 end-0 p-5';
        container.style.zIndex = '1070';
        document.body.appendChild(container);
        return container;
    }
