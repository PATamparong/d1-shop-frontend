import Flickity from 'flickity';
import 'flickity/css/flickity.css';

/**
 * Initialize Flickity carousels
 */
export function initCarousels() {
  // Expose Flickity globally for potential external use
  window.Flickity = Flickity;

  // Initialize main product carousel
  const mainCarousel = document.querySelector('.main-carousel');
  if (mainCarousel) {
    new Flickity(mainCarousel, {
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      pageDots: true,
      prevNextButtons: true,
    });
  }

  // Initialize testimonial cards carousel
  const testimonialCarousel = document.querySelector('.testimonial-cards-carousel');
  if (testimonialCarousel) {
    new Flickity(testimonialCarousel, {
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      pageDots: true,
      prevNextButtons: true,
    });
  }
}
