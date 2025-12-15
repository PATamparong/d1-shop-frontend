# Beauty Shop Frontend

A pixel-perfect, responsive homepage for a beauty/skincare e-commerce shop, built with Foundation Sites, SCSS, and Vanilla JavaScript.

## Tech Stack

- **Framework**: Foundation Sites 6 (XY Grid, Flexbox Utilities)
- **Styling**: SCSS (Sass) with BEM naming convention where appropriate
- **JavaScript**: Vanilla ES6+, jQuery (Foundation dependency)
- **Bundler**: Vite
- **Slider**: Flickity
- **Fonts**: Google Fonts (Playfair Display, Helvetica Neue)

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── scss/            # SCSS modules
│   ├── abstracts/   # Variables, mixins
│   ├── base/        # Reset, typography
│   ├── layout/      # Header, footer, grid
│   ├── components/  # Buttons, cards, slider
│   ├── pages/       # Page-specific styles
│   └── main.scss    # Main entry point
├── js/              # JavaScript modules
│   └── app.js       # Main application logic
└── main.js          # Vite entry point
```

## Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd beauty-shop-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Key Implementation Decisions

-   **Foundation Framework**: Chosen for its robust grid system and accessibility features.
-   **SCSS Architecture**: Follows the 7-1 pattern (simplified) for scalability and maintainability.
-   **Vite**: Used for fast development and optimized production builds.
-   **Flickity**: Selected for its touch-friendly and performant carousel implementation.
-   **Design**: Implemented a "premium beauty" aesthetic with serif fonts, ample whitespace, and soft earthy tones.

## License

ISC
