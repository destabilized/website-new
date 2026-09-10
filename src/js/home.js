document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');
    const sections = document.querySelectorAll('.content-section');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            sections.forEach(s => s.classList.toggle('hidden', s.id !== target));
        });
    });

    const postContainer = document.querySelector('.posts-list');
    if (!postContainer || typeof blogPosts === 'undefined') return;

    const recentPosts = blogPosts.slice(0, 2);
    postContainer.innerHTML = '';

    recentPosts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'post-item';
        article.innerHTML = `
            <div class="post-header">
                <a href="${post.href}" class="post-title-link">
                    <h3>${post.title}</h3>
                </a>
                <p>${post.preview}</p>
                <div class="tags">
                    ${post.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
            <div class="post-meta">
                <div class="meta-info">
                    <span class="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                        ${post.date}
                    </span>
                </div>
            </div>
        `;
        postContainer.appendChild(article);
    });
});