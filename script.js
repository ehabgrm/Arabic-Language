// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav')) {
        navLinks.classList.remove('active');
    }
});

// Active link highlighting
const navLinksAll = document.querySelectorAll('.nav-links a');
navLinksAll.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll for course cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Hero Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Start automatic slideshow
    setInterval(nextSlide, slideInterval);
});

// إضافة مستمعي الأحداث
document.addEventListener('DOMContentLoaded', () => {
    try {
        // تهيئة بطاقات الدورات
        const courseCards = document.querySelectorAll('.course-card');
        if (courseCards.length > 0) {
            courseCards.forEach(card => {
                observer.observe(card);
            });
        }
    } catch (error) {
        console.error('حدث خطأ أثناء تهيئة الصفحة:', error);
    }
});
