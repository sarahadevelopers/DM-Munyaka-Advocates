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
    
    function openMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenuFunc() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    hamburger.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFunc);
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMenuFunc);
    });
    
    // Simple scroll reveal using Intersection Observer (no GSAP)
    const revealElements = document.querySelectorAll('.philosophy-grid, .creds-card, .profile-layout, .ethics-content, .areas-grid');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => observer.observe(el));
    
    // Add reveal styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .philosophy-grid, .creds-card, .profile-layout, .ethics-content, .areas-grid {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .philosophy-grid.revealed, .creds-card.revealed, .profile-layout.revealed, .ethics-content.revealed, .areas-grid.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        .creds-card:nth-child(1) { transition-delay: 0s; }
        .creds-card:nth-child(2) { transition-delay: 0.1s; }
        .creds-card:nth-child(3) { transition-delay: 0.2s; }
    `;
    document.head.appendChild(style);

    /* ================= COUNT UP ================= */

const counters = document.querySelectorAll(".stat-number");

if (counters.length > 0) {

    const animateCounter = (counter, delay = 0) => {
        setTimeout(() => {

            const target = parseInt(counter.dataset.target, 10);
            const suffix = counter.dataset.suffix || "";

            let current = 0;

            const update = () => {
                current += target / 60;

                if (current < target) {
                    counter.textContent = Math.floor(current) + suffix;
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target + suffix;
                }
            };

            update();

        }, delay);
    };

    const statsSection = document.querySelector(".philosophy-stats");

    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                counters.forEach((counter, index) => {
                    animateCounter(counter, index * 200);
                });

                obs.disconnect(); // run once
            }
        });
    }, { threshold: 0.3 });

    if (statsSection) {
        counterObserver.observe(statsSection);
    }
}
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
