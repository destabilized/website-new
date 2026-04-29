document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Logic (Keep this inside DOMContentLoaded so it fires fast)
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('.theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    document.documentElement.setAttribute('data-theme', currentTheme);
    if (themeIcon) themeIcon.textContent = currentTheme === 'light' ? '☀️' : '🌙';

    themeBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '☀️';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '🌙';
        }
    });

    // 2. Tab Toggling (Keep here for immediate interactivity)
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

    // 3. Inject Post Shells (Create the HTML immediately, but don't fetch data yet)
    const postContainer = document.querySelector('.posts-list');
    if (postContainer && typeof posts !== 'undefined') {
        const recentPosts = posts.slice(0, 2); 
        postContainer.innerHTML = ''; 

        recentPosts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'post-item';
            article.innerHTML = `
                <div class="post-header">
                    <a href="${post.href}" style="text-decoration: none; color: inherit;">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                            ${post.date}
                        </span>
                        <div class="dynamic-meta" data-link="${post.href}"></div>
                    </div>
                </div>
            `;
            postContainer.appendChild(article);
        });
    }
});

/**
 * 4. HEAVY LIFTING: Run after everything else is finished loading.
 * This breaks the "Critical Request Chain" Lighthouse was complaining about.
 */
window.addEventListener('load', () => {
    initRecentMeta();
});

function initRecentMeta() {
    const metaPlaceholders = document.querySelectorAll(".dynamic-meta");
    
    metaPlaceholders.forEach(div => {
        const link = div.getAttribute('data-link');
        const cacheKey = `postMeta:${link}`;
        const cachedData = JSON.parse(localStorage.getItem(cacheKey));
        const today = new Date().toISOString().slice(0, 10);

        const updateHTML = (data) => {
            div.innerHTML = `
                <span class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    ${data.readingTime} min read
                </span>
                <span class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper"><path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>
                    ${data.wordCount} words
                </span>
            `;
        };

        if (cachedData && cachedData.scrapedDate === today) {
            updateHTML(cachedData);
        } else {
            fetch(link)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, "text/html");
                    const content = doc.querySelector(".yap")?.innerText || "";
                    const wordCount = content.trim().split(/\s+/).length;
                    const readingTime = Math.ceil(wordCount / 200);

                    const newData = { wordCount, readingTime, scrapedDate: today };
                    localStorage.setItem(cacheKey, JSON.stringify(newData));
                    updateHTML(newData);
                })
                .catch(() => { div.innerHTML = ""; });
        }
    });
}