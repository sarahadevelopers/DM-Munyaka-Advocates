  // Dynamic Year
    document.getElementById('dynamicYear').innerHTML = `© ${new Date().getFullYear()} D.M. Munyaka & Company Advocates. All Rights Reserved.`;
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });
    
    // Mobile menu functionality
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // GSAP Animations (lightweight)
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".featured-grid", { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: ".featured-service", start: "top 85%" } });
    gsap.from(".service-card", { opacity: 0, y: 50, stagger: 0.1, duration: 0.7, scrollTrigger: { trigger: ".services-grid", start: "top 85%" } });
    gsap.from(".timeline-step", { opacity: 0, x: -30, stagger: 0.2, duration: 0.6, scrollTrigger: { trigger: ".process-section", start: "top 85%" } });
    gsap.from(".faq-card", { opacity: 0, y: 20, stagger: 0.08, duration: 0.5, scrollTrigger: { trigger: ".faq-grid", start: "top 85%" } });
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // 1. Handle your existing .scrolled class logic
  if (scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // 2. Handle the hide/show logic
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling Down - Hide it
    navbar.classList.add('nav-hidden');
  } else {
    // Scrolling Up - Show it
    navbar.classList.remove('nav-hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
