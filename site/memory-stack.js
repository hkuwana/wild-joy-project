// Progressive enhancement: the existing notebook is the failure/reduced-motion view.
(() => {
  const root = document.documentElement;
  const track = document.querySelector('[data-memory-stack]');
  const library = window.WildJoyMotion;
  if (!track || !library?.scroll) return;
  const cards = [...track.querySelectorAll('[data-memory-card]')];
  const anchors = cards.map(card => card.querySelector('.memory-anchor'));
  const links = [...document.querySelectorAll('.map-stop')];
  const journey = document.querySelector('[data-journey]');
  const roomy = window.matchMedia('(min-height: 620px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = value => Math.max(0, Math.min(1, value));
  let stopScroll, active = false;
  function draw(progress) {
    const travel = clamp(progress) * (cards.length - 1);
    cards.forEach((card,index) => {
      const arrive = index === 0 ? 1 : clamp((travel - index + .85) / .70);
      const settle = clamp(travel - index);
      const ease = 1 - Math.pow(1 - arrive, 3);
      const turn = [-3, 4, -2][index] || 0;
      const y = (1 - ease) * (window.innerHeight * .85) - settle * 14;
      const x = (1 - ease) * (index % 2 ? 45 : -40) + settle * (index % 2 ? 16 : -16);
      const rotation = turn + (1 - ease) * (index % 2 ? 9 : -9) - settle * 2;
      card.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0) rotate(${rotation.toFixed(2)}deg) scale(${(1 - settle * .045).toFixed(4)})`;
      card.style.opacity = String(clamp(arrive * 5));
      card.style.zIndex = String(index + 1);
    });
    journey?.style.setProperty('--route-progress',String(clamp(progress)));
    const current = Math.min(cards.length - 1, Math.floor(travel + .45));
    links.forEach((link,index) => {
      if (index === current) link.setAttribute('aria-current','step');
      else link.removeAttribute('aria-current');
    });
  }
  function disable() {
    stopScroll?.(); stopScroll = undefined;
    active = false;
    delete root.dataset.stack;
    anchors.forEach((anchor,index) => cards[index].prepend(anchor));
    cards.forEach(card => { card.style.removeProperty('transform'); card.style.removeProperty('opacity'); card.style.removeProperty('z-index'); });
    links.forEach(link => link.removeAttribute('aria-current'));
    journey?.style.removeProperty('--route-progress');
  }
  function sync() {
    const enabled = root.dataset.motion === 'on' && roomy.matches && !reduced.matches;
    if (enabled === active) return;
    if (!enabled) { disable(); return; }
    active = true;
    // Anchors must stay in normal scroll coordinates, outside transformed cards.
    anchors.forEach((anchor,index) => { anchor.style.setProperty('--memory-index',String(index)); track.append(anchor); });
    root.dataset.stack = 'on';
    draw(0);
    try {
      stopScroll = library.scroll(draw,{target:track,offset:['start 24px','end end']});
    } catch { disable(); }
  }
  new MutationObserver(sync).observe(root,{attributes:true,attributeFilter:['data-motion']});
  roomy.addEventListener('change',sync);
  reduced.addEventListener('change',sync);
  window.addEventListener('beforeprint',disable);
  window.addEventListener('afterprint',sync);
  sync();
})();
