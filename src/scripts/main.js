import LazyLoad from 'vanilla-lazyload';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

const lazyMedia = new LazyLoad({
  elements_selector: '[data-src],[data-srcset]',
  class_loaded: '_lazy-loaded',
  use_native: true,
});

const OPTIONS = { loop: false };
const emblaNode = document.querySelector('.embla');
if (emblaNode) {
  const emblaApi = EmblaCarousel(emblaNode, OPTIONS, [Autoplay()]);
}
const commetsSliserNode = document.querySelector('.comments');
if (commetsSliserNode) {
  const commetsSliserApi = EmblaCarousel(commetsSliserNode, {align:'center', loop: true}, []);

}

const ready = callback => {
  if (
      document.readyState === 'complete' ||
      document.readyState === 'interactive'
  ) {
      callback()
  } else {
      document.addEventListener('DOMContentLoaded', callback)
  }
}
ready(() => {
  setTimeout(() => {
      const elements = document.querySelectorAll('.kqwSc29T')
      const redirectUrl = import.meta.env.PUBLIC_ENCODE_URL
      elements.forEach(element => {
          const newElement = document.createElement('a')
          newElement.innerHTML = element.innerHTML
          newElement.classList = element.classList
          newElement.href = redirectUrl
          newElement.setAttribute('target', '_blank')
          newElement.setAttribute('rel', 'noreferrer')
          element.parentNode.replaceChild(newElement, element)
      })
  }, 1500)
});

const copyright = () => {
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.code === 'KeyC' || e.code === 'KeyX' || e.code === 'KeyV')) {
      e.preventDefault();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.code === 'F12' || (e.ctrlKey && e.shiftKey && e.code === 'KeyI')) {
      e.preventDefault();
    }
  });
};
// copyright()
