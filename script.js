// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.scroll-reveal');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 50);
        }
    });
}, observerOptions);

reveals.forEach(reveal => observer.observe(reveal));

// Contact form submission
function handleSubmit(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    const name = inputs[0].value;
    const email = inputs[1].value;
    const company = inputs[2].value;
    const message = inputs[3].value;
    
    const subject = encodeURIComponent(`Velox Forge Inquiry: ${company || email}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:hello@veloxforge.studio?subject=${subject}&body=${body}`;
    return false;
}
