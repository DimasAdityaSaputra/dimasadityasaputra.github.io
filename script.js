const tiltCard = document.querySelector('[data-tilt-card]');

if (tiltCard && window.matchMedia('(pointer: fine)').matches) {
  const resetTilt = () => {
    tiltCard.style.setProperty('--tilt-x', '0deg');
    tiltCard.style.setProperty('--tilt-y', '0deg');
  };

  tiltCard.addEventListener('pointermove', (event) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    tiltCard.style.setProperty('--tilt-x', `${(-y * 8).toFixed(2)}deg`);
    tiltCard.style.setProperty('--tilt-y', `${(x * 10).toFixed(2)}deg`);
  });

  tiltCard.addEventListener('pointerleave', resetTilt);
}

const navLinks = [...document.querySelectorAll('.nav-links a')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
      });
    },
    {
      rootMargin: '-25% 0px -55% 0px',
      threshold: [0.1, 0.25, 0.5, 0.75],
    }
  );

  sections.forEach((section) => observer.observe(section));
}
