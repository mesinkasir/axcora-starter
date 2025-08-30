function updateThemeButton(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
}

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeButton(newTheme);
            
            // Dispatch theme change event
            window.dispatchEvent(new CustomEvent('themeChanged', { 
                detail: { theme: newTheme } 
            }));
        });
    }
}
document.addEventListener('DOMContentLoaded', initTheme);