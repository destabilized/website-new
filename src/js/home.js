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
                        ${postIcons.calendar}
                        ${post.date}
                    </span>
                </div>
            </div>
        `;
        postContainer.appendChild(article);
    });
});