/* One representative image per original project. Load on demand, never preload the entire gallery. */
(() => {
  const slides = (window.PROJECTS || []).filter(p => !p.placeholder && (p.thumbnail || p.images?.length));
  const link = document.querySelector('#featured-link'), picture = document.querySelector('#featured-image');
  const count = document.querySelector('#showcase-count'), pause = document.querySelector('#showcase-pause');
  if (!slides.length || !link || !picture) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0, requested = 0, paused = reduced.matches, hovered = false, focused = false, visible = true, timer, ticket = 0;
  const source = p => p.heroImage || p.images?.[0]?.src || p.thumbnail;
  function schedule() {
    clearTimeout(timer);
    pause.textContent = paused ? 'Play' : 'Pause';
    pause.setAttribute('aria-label', paused ? 'Play artwork slideshow' : 'Pause artwork slideshow');
    if (!paused && !hovered && !focused && visible && !document.hidden && slides.length > 1) timer = setTimeout(() => show(index + 1), 6500);
  }
  function show(next) {
    clearTimeout(timer);
    requested = (next + slides.length) % slides.length;
    const nextIndex = requested, p = slides[nextIndex], request = ++ticket;
    const preload = new Image();
    preload.onload = () => {
      if (request !== ticket) return;
      picture.getAnimations().forEach(a => a.cancel());
      picture.src = preload.src; picture.alt = p.title;
      link.href = '#project/' + encodeURIComponent(p.id);
      link.setAttribute('aria-label', 'View ' + p.title);
      index = nextIndex; count.textContent = (index + 1) + ' / ' + slides.length;
      if (!reduced.matches && !focused && picture.animate) picture.animate([{opacity:.35},{opacity:1}], {duration:500,easing:'cubic-bezier(0.23,1,0.32,1)'});
      schedule();
    };
    preload.onerror = () => { if (request === ticket) { requested = index; paused = true; count.textContent = 'Image unavailable'; schedule(); } };
    preload.src = source(p);
  }
  document.querySelector('#showcase-prev').onclick = () => show(requested - 1);
  document.querySelector('#showcase-next').onclick = () => show(requested + 1);
  pause.onclick = () => { paused = !paused; schedule(); };
  const region = document.querySelector('.showcase');
  region.addEventListener('mouseenter', () => { hovered = true; schedule(); });
  region.addEventListener('mouseleave', () => { hovered = false; schedule(); });
  region.addEventListener('focusin', () => { focused = true; schedule(); });
  region.addEventListener('focusout', e => { if (!region.contains(e.relatedTarget)) { focused = false; schedule(); } });
  document.addEventListener('visibilitychange', schedule);
  reduced.addEventListener('change', () => { paused = reduced.matches; picture.getAnimations().forEach(a => a.cancel()); schedule(); });
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => { visible = entries[0].isIntersecting; schedule(); }).observe(region);
  show(0);
})();
