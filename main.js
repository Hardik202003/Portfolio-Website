// Typed.js for text animation in the home section
const options = {
    strings: ["Web Developer"], // Text to be typed
    typeSpeed: 100, // Speed of typing
    backSpeed: 50,  // Speed of deleting
    backDelay: 1000, // Delay before typing starts again
    loop: true, // Infinite loop of typing
  };
  
  const typed = new Typed(".multiple-text", options);
  
  // Mobile menu toggle for responsiveness
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');
  
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
  
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
        behavior: "smooth"
      });
    });
  });
  
  // Scroll reveal for animations on scroll
  window.sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 500,
    reset: true
  });
  
  sr.reveal('.home-content', { delay: 500 });
  sr.reveal('.about', { delay: 500 });
  sr.reveal('.portfolio', { delay: 500 });
  sr.reveal('.contact', { delay: 500 });
  sr.reveal('.footer', { delay: 500 });
  


  // Add these to existing JS

// Dark/Light Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    themeToggle.querySelector('i').classList.toggle('fa-sun');
    localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
});

// Initialize theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeToggle.querySelector('i').classList.add('fa-sun');
}

// Particles.js Background
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#5982f4' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Add to ScrollReveal
sr.reveal('.skill-box', { interval: 200 });