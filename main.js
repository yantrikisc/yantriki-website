// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Graceful fallback for background-image cards that fail to load
document.querySelectorAll('.product-card-img, .prod-variant-img, .valve-img').forEach(el => {
  const style = el.getAttribute('style') || '';
  const match = style.match(/url\(['"]?([^'")\s]+)['"]?\)/);
  if (match) {
    const url = match[1];
    const img = new Image();
    img.onerror = () => {
      el.style.backgroundImage = 'none';
      el.style.backgroundColor = '#1a3a5c';
    };
    img.src = url;
  }
});

// Contact form — Formspree handles submission natively via action attribute
