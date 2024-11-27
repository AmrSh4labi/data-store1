document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about-section');

    window.addEventListener('scroll', () => {
        const sectionPos = aboutSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPos < screenHeight - 100) {
            aboutSection.style.opacity = '1';
            aboutSection.style.transform = 'translateY(0)';
        }
    });

    aboutSection.style.opacity = '0';
    aboutSection.style.transform = 'translateY(50px)';
    aboutSection.style.transition = 'all 0.6s ease-out';
});
