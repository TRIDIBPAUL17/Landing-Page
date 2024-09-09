// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navList.classList.toggle('active');
});

// Add keyboard navigation support for accessibility
document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
  }
});
