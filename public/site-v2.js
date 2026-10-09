const finePointer = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
const siteCursor = document.createElement('div');
siteCursor.className = 'site-cursor';
siteCursor.setAttribute('aria-hidden', 'true');
siteCursor.innerHTML = '<span class="site-cursor-dot"></span><span class="site-cursor-pulse"></span>';
document.body.append(siteCursor);
let cursorClickTimer;
const moveSiteCursor = event => {
  if (!finePointer.matches || !['mouse', 'pen'].includes(event.pointerType)) return;
  siteCursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  siteCursor.classList.add('is-visible');
  document.documentElement.classList.add('has-custom-cursor');
};
document.addEventListener('pointermove', moveSiteCursor, {passive: true});
document.addEventListener('pointerdown', event => {
  if (!finePointer.matches || !['mouse', 'pen'].includes(event.pointerType)) return;
  moveSiteCursor(event);
  siteCursor.classList.remove('is-clicked');
  void siteCursor.offsetWidth;
  siteCursor.classList.add('is-clicked');
  clearTimeout(cursorClickTimer);
  cursorClickTimer = setTimeout(() => siteCursor.classList.remove('is-clicked'), 420);
});
document.documentElement.addEventListener('pointerleave', () => siteCursor.classList.remove('is-visible'));
window.addEventListener('blur', () => siteCursor.classList.remove('is-visible'));
finePointer.addEventListener('change', event => {
  if (event.matches) return;
  siteCursor.classList.remove('is-visible');
  document.documentElement.classList.remove('has-custom-cursor');
});

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

const sections = ['home', 'work', 'contact'].map(id => document.getElementById(id));
const darkSections = [...document.querySelectorAll('.work-panel-three, .contact')];
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
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const smoothstep = (start, end, value) => {
  const position = clamp((value - start) / (end - start));
  return position * position * (3 - 2 * position);
};

