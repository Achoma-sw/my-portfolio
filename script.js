// ===== TYPING EFFECT =====
document.addEventListener('DOMContentLoaded', function () {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;

  const phrases = ['Web Developer & Designer', 'Creative Problem Solver', 'UI/UX Enthusiast'];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 120;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 1500;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400;
    }
    setTimeout(typeEffect, typeSpeed);
  }

  typeEffect();
});

// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => bar.style.backgroundColor = '#f39c12');
    if (!navMenu.classList.contains('active')) {
      bars.forEach(bar => bar.style.backgroundColor = '#f0f0f0');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      document.querySelectorAll('.bar').forEach(bar => bar.style.backgroundColor = '#f0f0f0');
    });
  });
}

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ===== SMOOTH SCROLL FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    
    // Skip if it's just "#" or empty
    if (targetId === '#' || targetId === '') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
}