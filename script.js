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

