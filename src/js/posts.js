const posts = [
  {
    title: "junior week 3/30 - 4/10",
    date: "apr. 9th, 2026",
    preview: "assuming everything works out, i should be done before june... hopefully?",
    href: "/blogs/junior-blogs/27+28",
    tags: ["keyboard", "shop tasks", "waterjet", "3d modeling", "cam"]
  },
  {
    title: "junior week 3/23 - 3/27",
    date: "mar. 26th, 2026",
    preview: "getting closer and closer",
    href: "/blogs/junior-blogs/26",
    tags: ["keyboard", "shop tasks", "3d printing", "resin printing"]
  },
  {
    title: "junior week 3/16 - 3/19",
    date: "mar. 18th, 2026",
    preview: "waterjetting is fun. someone should buy us a new computer becuase it's fucking windows 7",
    href: "/blogs/junior-blogs/25",
    tags: ["keyboard", "shop tasks", "waterjet"]
  },
  {
    title: "junior week 3/9 - 3/13",
    date: "mar. 12th, 2026",
    preview: "back to keycaps",
    href: "/blogs/junior-blogs/24",
    tags: ["keyboard", "3d modeling", "lasercutting"]
  },
  {
    title: "junior week 3/2 - 3/6",
    date: "mar. 5th, 2026",
    preview: "redesigning lol",
    href: "/blogs/junior-blogs/23",
    tags: ["keyboard", "3d modeling"]
  },
  {
    title: "junior week 2/25 - 2/27",
    date: "feb. 26th, 2026",
    preview: "locked in on the keyboard. gonna make out of aluminum soon omg!!!1",
    href: "/blogs/junior-blogs/22",
    tags: ["keyboard", "3d modeling", "3d printing", "lasercutting"]
  },
  {
    title: "junior week 2/9 - 2/13",
    date: "feb. 12th, 2026",
    preview: "making steno keyboard bc i'm bored and the resin printer sucks",
    href: "/blogs/junior-blogs/21",
    tags: ["keyboard", "steno", "cad", "kb2040"]
  },
  {
    title: "junior week 2/2 - 2/6",
    date: "feb. 5th, 2026",
    preview: "waiting on the printer so did some random stuff",
    href: "/blogs/junior-blogs/20",
    tags: ["keyboard", "misc", "reflow oven"]
  },
  {
    title: "junior week 1/28 - 1/30",
    date: "jan. 29th, 2026",
    preview: "keycap problems",
    href: "/blogs/junior-blogs/19",
    tags: ["keyboard", "3d printing", "3d modeling"]
  },
  {
    title: "junior week 1/21 - 1/23",
    date: "jan. 22nd, 2026",
    preview: "rant abt how much i hate sanding",
    href: "/blogs/junior-blogs/18",
    tags: ["keyboard", "resin printing","sanding"]
  },
  {
    title: "junior week 1/12 - 1/16",
    date: "jan. 15th, 2026",
    preview: "rant abt form 3 resin printer incoming",
    href: "/blogs/junior-blogs/17",
    tags: ["keyboard", "resin printing", "soldering"]
  },
  {
    title: "junior week 12/23 - 1/9",
    date: "jan. 8th, 2026",
    preview: "pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came pcb's came",
    href: "/blogs/junior-blogs/16",
    tags: ["keyboard", "soldering", "circuitpython", "3d modeling"]
  },
  {
    title: "junior week 12/15 - 12/19",
    date: "dec. 18th, 2025",
    preview: "stabilizers came + working on the case",
    href: "/blogs/junior-blogs/15",
    tags: ["keyboard", "3d modeling"]
  },
  {
    title: "junior week 12/8 - 12/12",
    date: "dec. 11th, 2025",
    preview: "low motivation",
    href: "/blogs/junior-blogs/14",
    tags: ["keyboard", "3d modeling", "pcbs", "3d printing"]
  },
  {
    title: "junior week 11/24 - 12/5",
    date: "dec. 4th, 2025",
    preview: "two weeks work bc thanksgiving week was legit 2.5 days",
    href: "/blogs/junior-blogs/13",
    tags: ["keyboard", "pcbs"]
  },
  {
    title: "junior week 11/17 - 11/21",
    date: "nov. 20th, 2025",
    preview: "downfall",
    href: "/blogs/junior-blogs/12",
    tags: ["macropad", "soldering"]
  },
  {
    title: "junior week 11/10 - 11/14",
    date: "nov. 10th, 2025",
    preview: "major updates. finally started pcb and almost done",
    href: "/blogs/junior-blogs/11",
    tags: ["macropad", "3d modeling"]
  },
  {
    title: "junior week 11/3 - 11/7",
    date: "nov. 6th, 2025",
    preview: "learning the kb2040 by using circuitpython",
    href: "/blogs/junior-blogs/10",
    tags: ["macropad", "circuitpython"]
  },
  {
    title: "junior week 10/27 - 10/30",
    date: "oct. 30th, 2025",
    preview: "creating a bomb and claiming that it's for a school project!",
    href: "/blogs/junior-blogs/9",
    tags: ["ap lang proj", "3d modeling", "3d printing"]
  },
  {
    title: "junior week 10/20 - 10/24",
    date: "oct. 23rd, 2025",
    preview: "printer stuff + macropad stuff bc it's been 3 weeks",
    href: "/blogs/junior-blogs/8",
    tags: ["printer", "macropad", "3d modeling"]
  },
  {
    title: "junior week 10/14 - 10/17",
    date: "oct. 16th, 2025",
    preview: "fixing a printer because nobody wants to spend $2k to buy a replacement motherboard",
    href: "/blogs/junior-blogs/7",
    tags: ["printer", "debugging"]
  },
  {
    title: "junior week 10/6 - 10/10",
    date: "oct. 9th, 2025",
    preview: "macropad work. new project",
    href: "/blogs/junior-blogs/6",
    tags: ["macropad", "schematic", "pcb"]
  },
  {
    title: "junior week 9/29 - 10/2",
    date: "oct. 1st, 2025",
    preview: "almost done yippie",
    href: "/blogs/junior-blogs/5",
    tags: ["7-seg", "pcb", "lasercutting"]
  },
  {
    title: "junior week 9/22 - 9/26",
    date: "sep 25th, 2025",
    preview: "i'm just a slave to doing tasks that the shop gives us",
    href: "/blogs/junior-blogs/4",
    tags: ["shop tasks", "keyboard"]
  },
  {
    title: "junior week 9/15 - 9/19",
    date: "sep 18th, 2025",
    preview: "even more work on my seven segment for this stupid sign lol",
    href: "/blogs/junior-blogs/3",
    tags: ["7-seg", "arduino", "schematic"]
  },
  {
    title: "junior week 9/8 - 9/12",
    date: "sep 11th, 2025",
    preview: "more work on my seven segment for this stupid sign lol",
    href: "/blogs/junior-blogs/2",
    tags: ["7-seg", "arduino"]
  },
  {
    title: "junior week 9/2 - 9/5",
    date: "sep 4th, 2025",
    preview: "helped around the shop, and reimaged a few computers",
    href: "/blogs/junior-blogs/1",
    tags: ["shop tasks", "7-seg"]
  },
  {
    title: "soph week 6/9 - 6/13",
    date: "jun 12th, 2025",
    preview: "helped around the shop, broke a few things on my computer somehow",
    href: "/blogs/soph-blogs/19",
    tags: ["shop tasks"]
  },
  {
    title: "soph week 6/2 - 6/6",
    date: "jun 5th, 2025",
    preview: "my final zerømouse post. i decided to scrap the project after this",
    href: "/blogs/soph-blogs/18",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 5/26 - 5/30",
    date: "may 30th, 2025",
    preview: "zerømouse updates! yaayayya i definitely don't hate my life!",
    href: "/blogs/soph-blogs/17",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 5/12 - 5/16",
    date: "may 17th, 2025",
    preview: "recap of the final moments before sumobot competition. end of sumobot.",
    href: "/blogs/soph-blogs/16",
    tags: ["sumobot"]
  },
  {
    title: "soph week 5/5 - 5/9",
    date: "may 8th, 2025",
    preview: "restarting because i'm stupid. zerømouse updates yet again",
    href: "/blogs/soph-blogs/15",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 4/28 - 5/2",
    date: "may 1st, 2025",
    preview: "may have broke the pcb on the mouse i was using... zerømouse updates",
    href: "/blogs/soph-blogs/14",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 4/14 - 4/18",
    date: "apr. 16th, 2025",
    preview: "made the grip for the zerømouse. won't be here tomorrow, so earlier blog post",
    href: "/blogs/soph-blogs/13",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 4/7 - 4/10",
    date: "apr. 10th, 2025",
    preview: "zerømouse and sumobot updates. primarily zerømouse.",
    href: "/blogs/soph-blogs/12",
    tags: ["sumobot", "mouse"]
  },
  {
    title: "soph week 4/1 - 4/4",
    date: "apr. 3rd, 2025",
    preview: "made triggers for my zerømouse and test printed new bases.",
    href: "/blogs/soph-blogs/11",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 3/24 - 3/28",
    date: "mar. 27th, 2025",
    preview: "sumobot schematic and zerømouse updates.",
    href: "/blogs/soph-blogs/10",
    tags: ["sumobot", "mouse"]
  },
  {
    title: "soph week 3/17 - 3/21",
    date: "mar. 20th, 2025",
    preview: "started creating the pcb for the sumobot. gonna get it milled soon",
    href: "/blogs/soph-blogs/9",
    tags: ["sumobot"]
  },
  {
    title: "soph week 3/3 - 3/14",
    date: "mar. 13th, 2025",
    preview: "new project: sumobot competition. an overview about our plans",
    href: "/blogs/soph-blogs/8",
    tags: ["sumobot"]
  },
  {
    title: "soph week 2/24 - 2/28",
    date: "feb. 27th, 2025",
    preview: "new project: zerømouse. a replica inspired by optimum tech's zerømouse.",
    href: "/blogs/soph-blogs/7",
    tags: ["zerømouse"]
  },
  {
    title: "soph week 2/3 - 2/7",
    date: "feb. 7th, 2025",
    preview: "finishing touches of the acrylic piece of my lightbox, and now it's done.",
    href: "/blogs/soph-blogs/6",
    tags: ["lightbox"]
  },
  {
    title: "soph week 1/27 - 1/31",
    date: "jan. 30th, 2025",
    preview: "working on the pcb of my lightbox, and started the acrylic piece.",
    href: "/blogs/soph-blogs/5",
    tags: ["lightbox"]
  },
  {
    title: "soph week 1/20 - 1/24",
    date: "jan. 23rd, 2025",
    preview: "finished the base of my lightbox. just gotta make the pcb and acrylic pieces now.",
    href: "/blogs/soph-blogs/4",
    tags: ["lightbox"]
  },
  {
    title: "soph week 1/13 - 1/17",
    date: "jan. 16th, 2025",
    preview: "finished most of the base, fixing the code.",
    href: "/blogs/soph-blogs/3",
    tags: ["lightbox"]
  },
  {
    title: "soph week 1/2 - 1/10",
    date: "jan. 9th, 2025",
    preview: "started a rough pcb and a sample box. bugs persist in my code.",
    href: "/blogs/soph-blogs/2",
    tags: ["lightbox"]
  },
  {
    title: "soph week 12/16 - 12/20",
    date: "dec. 19th, 2024",
    preview: "figuring out the mechanism for my lightbox, and starting the code.",
    href: "/blogs/soph-blogs/1",
    tags: ["lightbox"]
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('posts-container');
    const searchInput = document.querySelector('.search-input');
    const clearBtn = document.querySelector('.clear-btn');
    const sortSelect = document.querySelector('.sort-select');

    // --- Helper Functions ---

    // Generates a consistent number based on the title string
    const calculateReadTime = (text) => {
        const wordsPerMinute = 200;
        const words = text.split(/\s+/).length;
        return Math.ceil(words / wordsPerMinute) + 2; // +2 for "base" read time
    };

    // --- Core Logic ---

    const renderPosts = (filterText = '', sortBy = 'newest') => {
        if (!container) return;

        // 1. Filter
        let filtered = posts.filter(post => {
            const searchStr = filterText.toLowerCase();
            return post.title.toLowerCase().includes(searchStr) || 
                   post.preview.toLowerCase().includes(searchStr) ||
                   post.tags.some(tag => tag.toLowerCase().includes(searchStr));
        });

        // 2. Sort (assuming date format "month day, year")
        filtered.sort((a, b) => {
            const dateA = new Date(a.date.replace('th,', '').replace('st,', '').replace('rd,', '').replace('nd,', ''));
            const dateB = new Date(b.date.replace('th,', '').replace('st,', '').replace('rd,', '').replace('nd,', ''));
            return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
        });

        // 3. Render
        if (filtered.length === 0) {
            container.innerHTML = `<p class="no-results">No posts found matching "${filterText}"</p>`;
            return;
        }

        container.innerHTML = filtered.map(post => {
            const readTime = calculateReadTime(post.preview);
            
            // Standardize tags
            const allTags = post.tags.length === 1 && post.tags[0].includes(',') 
                ? post.tags[0].split(',').map(t => t.trim()) 
                : post.tags;

            const visibleTags = allTags.slice(0, 3);
            const extraTagsCount = allTags.length - 3;

            return `
            <article class="post-card">
                <div class="post-content-left">
                    <a href="${post.href}" class="post-title">
                        <h3>${post.title}</h3>
                    </a>
                    <p class="post-preview">${post.preview}</p>
                    <div class="post-tags">
                        ${visibleTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        ${extraTagsCount > 0 ? `<span class="tag extra">+${extraTagsCount}</span>` : ''}
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

    // Initial load
    renderPosts();
});

window.addEventListener('pageshow', () => {
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.value = 'newest';
    }
});