if (cinematic && cinematicVideo && !reducedMotion.matches) {
  document.documentElement.classList.add('has-film');
  cinematicVideo.pause();
  const titleLines = [...cinematic.querySelectorAll('.red-title-line')];
  const redKicker = cinematic.querySelector('.red-title-kicker');
  const redRole = cinematic.querySelector('.red-title-role');
  const redFooter = cinematic.querySelector('.red-title-footer');
  const redDescription = cinematic.querySelector('.red-title-description');
  const redActions = cinematic.querySelector('.red-title-actions');
  const descriptionWords = redDescription.textContent.trim().split(/\s+/);
  redDescription.replaceChildren();
  descriptionWords.forEach((word, index) => {
    const span = document.createElement('span');
    span.className = 'red-word';
    span.textContent = word;
    redDescription.append(span);
    if (index < descriptionWords.length - 1) redDescription.append(' ');
  });
  const wordElements = [...redDescription.querySelectorAll('.red-word')];
  const orbitRings = [...cinematic.querySelectorAll('.red-orbit .orbit-ring')];
  const orbitDots = orbitRings.map(ring => ring.querySelector('.orbit-dot'));
  const orbitPaths = [
    { start: -.35, turns: 1.05 },
    { start: 2.5, turns: -1.5 },
    { start: 4.15, turns: 1.85 },
    { start: 1.1, turns: -.85 },
    { start: 5.55, turns: 1.3 }
  ];
  let orbitSizes = [];
  const measureOrbit = () => {
    orbitSizes = orbitRings.map(ring => ({x: ring.clientWidth / 2, y: ring.clientHeight / 2}));
  };
  measureOrbit();
  let targetProgress = 0;
  let renderedProgress = 0;
  let frameRequested = false;
  let lastFrameTime = 0;
  const revealElement = (element, reveal, distance = 28) => {
    element.style.opacity = String(reveal);
    element.style.transform = `translateY(${(1 - reveal) * distance}px)`;
  };
  const renderFilm = now => {
    const elapsed = lastFrameTime ? Math.min(100, now - lastFrameTime) : 16;
    lastFrameTime = now;
    renderedProgress += (targetProgress - renderedProgress) * (1 - Math.exp(-elapsed / 90));
    if (Math.abs(targetProgress - renderedProgress) < .0005) renderedProgress = targetProgress;
    const progress = targetProgress;
    cinematic.style.setProperty('--cinematic-progress', progress.toFixed(4));
    cinematic.style.setProperty('--cinematic-caption', String(1 - smoothstep(0, .38, progress)));
    cinematic.style.setProperty('--cinematic-wash', String(smoothstep(.59, .77, progress)));
    cinematic.style.setProperty('--red-opacity', String(smoothstep(.72, .81, progress)));
    titleLines.forEach((line, index) => {
      const reveal = smoothstep(.73 + index * .035, .83 + index * .035, progress);
      revealElement(line, reveal, 85);
      line.style.clipPath = `inset(0 0 ${(1 - reveal) * 100}% 0)`;
    });
    revealElement(redKicker, smoothstep(.72, .8, progress));
    revealElement(redRole, smoothstep(.8, .89, progress));
    wordElements.forEach((word, index) => {
      revealElement(word, smoothstep(.8 + index * .005, .88 + index * .005, progress), 17);
    });
    revealElement(redActions, smoothstep(.88, .96, progress), 25);
    redActions.style.pointerEvents = progress > .93 ? 'auto' : 'none';
    redFooter.style.opacity = String(smoothstep(.87, .96, progress));
    orbitRings.forEach((ring, index) => {
      const reveal = smoothstep(.75 + index * .02, .86 + index * .02, progress);
      ring.style.opacity = String(reveal * .8);
      ring.style.transform = `translateY(${(1 - reveal) * 50}px) scale(${.82 + reveal * .18}) rotate(-5deg)`;
      const { start, turns } = orbitPaths[index];
      const travel = clamp((progress - .74) / .2);
      const travellingAngle = start + turns * Math.PI * 2 * travel;
      const centerAngle = Math.PI / 2 + Math.round((travellingAngle - Math.PI / 2) / (Math.PI * 2)) * Math.PI * 2;
      const settle = smoothstep(.92, .985, progress);
      const angle = travellingAngle + (centerAngle - travellingAngle) * settle;
      const {x, y} = orbitSizes[index];
      orbitDots[index].style.transform = `translate(-50%, -50%) translate3d(${Math.cos(angle) * x}px, ${Math.sin(angle) * y}px, 0)`;
    });
    if (cinematicVideo.readyState >= 1 && Number.isFinite(cinematicVideo.duration)) {
      const videoProgress = clamp(renderedProgress / .74);
      const time = Math.min(cinematicVideo.duration - .02, videoProgress * cinematicVideo.duration);
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
  window.addEventListener('resize', () => { measureOrbit(); updateTarget(); });
  updateTarget();
}

// Keep the editorial reveals tied to scroll position so they reverse naturally.
if (!reducedMotion.matches) {
  document.documentElement.classList.add('has-motion');
  const revealElements = [...document.querySelectorAll('.work-intro h2, .work-intro-heading p, .timeline-entry, .work-case-copy, .work-case-image, .work-story-item, .contact h2, .contact-main>p, .contact-email, .contact-destinations a')];
  revealElements.forEach(element => element.classList.add('scroll-reveal'));
  let revealRequested = false;
  const renderReveals = () => {
    revealRequested = false;
    const viewport = window.innerHeight;
    revealElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const earlyReveal = element.matches('.work-story-item, .contact h2, .contact-main>p, .contact-email, .contact-destinations a');
      const progress = earlyReveal
        ? smoothstep(viewport * 1.01, viewport * .88, rect.top)
        : smoothstep(viewport * .94, viewport * .34, rect.top);
      element.style.opacity = String(progress);
      element.style.transform = `translate3d(0, ${(1 - progress) * 42}px, 0)`;
    });
  };
  const requestReveals = () => {
    if (revealRequested) return;
    revealRequested = true;
    requestAnimationFrame(renderReveals);
  };
  window.addEventListener('scroll', requestReveals, {passive: true});
  window.addEventListener('resize', requestReveals);
  requestReveals();
}

