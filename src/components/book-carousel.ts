/** Mobile-only, user-controlled book navigation. Native scrolling works without JavaScript. */
export function initializeBookCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('[data-book-track]');
  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-book-slide]'));
  const previous = root.querySelector<HTMLButtonElement>('[data-book-previous]');
  const next = root.querySelector<HTMLButtonElement>('[data-book-next]');
  const current = root.querySelector<HTMLElement>('[data-book-current]');
  const total = root.querySelector<HTMLElement>('[data-book-total]');
  if (!track || !slides.length || !previous || !next || !current || !total) return;

  const mobile = window.matchMedia('(max-width: 47.999rem)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;
  let frame = 0;
  const isRtl = () => getComputedStyle(track).direction === 'rtl';

  const renderPosition = () => {
    const locale = ['id', 'en', 'ar'].includes(document.documentElement.lang)
      ? document.documentElement.lang : 'id';
    const numbers = new Intl.NumberFormat(locale, locale === 'ar' ? { numberingSystem: 'arab' } : undefined);
    const position = numbers.format(active + 1);
    if (current.textContent !== position) current.textContent = position;
    total.textContent = numbers.format(slides.length);
    previous.disabled = active === 0;
    next.disabled = active === slides.length - 1;
    track.tabIndex = mobile.matches ? 0 : -1;
  };

  const updatePosition = () => {
    const bounds = track.getBoundingClientRect();
    const rtl = isRtl();
    const edge = rtl ? bounds.right : bounds.left;
    let nearest = Infinity;
    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const distance = Math.abs((rtl ? rect.right : rect.left) - edge);
      if (distance < nearest) {
        nearest = distance;
        active = index;
      }
    });
    renderPosition();
  };

  const goTo = (index: number) => {
    if (!mobile.matches) return;
    const target = slides[Math.max(0, Math.min(index, slides.length - 1))];
    const bounds = track.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    const padding = parseFloat(getComputedStyle(track).paddingInlineStart) || 0;
    const left = isRtl() ? rect.right - bounds.right + padding : rect.left - bounds.left - padding;
    track.scrollTo({ left: track.scrollLeft + left, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  };

  previous.addEventListener('click', () => goTo(active - 1));
  next.addEventListener('click', () => goTo(active + 1));
  track.addEventListener('scroll', () => {
    if (frame) return;
    frame = requestAnimationFrame(() => { frame = 0; updatePosition(); });
  }, { passive: true });
  track.addEventListener('keydown', (event) => {
    if (!mobile.matches || event.target !== track) return;
    let target: number;
    if (event.key === 'Home') target = 0;
    else if (event.key === 'End') target = slides.length - 1;
    else if (event.key === 'ArrowRight') target = active + (isRtl() ? -1 : 1);
    else if (event.key === 'ArrowLeft') target = active + (isRtl() ? 1 : -1);
    else return;
    event.preventDefault();
    goTo(target);
  });
  new ResizeObserver(updatePosition).observe(track);
  window.addEventListener('site-language-change', updatePosition);
  renderPosition();
}
