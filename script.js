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
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.getElementById('navOverlay');
const closeMenu = document.getElementById('closeMenu');
const body = document.body;

function openMenu() {
  navMenu.classList.add('active');
  navOverlay.classList.add('active');
  body.classList.add('menu-open');
  
  // Animate hamburger to X
  const bars = document.querySelectorAll('.bar');
  bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
  bars[1].style.opacity = '0';
  bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
  bars.forEach(bar => bar.style.backgroundColor = 'teal');
}

function closeMenuFunc() {
  navMenu.classList.remove('active');
  navOverlay.classList.remove('active');
  body.classList.remove('menu-open');
  
  // Reset hamburger
  const bars = document.querySelectorAll('.bar');
  bars[0].style.transform = 'rotate(0) translate(0, 0)';
  bars[1].style.opacity = '1';
  bars[2].style.transform = 'rotate(0) translate(0, 0)';
  bars.forEach(bar => bar.style.backgroundColor = '#f0f0f0');
}

if (hamburger) {
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    if (navMenu.classList.contains('active')) {
      closeMenuFunc();
    } else {
      openMenu();
    }
  });
}

if (closeMenu) {
  closeMenu.addEventListener('click', closeMenuFunc);
}

if (navOverlay) {
  navOverlay.addEventListener('click', closeMenuFunc);
}

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    closeMenuFunc();
  });
});

// Close on escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    closeMenuFunc();
  }
});

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
      link.classList.add('
