/* Optional presentation motion. Content stays visible if this script fails.
   One-time entrances only; gallery filters and keyboard actions stay immediate. */
(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!Element.prototype.animate || !('IntersectionObserver' in window)) return;
  let keyboard = false;
  const running = new Set();
  const seen = new WeakSet();
  const easing = getComputedStyle(document.documentElement).getPropertyValue('--ease-out').trim() || 'cubic-bezier(0.23,1,0.32,1)';
  const cancel = () => { running.forEach(a => a.cancel()); running.clear(); };
  document.addEventListener('keydown', () => { keyboard = true; cancel(); }, { capture: true });
  document.addEventListener('pointerdown', () => { keyboard = false; }, { passive: true });
  reduced.addEventListener('change', cancel);
  const observer = new IntersectionObserver(entries => {
    let stagger = 0;
    entries.forEach(entry => {
      if (!entry.isIntersecting || seen.has(entry.target)) return;
      seen.add(entry.target);
      observer.unobserve(entry.target);
      if (keyboard || document.hidden) return;
      const frames = reduced.matches
        ? [{ opacity: .85 }, { opacity: 1 }]
        : [{ opacity: .65, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }];
      const a = entry.target.animate(frames, {
        duration: reduced.matches ? 160 : 300,
        delay: reduced.matches ? 0 : Math.min(stagger++, 3) * 50,
        easing, fill: 'none'
      });
      running.add(a);
      a.onfinish = a.oncancel = () => running.delete(a);
    });
  }, { threshold: .15 });
  document.querySelectorAll('.hero-copy > .eyebrow,.hero-copy > h1,.hero-copy > .intro,.section-heading,.about-copy > h2,.about-copy > #bio,.contact > h2').forEach(el => observer.observe(el));
})();
