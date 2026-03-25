// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Clone panel toggle
const cloneToggle = document.getElementById('cloneToggle');
const clonePanel = document.getElementById('clonePanel');
const cloneClose = document.getElementById('cloneClose');

cloneToggle.addEventListener('click', () => {
  clonePanel.hidden = false;
  cloneToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
});

cloneClose.addEventListener('click', closeClonePanel);

clonePanel.addEventListener('click', (e) => {
  if (e.target === clonePanel) closeClonePanel();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !clonePanel.hidden) closeClonePanel();
});

function closeClonePanel() {
  clonePanel.hidden = true;
  cloneToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.25)';
  } else {
    navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.2)';
  }
});
