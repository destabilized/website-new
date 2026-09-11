(function () {
    const SELECTOR = '.card-thumb img, .detail-hero img, .yap img';

    function build() {
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'image preview');
        overlay.innerHTML =
            '<img class="lightbox-image" alt="">' +
            '<button type="button" class="lightbox-close" aria-label="close image preview">&times;</button>';
        document.body.appendChild(overlay);
        overlay.hidden = true;

        const overlayImg = overlay.querySelector('.lightbox-image');
        const closeBtn = overlay.querySelector('.lightbox-close');
        let lastFocused = null;

        function open(src, alt) {
            overlayImg.src = src;
            overlayImg.alt = alt || '';
            overlay.hidden = false;
            document.body.classList.add('lightbox-open');
            lastFocused = document.activeElement;
            closeBtn.focus();
        }

        function close() {
            overlay.hidden = true;
            overlayImg.src = '';
            document.body.classList.remove('lightbox-open');
            if (lastFocused && lastFocused.focus) lastFocused.focus();
        }

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay || e.target === closeBtn) close();
        });
        document.addEventListener('keydown', function (e) {
            if (!overlay.hidden && e.key === 'Escape') close();
        });

        return { open: open };
    }

    var triggers = Array.from(document.querySelectorAll(SELECTOR));
    if (!triggers.length) return;

    var lb = build();

    triggers.forEach(function (img) {
        img.style.cursor = 'zoom-in';
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', 'expand image: ' + (img.alt || ''));

        function activate() {
            lb.open(img.currentSrc || img.src, img.alt);
        }

        img.addEventListener('click', activate);
        img.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate();
            }
        });
    });
})();