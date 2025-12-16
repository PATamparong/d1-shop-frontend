import $ from 'jquery';
import 'foundation-sites';
import { initCart } from './cart.js';
import { initScrollToTop } from './scroll-to-top.js';
import { initCarousels } from './carousel.js';
import { initMenu } from './menu.js';

// Expose jQuery globally for Foundation and other plugins
window.jQuery = $;
window.$ = $;

/**
 * Initialize all application modules
 */
$(document).ready(function () {
  $(document).foundation();

  initScrollToTop();
  initCarousels();
  initCart();
  initMenu();
});
