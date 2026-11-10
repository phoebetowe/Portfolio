(function () {
  var root = document.documentElement;

  // Mobile menu
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  function closeMenu() { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  // Theme toggle
  document.querySelector('.theme-btn').addEventListener('click', function () {
    var current = root.dataset.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Print resume
  var printBtn = document.querySelector('.print-btn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  // Scroll reveal (content stays visible if JS or IntersectionObserver is missing)
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Header gains depth once the page scrolls
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 12); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  // Photo slots: if an image file is not there yet, remove it so the fallback art shows
  document.querySelectorAll('img[data-slot]').forEach(function (img) {
    function drop() { img.remove(); }
    img.addEventListener('error', drop);
    if (img.complete && img.naturalWidth === 0) drop();
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
