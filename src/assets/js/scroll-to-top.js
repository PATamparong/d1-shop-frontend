import $ from 'jquery';

/**
 * Scroll to top button functionality
 */
export function initScrollToTop() {
  const scrollToTopBtn = $("#scroll-to-top");

  // Show/hide button based on scroll position
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      scrollToTopBtn.addClass("show");
    } else {
      scrollToTopBtn.removeClass("show");
    }
  });

  // Smooth scroll to top on click
  scrollToTopBtn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
}
