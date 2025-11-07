// Menu mobile toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
hamburger && hamburger.addEventListener('click', () => {
  if (mainNav.style.display === 'flex') {
    mainNav.style.display = '';
  } else {
    mainNav.style.display = 'flex';
    mainNav.style.flexDirection = 'column';
    mainNav.style.gap = '8px';
    mainNav.style.marginTop = '12px';
  }
});

// Details toggles for each card
document.querySelectorAll('.details-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    if (details) {
      if (expanded) {
        details.style.display = 'none';
        btn.setAttribute('aria-expanded', 'false');
        btn.innerText = 'Ver detalhes ▾';
      } else {
        details.style.display = 'block';
        btn.setAttribute('aria-expanded', 'true');
        btn.innerText = 'Ocultar detalhes ▴';
      }
    }
  });
});

// Optional: make <a.open-img> open in new tab is already via target="_blank"
// Small accessibility improvement: keyboard toggle for details buttons
document.querySelectorAll('.details-toggle').forEach(btn => {
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});
