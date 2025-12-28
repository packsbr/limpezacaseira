// Scroll to pricing section
document.getElementById('scrollPricing').addEventListener('click', function() {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
});

// Toggle FAQ items
function toggleFaq(element) {
    const item = element.parentElement;
    item.classList.toggle('active');
}

// Close FAQ when clicking answer area to toggle again
document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.benefit-card, .testimonial-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Track scroll position for sticky elements
window.addEventListener('scroll', () => {
    const alertBar = document.querySelector('.alert-bar');
    if (window.scrollY > 100) {
        alertBar.style.position = 'fixed';
        alertBar.style.top = '0';
        alertBar.style.left = '0';
        alertBar.style.right = '0';
        alertBar.style.zIndex = '1000';
    } else {
        alertBar.style.position = 'relative';
    }
});

console.log('Limpeza Caseira - Site carregado com sucesso!');
