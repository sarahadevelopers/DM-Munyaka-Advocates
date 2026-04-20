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
    
    // Simple scroll reveal (CSS transitions only)
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const revealElements = document.querySelectorAll('.partner-card, .associate-card, .support-card, .philosophy-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(el);
    });

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
