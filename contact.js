  document.getElementById('dynamicYear').innerHTML = `© ${new Date().getFullYear()} D.M. Munyaka & Company Advocates. All Rights Reserved.`;
    
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });
    
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
    
    const form = document.getElementById('consultFormElement');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you. Your consultation request has been received. Our team will contact you within 24 hours.');
            form.reset();
        });
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
