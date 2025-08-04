document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            header.style.backgroundColor = 'var(--primary-color)';
            header.style.boxShadow = 'none';
        }
    });
});
