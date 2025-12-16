import $ from 'jquery';

/**
 * Cart functionality with localStorage persistence
 */
export function initCart() {
  const $cartCount = $("#cart-count");

  // Initialize cart count from localStorage
  let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
  $cartCount.text(cartCount);

  function updateCart() {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    $cartCount.text(cartCount);

    $cartCount.addClass("cart-bump");

    // Remove animation class after animation completes
    setTimeout(function () {
      $cartCount.removeClass("cart-bump");
    }, 300);
  }

  // Add to cart button click handler - multiple selectors
  $(document).on("click", ".button, button", function (e) {
    const buttonText = $(this).text().trim().toUpperCase();

    console.log("Button clicked:", buttonText);

    // Check if button is an "ADD" or "Add to Cart" button
    if (buttonText === "ADD" || buttonText === "ADD TO CART" || buttonText.includes("ADD")) {
      e.preventDefault();
      e.stopPropagation();

      console.log("Adding to cart...");

      updateCart();

      // Show feedback to user
      const $button = $(this);
      const originalText = $button.text();
      const originalBg = $button.css("background-color");

      $button.text("ADDED!").css("background-color", "#3adb76");

      setTimeout(function () {
        $button.text(originalText).css("background-color", originalBg);
      }, 1000);
    }
  });
}
