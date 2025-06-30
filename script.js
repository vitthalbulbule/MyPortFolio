// Nav link hover effect
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});

// Floating animation for profile pic
const profilePic = document.querySelector('.profile-pic');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    profilePic.style.transform = `translateY(${scrollY * 0.1}px)`;
});