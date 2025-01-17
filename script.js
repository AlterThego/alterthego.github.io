// Time script
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = currentTime;
}
updateTime();
setInterval(updateTime, 1000);



// Loading 1-100 effect
const loadingText = document.getElementById('loading-text');
function updateLoadingText() {
    for (let i = 1; i <= 100; i++) {
        setTimeout(() => {
            loadingText.textContent = `${i}% Loaded`;
        }, i * 15);
    }
}
updateLoadingText();


// Header effect
window.addEventListener('scroll', function () {
    var header = document.querySelector('header nav');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Scroll up script
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// Cubic scroll animation function
function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
}

// Function to handle smooth scrolling
function smoothScroll(targetElement, duration = 1000) {
    const startY = window.pageYOffset;
    const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetY - startY;
    let start = null;

    function animation(currentTime) {
        if (!start) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startY, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

// // Select only navigation section links
// const navLinks = document.querySelectorAll('header a[href^="#section-"]');

// navLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = e.currentTarget.getAttribute('href');

//         // Only proceed if it's a section link
//         if (targetId && targetId.startsWith('#section-')) {
//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 smoothScroll(targetElement);
//             }
//         }
//     });
// });

// // Separate handler for the Overview button (if needed)
// const overviewButton = document.querySelector('nav a[href="#"]');
// if (overviewButton) {
//     overviewButton.addEventListener('click', (e) => {
//         e.preventDefault();
//         smoothScroll(document.body);
//     });
// }