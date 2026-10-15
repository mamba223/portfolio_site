// Portfolio behavior: accessible navigation, project filtering, and email copy.
(() => {
  'use strict';
  const navList = document.getElementById('nav-list');
  const navToggle = document.getElementById('menu-toggle');
  const setNav = (open) => {
    navList.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };
  navToggle?.addEventListener('click', () => setNav(navToggle.getAttribute('aria-expanded') !== 'true'));
  navList?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNav(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setNav(false); });

  const entries = Array.from(document.querySelectorAll('.project-entry'));
  const filters = Array.from(document.querySelectorAll('.filter-button'));
  const expand = document.getElementById('project-expand');
  const count = document.getElementById('project-count');
  let selected = 'all';
  let expanded = false;
  function updateProjects() {
    const matches = entries.filter(card => selected === 'all' || card.dataset.category.split(' ').includes(selected));
    const limit = selected === 'all' && !expanded ? 6 : matches.length;
    const visible = matches.slice(0, limit);
    entries.forEach(card => {
      const show = visible.includes(card);
      card.classList.toggle('is-hidden', !show);
      card.setAttribute('aria-hidden', String(!show));
    });
    count.textContent = `Showing ${visible.length} of ${matches.length} projects`;
    const canExpand = selected === 'all' && matches.length > 6;
    expand.hidden = !canExpand;
    expand.setAttribute('aria-expanded', String(expanded));
    expand.innerHTML = expanded ? 'Show selected projects <span aria-hidden="true">↑</span>' : 'View all 20 projects <span aria-hidden="true">↗</span>';
  }
  filters.forEach(button => button.addEventListener('click', () => {
    selected = button.dataset.filter;
    expanded = false;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    updateProjects();
  }));
  expand?.addEventListener('click', () => {
    expanded = !expanded;
    updateProjects();
    if (!expanded) document.getElementById('projects')?.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  });
  updateProjects();

  const copy = document.getElementById('copy-email-btn');
  const email = document.getElementById('email-text');
  copy?.addEventListener('click', async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email.textContent.trim());
      copy.textContent = 'Copied';
      copy.setAttribute('aria-label', 'Email address copied');
      setTimeout(() => { copy.textContent = 'Copy'; copy.setAttribute('aria-label','Copy email address'); }, 1800);
    } catch {
      copy.textContent = 'Select to copy';
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(email);
      selection.removeAllRanges(); selection.addRange(range);
    }
  });

  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items) => {
      items.forEach(item => {
        if (item.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#'+item.target.id));
        }
      });
    }, {rootMargin:'-20% 0px -65% 0px'});
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
  }
})();
