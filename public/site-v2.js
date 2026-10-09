const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const links = [...nav.querySelectorAll('a')];

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', open);
});

links.forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
}));

const sections = ['home', 'work', 'about', 'contact'].map(id => document.getElementById(id));
const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 36);
  const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= window.innerHeight * .35) || sections[0];
  links.forEach(link => {
    const active = link.dataset.section === current.id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};
document.addEventListener('scroll', onScroll, {passive: true});
onScroll();
document.getElementById('year').textContent = new Date().getFullYear();

const cinematic = document.querySelector('.cinematic');
const cinematicVideo = document.querySelector('.cinematic-video');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (cinematic && cinematicVideo && !reducedMotion.matches) {
  cinematicVideo.pause();
  let frameRequested = false;
  const updateFilm = () => {
    frameRequested = false;
    const travel = Math.max(1, cinematic.offsetHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -cinematic.getBoundingClientRect().top / travel));
    cinematic.style.setProperty('--cinematic-progress', progress.toFixed(4));
    cinematic.style.setProperty('--cinematic-caption', String(Math.max(0, 1 - progress * 2.5)));
    cinematic.style.setProperty('--cinematic-wash', String(Math.min(1, Math.max(0, (progress - .96) * 25))));
    if (cinematicVideo.readyState >= 1 && Number.isFinite(cinematicVideo.duration)) {
      const time = Math.min(cinematicVideo.duration - .02, progress * cinematicVideo.duration);
      if (Math.abs(cinematicVideo.currentTime - time) > .035) cinematicVideo.currentTime = time;
    }
  };
  const requestFilmFrame = () => {
    if (!frameRequested) {
      frameRequested = true;
      requestAnimationFrame(updateFilm);
    }
  };
  cinematicVideo.addEventListener('loadedmetadata', requestFilmFrame);
  window.addEventListener('scroll', requestFilmFrame, {passive: true});
  window.addEventListener('resize', requestFilmFrame);
  requestFilmFrame();
}
