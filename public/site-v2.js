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
const darkSections = [...document.querySelectorAll('.personal-intro, .work-panel-two, .work-panel-three, .contact')];
const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 36);
  header.classList.toggle('is-dark', darkSections.some(section => {
    const bounds = section.getBoundingClientRect();
    return bounds.top <= 70 && bounds.bottom > 70;
  }));
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
  let targetProgress = 0;
  let renderedProgress = 0;
  let frameRequested = false;
  let lastFrameTime = 0;
  const renderFilm = now => {
    const elapsed = lastFrameTime ? Math.min(100, now - lastFrameTime) : 16;
    lastFrameTime = now;
    renderedProgress += (targetProgress - renderedProgress) * (1 - Math.exp(-elapsed / 90));
    if (Math.abs(targetProgress - renderedProgress) < .0005) renderedProgress = targetProgress;
    const progress = renderedProgress;
    cinematic.style.setProperty('--cinematic-progress', progress.toFixed(4));
    cinematic.style.setProperty('--cinematic-caption', String(Math.max(0, 1 - progress * 2.5)));
    cinematic.style.setProperty('--cinematic-wash', String(Math.min(1, Math.max(0, (progress - .78) / .22))));
    if (cinematicVideo.readyState >= 1 && Number.isFinite(cinematicVideo.duration)) {
      const time = Math.min(cinematicVideo.duration - .02, progress * cinematicVideo.duration);
      if (Math.abs(cinematicVideo.currentTime - time) > .035) cinematicVideo.currentTime = time;
    }
    if (renderedProgress !== targetProgress) requestAnimationFrame(renderFilm);
    else { frameRequested = false; lastFrameTime = 0; }
  };
  const updateTarget = () => {
    const travel = Math.max(1, cinematic.offsetHeight - window.innerHeight);
    targetProgress = Math.min(1, Math.max(0, -cinematic.getBoundingClientRect().top / travel));
    if (!frameRequested) {
      frameRequested = true;
      requestAnimationFrame(renderFilm);
    }
  };
  cinematicVideo.addEventListener('loadedmetadata', updateTarget);
  window.addEventListener('scroll', updateTarget, {passive: true});
  window.addEventListener('resize', updateTarget);
  updateTarget();
}

// Reveal the editorial copy as it enters view. The content stays visible without JS or with reduced motion.
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('has-motion');
  document.querySelectorAll('.work-intro h2, .experience-roles a, .work-copy h3, .work-description, .work-visual, .case-breakdown > div, .about-main h2, .capabilities h2').forEach(element => element.classList.add('scroll-reveal'));
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, {threshold: .12, rootMargin: '0px 0px -7% 0px'});
  document.querySelectorAll('.scroll-reveal').forEach(element => revealObserver.observe(element));

  const dataStory = document.querySelector('.data-story');
  const orbit = document.querySelector('.data-orbit');
  const dots = [...orbit.querySelectorAll('.orbit-dot')];
  const words = ['OPTIMIZATION', 'DIGITAL TWINS', 'VECTOR SEARCH'];
  const typedFocus = document.querySelector('.typed-focus');
  let orbitActive = false;
  let orbitFrame = 0;
  let orbitSizes = [];
  let typeStarted = false;

  const measureOrbit = () => {
    orbitSizes = dots.map(dot => ({x: dot.parentElement.clientWidth / 2, y: dot.parentElement.clientHeight / 2}));
  };
  const animateOrbit = now => {
    orbitFrame = 0;
    if (!orbitActive || document.hidden) return;
    dots.forEach((dot, index) => {
      const angle = index * 1.65 + now * .00038 * (index % 2 ? -1 : 1) * (1 + index * .08);
      const {x, y} = orbitSizes[index];
      dot.style.transform = `translate(-50%, -50%) translate3d(${Math.cos(angle) * x}px, ${Math.sin(angle) * y}px, 0)`;
    });
    orbitFrame = requestAnimationFrame(animateOrbit);
  };
  const startTyping = () => {
    if (typeStarted) return;
    typeStarted = true;
    let word = 0;
    let characters = words[0].length;
    let deleting = true;
    const step = () => {
      if (document.hidden) return setTimeout(step, 500);
      const current = words[word];
      typedFocus.textContent = current.slice(0, characters);
      if (deleting && characters === 0) {
        word = (word + 1) % words.length;
        deleting = false;
      } else if (!deleting && characters === words[word].length) {
        deleting = true;
        return setTimeout(step, 1800);
      } else {
        characters += deleting ? -1 : 1;
      }
      setTimeout(step, deleting ? 38 : 72);
    };
    setTimeout(step, 1800);
  };
  const dataObserver = new IntersectionObserver(([entry]) => {
    orbitActive = entry.isIntersecting;
    if (!orbitActive) {
      cancelAnimationFrame(orbitFrame);
      orbitFrame = 0;
      return;
    }
    dataStory.classList.add('is-visible');
    measureOrbit();
    dots.forEach(dot => { dot.style.left = '50%'; dot.style.top = '50%'; });
    if (!orbitFrame) orbitFrame = requestAnimationFrame(animateOrbit);
    startTyping();
  }, {threshold: .05});
  dataObserver.observe(dataStory);
  window.addEventListener('resize', measureOrbit);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && orbitActive && !orbitFrame) orbitFrame = requestAnimationFrame(animateOrbit);
  });
}