// A responsive ASCII study of Michelangelo's public-domain Creation of Adam hands.
// Source: https://commons.wikimedia.org/wiki/File:Creation_of_Adam_(Michelangelo)_Detail.jpg
const asciiArt = document.querySelector('.ascii-art');
if (asciiArt) {
  const canvas = asciiArt.querySelector('canvas');
  const context = canvas.getContext('2d');
  const baseCanvas = document.createElement('canvas');
  const baseContext = baseCanvas.getContext('2d');
  const sourceCanvas = document.createElement('canvas');
  const sourceContext = sourceCanvas.getContext('2d', {willReadFrequently: true});
  const mask = new Image();
  let sourcePixels;
  let glyphs = [];
  let pointer = null;
  let paintRequested = false;
  let width = 0;
  let height = 0;
  let fontSize = 8;
  let pixelRatio = 1;

  const paint = () => {
    paintRequested = false;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.drawImage(baseCanvas, 0, 0, width, height);
    if (!pointer || reducedMotion.matches) return;
    const radius = Math.min(300, width * .3);
    context.font = `${fontSize}px monospace`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    for (const glyph of glyphs) {
      const distance = Math.hypot(glyph.x - pointer.x, glyph.y - pointer.y);
      if (distance >= radius) continue;
      const glow = 1 - distance / radius;
      context.fillStyle = `rgba(225, 255, 237, ${Math.min(1, glow * (.55 + glyph.alpha * 1.8))})`;
      context.fillText(glyph.char, glyph.x, glyph.y);
    }
  };
  const requestPaint = () => {
    if (paintRequested) return;
    paintRequested = true;
    requestAnimationFrame(paint);
  };
  const rebuild = () => {
    if (!sourcePixels) return;
    const bounds = asciiArt.getBoundingClientRect();
    width = Math.round(bounds.width);
    height = Math.round(bounds.height);
    if (!width || !height) return;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = baseCanvas.width = Math.round(width * pixelRatio);
    canvas.height = baseCanvas.height = Math.round(height * pixelRatio);
    baseContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    baseContext.clearRect(0, 0, width, height);
    fontSize = width < 600 ? 4.4 : Math.min(8.5, Math.max(6, width / 195));
    const stepX = fontSize * .72;
    const stepY = fontSize * 1.22;
    const mobile = width < 600;
    const scale = mobile
      ? Math.min(width * 1.7 / mask.naturalWidth, height * .42 / mask.naturalHeight)
      : Math.min(width / mask.naturalWidth, height / mask.naturalHeight);
    const artWidth = mask.naturalWidth * scale;
    const artHeight = mask.naturalHeight * scale;
    const left = (width - artWidth) / 2;
    const top = mobile ? (height - artHeight) * .4 : (height - artHeight) / 2 + height * .055;
    const characters = '@#%*+=-:.';
    glyphs = [];
    baseContext.font = `${fontSize}px monospace`;
    baseContext.textAlign = 'center';
    baseContext.textBaseline = 'middle';
    for (let y = top + stepY / 2; y < top + artHeight; y += stepY) {
      for (let x = left + stepX / 2; x < left + artWidth; x += stepX) {
        const sourceX = Math.min(mask.naturalWidth - 1, Math.floor((x - left) / scale));
        const sourceY = Math.min(mask.naturalHeight - 1, Math.floor((y - top) / scale));
        const pixel = (sourceY * mask.naturalWidth + sourceX) * 4;
        const alpha = sourcePixels[pixel + 3] / 255;
        if (alpha < .13) continue;
        const tone = sourcePixels[pixel] / 255;
        const char = characters[Math.min(characters.length - 1, Math.floor(tone * characters.length))];
        const opacity = Math.min(mobile ? .96 : .9, Math.max(mobile ? .3 : .26, alpha * (mobile ? .9 : .82) + (1 - tone) * .18));
        glyphs.push({x, y, char, alpha});
        baseContext.fillStyle = `rgba(126, 220, 184, ${opacity})`;
        baseContext.fillText(char, x, y);
      }
    }
    requestPaint();
  };
  mask.onload = () => {
    sourceCanvas.width = mask.naturalWidth;
    sourceCanvas.height = mask.naturalHeight;
    sourceContext.drawImage(mask, 0, 0);
    sourcePixels = sourceContext.getImageData(0, 0, mask.naturalWidth, mask.naturalHeight).data;
    rebuild();
  };
  mask.src = '/assets/creation-hands-mask.webp';
  new ResizeObserver(rebuild).observe(asciiArt);
  const contactSection = asciiArt.closest('.contact');
  contactSection.addEventListener('pointermove', event => {
    const bounds = asciiArt.getBoundingClientRect();
    pointer = {x: event.clientX - bounds.left, y: event.clientY - bounds.top};
    requestPaint();
  });
  contactSection.addEventListener('pointerleave', () => {pointer = null; requestPaint();});
}
