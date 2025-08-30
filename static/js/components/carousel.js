function initCarousels() {
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