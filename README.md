# D1 Shop Frontend

A fully responsive, modern e-commerce homepage for a beauty/skincare shop, built with Foundation Sites, SCSS, and modular JavaScript.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Shopping cart with localStorage persistence
- Touch-enabled product carousels with Flickity
- Smooth scroll-to-top button
- Mobile hamburger menu with click-outside-to-close
- Modular JavaScript architecture
- Premium beauty aesthetic with custom SCSS variables
- Optimized for performance with Vite

## Tech Stack

- **Framework**: Foundation Sites 6 (XY Grid, Flexbox Utilities)
- **Styling**: SCSS (Sass) with organized modular structure
- **JavaScript**: ES6+ Modules, jQuery (Foundation dependency)
- **Bundler**: Vite
- **Carousel**: Flickity (touch-enabled, responsive)
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Templating**: Handlebars for component partials

## Project Structure

```
d1-shop-frontend/
├── src/
│   ├── assets/
│   │   ├── js/
│   │   │   ├── app.js           # Main entry point
│   │   │   ├── cart.js          # Shopping cart functionality
│   │   │   ├── carousel.js      # Flickity carousel initialization
│   │   │   ├── scroll-to-top.js # Scroll to top button
│   │   │   └── menu.js          # Mobile menu click-outside handler
│   │   ├── images/              # Product images, icons
│   │   └── icons/               # SVG icons, logo
│   ├── components/              # Handlebars partials
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── promo-banner.html
│   │   ├── product-slider.html
│   │   └── ingredients.html
│   ├── sections/                # Page sections
│   │   ├── hero.html
│   │   ├── routine.html
│   │   ├── how-it-works.html
│   │   ├── three-formulas.html
│   │   └── testimonials.html
│   ├── scss/
│   │   ├── abstracts/
│   │   │   └── _variables.scss  # Colors, fonts, Foundation overrides
│   │   ├── base/
│   │   │   ├── _reset.scss      # Global resets, responsive fixes
│   │   │   └── _typography.scss # Font imports, text styles
│   │   ├── layout/
│   │   │   ├── _header.scss     # Header, navigation, mobile menu
│   │   │   └── _footer.scss     # Footer, newsletter
│   │   ├── components/
│   │   │   ├── _cards.scss      # Product cards, testimonial cards
│   │   │   ├── _slider.scss     # Flickity carousel styles
│   │   │   ├── _promo-banner.scss
│   │   │   └── _scroll-to-top.scss
│   │   ├── pages/
│   │   │   └── _home.scss       # Homepage sections
│   │   └── main.scss            # Main SCSS entry point
│   └── main.js                  # Vite entry point
├── index.html                   # Main HTML file
├── vite.config.js               # Vite configuration
└── package.json

```

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd d1-shop-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```
   Production files will be in the `dist/` folder

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## JavaScript Modules

### app.js
Main application entry point that initializes Foundation and all feature modules.

### cart.js
- Shopping cart functionality with localStorage persistence
- Add to cart button handlers
- Cart count badge with animation
- Automatic cart state restoration on page load

### carousel.js
- Initializes Flickity carousels for product and testimonial sections
- Responsive breakpoints (1 item on mobile, 2 on tablet, 3 on desktop)
- Touch-enabled swiping and navigation

### scroll-to-top.js
- Smooth scroll-to-top button
- Appears after scrolling 300px
- Responsive sizing for mobile/tablet/desktop

### menu.js
- Mobile hamburger menu click-outside-to-close functionality
- Closes menu when clicking menu items
- Works seamlessly with Foundation's data-toggle

## Responsive Breakpoints

- **Mobile**: `< 639px` (single column, compact spacing)
- **Tablet**: `640px - 1024px` (adjusted layouts, full-width containers)
- **Desktop**: `> 1024px` (multi-column, spacious layouts)

## Key Features Explained

### Shopping Cart
- Uses browser localStorage to persist cart count across sessions
- Visual feedback with animated badge on add to cart
- Button text changes to "ADDED!" temporarily

### Carousels
- Product carousel: Left-aligned, 3 items visible on desktop
- Testimonial carousel: Center-aligned, responsive cell widths
- Touch-enabled swiping on mobile devices
- Custom styled navigation dots and arrows

### Responsive Design
- Tablet-specific styles to eliminate white gaps
- Mobile-optimized header with compact elements
- Full-width containers on tablets with proper padding
- Overflow-x hidden at all breakpoints

### Color Scheme
- Primary: `#d4a373` (Soft Earthy Tone)
- Secondary: `#faedcd` (Cream)
- Accent: `#f9be4a` (Golden Yellow for badges)
- Typography: Inter (body), Playfair Display (headings)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested on common device sizes

## Performance Optimizations

- Vite for fast HMR and optimized production builds
- Modular JavaScript for code splitting
- SCSS compilation for minimal CSS output
- localStorage for client-side state management

## Development Notes

- Foundation initialized with `$(document).foundation()`
- jQuery exposed globally for Foundation compatibility
- Handlebars partials compiled at build time
- SCSS uses Foundation's breakpoint mixins

## License

ISC
