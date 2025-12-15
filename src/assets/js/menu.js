import $ from 'jquery';

export function initMenu() {
  const $mobileMenu = $('#mobile-menu');

  // Close mobile menu when clicking on menu items
  $mobileMenu.find('a').on('click', function() {
    if ($mobileMenu.is(':visible')) {
      $mobileMenu.hide();
    }
  });

  // Close mobile menu when clicking outside
  $(document).on('mousedown touchstart', function(e) {
    if (!$mobileMenu.is(':visible')) {
      return;
    }

    const $target = $(e.target);

    if ($target.closest('.menu-icon').length > 0 ||
        $target.closest('#mobile-menu').length > 0) {
      return;
    }

    $mobileMenu.hide();
  });
}
