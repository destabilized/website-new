document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('posts-container');
    if (!container) return;

    const searchInput = document.querySelector('.search-input');
    const clearBtn = document.querySelector('.clear-btn');
    const sortSelect = document.querySelector('.sort-select');
    if (!searchInput || !clearBtn || !sortSelect) return;

    const calculateReadTime = (text) => {
        const wordsPerMinute = 200;
        const words = text.split(/\s+/).length;
        return Math.ceil(words / wordsPerMinute) + 2;
    };

    const renderPosts = (filterText = '', sortBy = 'newest') => {
        const searchStr = filterText.toLowerCase();
        let filtered = blogPosts.filter(post =>
            post.title.toLowerCase().includes(searchStr) ||
            post.preview.toLowerCase().includes(searchStr) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchStr))
        );

        filtered.sort((a, b) => {
            const parseDate = (d) => new Date(d.replace(/th,|st,|rd,|nd,/g, ','));
            return sortBy === 'newest'
                ? parseDate(b.date) - parseDate(a.date)
                : parseDate(a.date) - parseDate(b.date);
        });

        if (filtered.length === 0) {
            container.innerHTML = `<p class="no-results">No posts found matching "${filterText}"</p>`;
            return;
        }

        container.innerHTML = filtered.map(post => {
            const readTime = calculateReadTime(post.preview);

            const allTags = post.tags.length === 1 && post.tags[0].includes(',')
                ? post.tags[0].split(',').map(t => t.trim())
                : post.tags;

            const visibleTags = allTags.slice(0, 3);
            const extraTagsCount = allTags.length - 3;
            const extraTags = allTags.slice(3);

            return `
            <article class="post-card">
                <div class="post-content-left">
                    <a href="${post.href}" class="post-title">
                        <h3>${post.title}</h3>
                    </a>
                    <p class="post-preview">${post.preview}</p>
                    <div class="post-tags">
                        ${visibleTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        ${extraTagsCount > 0 ? `
                        <div class="extra-tags-wrapper">
                            <span class="tag extra">+${extraTagsCount}</span>
                            <div class="extra-tags-tooltip">
                                ${extraTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>

                <div class="post-metadata-right">
                    <div class="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <span>${post.date}</span>
                    </div>
                    <div class="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span>${readTime} min read</span>
                    </div>
                </div>
            </article>
            `;
        }).join('');
    };

    searchInput.addEventListener('input', (e) => {
        renderPosts(e.target.value, sortSelect.value);
    });

    sortSelect.addEventListener('change', (e) => {
        renderPosts(searchInput.value, e.target.value);
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        renderPosts('', sortSelect.value);
    });

    renderPosts();
});

window.addEventListener('pageshow', () => {
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.value = 'newest';
    }
});