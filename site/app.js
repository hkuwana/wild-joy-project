const dialog = document.querySelector('.photo-dialog');
let opener;
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('.photo-open').forEach(button => button.addEventListener('click', () => {
    opener = button;
    const photo = dialog.querySelector('img');
    photo.src = button.dataset.photo;
    photo.alt = button.querySelector('img').alt;
    dialog.querySelector('p').textContent = button.dataset.caption;
    dialog.showModal();
  }));
  dialog.querySelector('.close-photo').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => opener?.focus());
}
const itineraryDetails = [...document.querySelectorAll('.itinerary-days details')];
let openBeforePrint = [];
window.addEventListener('beforeprint', () => {
  openBeforePrint = itineraryDetails.map(item => item.open);
  itineraryDetails.forEach(item => { item.open = true; });
});
window.addEventListener('afterprint', () => {
  itineraryDetails.forEach((item,index) => { item.open = openBeforePrint[index] ?? item.open; });
});
document.querySelector('.print-button')?.addEventListener('click', () => window.print());

// Bounded, scroll-linked photo depth. No autoplay or continuous animation loop.
const motionButton = document.querySelector('.motion-control');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPreference = true;
try { motionPreference = localStorage.getItem('wildjoy-motion') !== 'off'; } catch { /* Storage may be unavailable in private browsing. */ }
document.querySelectorAll('.ocean-landscape, .bali-panorama').forEach(image => { image.dataset.depth = '150'; });
const motionScenes = [...document.querySelectorAll('[data-parallax-scene]')].map(scene => ({
  scene,
  layers: [...scene.querySelectorAll('[data-depth]')].map(element => ({ element, depth: Number(element.dataset.depth) || 0 }))
}));
const journey = document.querySelector('[data-journey]');
let motionFrame = 0;
let motionEnabled = false;
function renderDepth() {
  motionFrame = 0;
  if (!motionEnabled || document.hidden) return;
  const height = window.innerHeight;
  const strength = window.innerWidth <= 760 ? .35 : 1;
  // Read every scene first, then write transforms; avoid interleaved layout work.
  const positions = motionScenes.map(({scene,layers}) => {
    const rect = scene.getBoundingClientRect();
    const visible = rect.bottom > -100 && rect.top < height + 100;
    const progress = Math.max(-.65, Math.min(.65, (height / 2 - rect.top - rect.height / 2) / (height + rect.height)));
    return { layers, visible, progress };
  });
  const journeyRect = journey?.getBoundingClientRect();
  const routeProgress = journeyRect ? Math.max(0, Math.min(1, (height * .5 - journeyRect.top) / Math.max(1, journeyRect.height - height * .5))) : 1;
  if (journey) journey.style.setProperty('--route-progress', routeProgress.toFixed(4));
  positions.forEach(({layers,visible,progress}) => {
    if (!visible) return;
    layers.forEach(({element,depth}) => element.style.setProperty('--parallax-y', `${(progress * depth * strength).toFixed(2)}px`));
  });
}
function requestDepth() {
  if (motionEnabled && !document.hidden && !motionFrame) motionFrame = requestAnimationFrame(renderDepth);
}
function syncMotion() {
  motionEnabled = motionPreference && !reducedMotion.matches;
  document.documentElement.dataset.motion = motionEnabled ? 'on' : 'off';
  if (motionButton) {
    motionButton.hidden = false;
    motionButton.disabled = reducedMotion.matches;
    motionButton.setAttribute('aria-pressed', String(motionEnabled));
    motionButton.setAttribute('aria-label', reducedMotion.matches ? 'Decorative motion disabled by your reduced-motion setting' : `Turn ${motionEnabled ? 'off' : 'on'} decorative motion`);
    motionButton.querySelector('span').textContent = reducedMotion.matches ? 'Motion reduced' : `Motion ${motionEnabled ? 'on' : 'off'}`;
  }
  if (!motionEnabled) {
    cancelAnimationFrame(motionFrame);
    motionFrame = 0;
    journey?.style.removeProperty('--route-progress');
    motionScenes.forEach(({layers}) => layers.forEach(({element}) => element.style.removeProperty('--parallax-y')));
  } else requestDepth();
}
motionButton?.addEventListener('click', () => {
  motionPreference = !motionPreference;
  try { localStorage.setItem('wildjoy-motion', motionPreference ? 'on' : 'off'); } catch { /* The setting still works for this visit. */ }
  syncMotion();
});
reducedMotion.addEventListener('change', syncMotion);
window.addEventListener('scroll', requestDepth, {passive:true});
window.addEventListener('resize', requestDepth, {passive:true});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { cancelAnimationFrame(motionFrame); motionFrame = 0; }
  else requestDepth();
});
syncMotion();
