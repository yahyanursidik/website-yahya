/** User-controlled navigation on every screen size; native scrolling is the fallback. */
export function initializeCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('[data-carousel-track]');
  const previous = root.querySelector<HTMLButtonElement>('[data-carousel-previous]');
  const next = root.querySelector<HTMLButtonElement>('[data-carousel-next]');
  const current = root.querySelector<HTMLElement>('[data-carousel-current]');
  const total = root.querySelector<HTMLElement>('[data-carousel-total]');
  if (!track || !previous || !next || !current || !total) return;
  const slides = Array.from(track.children) as HTMLElement[];
  if (!slides.length) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;
  let lastVisible = 0;
  let frame = 0;
  const isRtl = () => getComputedStyle(track).direction === 'rtl';

  const updatePosition = () => {
    // A filtered-out carousel has no layout; retain its last position.
    if (!track.clientWidth) return;
    const bounds = track.getBoundingClientRect();
    const padding = parseFloat(getComputedStyle(track).paddingInlineStart) || 0;
    const rtl = isRtl();
    const edge = rtl ? bounds.right - padding : bounds.left + padding;
    const visible = slides.map((slide, index) => ({ rect: slide.getBoundingClientRect(), index }))
      .filter(({ rect }) => rect.right > bounds.left + padding + 1 && rect.left < bounds.right - padding - 1);
    if (!visible.length) return;
    active = visible[0].index;
    lastVisible = visible[visible.length - 1].index;
    const firstRect = slides[0].getBoundingClientRect();
    const lastRect = slides[slides.length - 1].getBoundingClientRect();
    previous.disabled = Math.abs((rtl ? firstRect.right : firstRect.left) - edge) < 2;
    next.disabled = rtl ? lastRect.left >= bounds.left + padding - 2 : lastRect.right <= bounds.right - padding + 2;
    const locale = ['id', 'en', 'ar'].includes(document.documentElement.lang) ? document.documentElement.lang : 'id';
    const numbers = new Intl.NumberFormat(locale);
    const position = active === lastVisible ? numbers.format(active + 1) : `${numbers.format(active + 1)}–${numbers.format(lastVisible + 1)}`;
    if (current.textContent !== position) current.textContent = position;
    total.textContent = numbers.format(slides.length);
  };

  const goTo = (index: number) => {
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
    if (event.target !== track) return;
    let target: number;
    if (event.key === 'Home') target = 0;
    else if (event.key === 'End') target = slides.length - 1;
    else if (event.key === 'ArrowRight') target = active + (isRtl() ? -1 : 1);
    else if (event.key === 'ArrowLeft') target = active + (isRtl() ? 1 : -1);
    else return;
    event.preventDefault();
    goTo(target);
  });
  // Keyboard tabbing to a card must also bring it fully into view.
  track.addEventListener('focusin', (event) => {
    if (!(event.target instanceof HTMLElement) || event.target === track) return;
    const index = slides.findIndex((slide) => slide.contains(event.target as Node));
    if (index < 0) return;
    const rect = slides[index].getBoundingClientRect();
    const bounds = track.getBoundingClientRect();
    if (rect.left < bounds.left || rect.right > bounds.right) goTo(index);
  });
  new ResizeObserver(updatePosition).observe(track);
  window.addEventListener('site-language-change', () => { goTo(active); updatePosition(); });
  updatePosition();
}
