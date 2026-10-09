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

const sections = ['home', 'about', 'work', 'contact'].map(id => document.getElementById(id));
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
