const toggle = document.querySelector('[data-menu-toggle]');
const links = document.querySelector('[data-nav-links]');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const searchForm = document.querySelector('[data-guide-search]');
if (searchForm) {
  const input = searchForm.querySelector('input');
  const cards = Array.from(document.querySelectorAll('[data-guide-card]'));
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
  });
}
