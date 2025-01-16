const scrollToTopButton = document.getElementById('scrollToTop');
const simpleModeButton = document.getElementById('simpleMode');

let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 200) {
                // Show scroll to top, hide simple mode
                if (scrollToTopButton.classList.contains('hidden')) {
                    simpleModeButton.style.opacity = '0';
                    setTimeout(() => {
                        simpleModeButton.classList.add('hidden');
                        scrollToTopButton.classList.remove('hidden');
                        requestAnimationFrame(() => {
                            scrollToTopButton.classList.remove('opacity-0');
                        });
                    }, 0);
                }
            } else {
                // Show simple mode, hide scroll to top
                if (!scrollToTopButton.classList.contains('hidden')) {
                    scrollToTopButton.classList.add('opacity-0');
                    setTimeout(() => {
                        scrollToTopButton.classList.add('hidden');
                        simpleModeButton.classList.remove('hidden');
                        requestAnimationFrame(() => {
                            simpleModeButton.style.opacity = '1';
                        });
                    }, 0);
                }
            }
            isScrolling = false;
        });
    }
    isScrolling = true;
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
