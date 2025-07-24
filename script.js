document.addEventListener('DOMContentLoaded', () => {
    // Gallery image loading animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
    });

    // Lens focus effect
    const lens = document.querySelector('.lens');
    
    lens.addEventListener('mousemove', (e) => {
        const rect = lens.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        
        lens.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });

    lens.addEventListener('mouseleave', () => {
        lens.style.transform = 'rotateX(0) rotateY(0)';
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Portfolio filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const isLight = document.body.getAttribute('data-theme') === 'light';
    document.body.setAttribute('data-theme', isLight ? 'dark' : 'light');
    themeToggle.innerHTML = isLight
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
});

// Portfolio filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Smooth scroll for nav
document.querySelectorAll('.nav-btn').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({behavior: 'smooth'});
        }
    });
});

// Button hover effect (ripple)
document.querySelectorAll('.cta-button, .submit-btn, .filter-btn, .nav-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        this.classList.add('btn-hovered');
    });
    btn.addEventListener('mouseleave', function(e) {
        this.classList.remove('btn-hovered');
    });
});

// Contact form (demo)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const body = document.body;

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    body.classList.toggle('nav-open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-btn').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.classList.remove('nav-open');
    });
});

// Close nav when clicking outside the menu
document.addEventListener('click', function(e) {
    if (
        navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.classList.remove('nav-open');
    }
});
