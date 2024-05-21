
function handleIntersection(entries) {
    entries.forEach(entry => {
        const linkId = entry.target.getAttribute('id') + '-link';
        const link = document.getElementById(linkId);

        if (entry.isIntersecting) {
            link.classList.add('active', 'bg-[#396573]', 'text-cyan-400', 'border-cyan-400');
        } else {
            link.classList.remove('active', 'bg-[#396573]', 'text-cyan-400', 'border-cyan-400');
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

const sections = document.querySelectorAll('section[id^="section-"]');

sections.forEach(section => {
    observer.observe(section);
});
