(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const btn = document.getElementById('navbtn');
  const nav = document.getElementById('nav');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // copy-to-clipboard (email)
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', async () => {
      const text = el.getAttribute('data-copy');
      if (!text) return;
      try{
        await navigator.clipboard.writeText(text);
        const prev = el.textContent;
        el.textContent = prev.replace('(copy)', '(copied)');
        setTimeout(() => (el.textContent = prev), 1200);
      }catch{
        // fallback
        prompt('Copy this:', text);
      }
    });
  });
})();
