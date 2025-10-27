document.addEventListener('DOMContentLoaded', () => {
  // Basic focus styles for keyboard users on social buttons
  const focusables = document.querySelectorAll('.social-google, .social-facebook, .big-button');
  focusables.forEach(el => {
    el.addEventListener('focus', () => el.style.outline = '2px solid #71b1a1');
    el.addEventListener('blur', () => el.style.outline = 'none');
  });
});
