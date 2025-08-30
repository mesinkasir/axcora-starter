function initSearch() {
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
    document.addEventListener('DOMContentLoaded', initSearch);
