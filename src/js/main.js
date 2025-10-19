import "../css/index.css";
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

// Anchor focus
const highlight = document.createElement('span');
highlight.classList.add('highlight');

const allTriggers = document.querySelectorAll('a');
document.body.append(highlight);

function highlightLink() {
const linkCoords = this.getBoundingClientRect();
const coords = {
  width: linkCoords.width,
  height: linkCoords.height,
  top: linkCoords.top + window.scrollY,
  left: linkCoords.left + window.scrollX
};

highlight.classList.remove('reset');
highlight.style.top = -5 + "px";

highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

allTriggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
allTriggers.forEach(a => a.addEventListener('focus', highlightLink));

function hideHighlight() {
    highlight.classList.add('reset');
}

window.addEventListener('resize', hideHighlight);
