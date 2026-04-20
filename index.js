// ================= DYNAMIC YEAR =================
document.getElementById('dynamicYear').innerHTML =
    `© ${new Date().getFullYear()} D.M. Munyaka & Company Advocates. All Rights Reserved.`;


// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener('scroll', function () {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// ================= MOBILE MENU =================
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

// Event listeners (safe check)
if (hamburger && mobileMenu && closeMenu) {
    hamburger.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFunc);

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMenuFunc);
    });
}

// Scroll indicator fade out
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        scrollIndicator.classList.add('hidden');
    } else {
        scrollIndicator.classList.remove('hidden');
    }
});

// ================= COUNT-UP ANIMATION =================
const counters = document.querySelectorAll('.stat-number:not(.static)');
let started = false;

function animateCounters() {
    if (started) return;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;

        const duration = 1500; // total animation time
        const stepTime = Math.max(Math.floor(duration / target), 10);

        const updateCount = () => {
            count++;

            if (count < target) {
                counter.innerText = count;
                setTimeout(updateCount, stepTime);
            } else {
                counter.innerText = formatValue(target);
            }
        };

        updateCount();
    });

    started = true;
}

// Format (adds + or %)
function formatValue(value) {
    if (value === 100) return value + "%";
    if (value >= 100) return value + "+";
    return value + "+";
}

// ================= INTERSECTION OBSERVER =================
const section = document.querySelector('.why-choose-premium');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
        }
    });
}, {
    threshold: 0.4
});

observer.observe(section);
// ================= SWIPER INIT =================
document.addEventListener("DOMContentLoaded", function () {

    new Swiper('.testimonialSwiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 2.5
            }
        },

        // Optional autoplay (uncomment if needed)
      
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        }
       
    });

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
