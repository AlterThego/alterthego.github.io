// Toggle menu visibility (Original Set)
const hamburgerButton = document.getElementById('hamburger-button');
const closeButton = document.getElementById('close-button');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('-translate-x-full');
});

closeButton.addEventListener('click', () => {
    menu.classList.add('-translate-x-full');
});

// Toggle menu visibility (Simple Set)
const hamburgerButtonSimple = document.getElementById('hamburger-button-simple');
const closeButtonSimple = document.getElementById('close-button-simple');
const menuSimple = document.getElementById('menu-simple');

hamburgerButtonSimple.addEventListener('click', () => {
    menuSimple.classList.toggle('-translate-x-full');
});

closeButtonSimple.addEventListener('click', () => {
    menuSimple.classList.add('-translate-x-full');
});