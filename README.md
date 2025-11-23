# x-nightlife

A production-ready, minimalist, and modern React website designed for an entertainment venue (mini-bar/club). This project focuses on a clean, typography-driven design with a "Light Aviation" aesthetic, avoiding heavy UI gimmicks in favor of a sleek, professional look.

## Features

-   **Modern Design**: Clean, minimalist interface with a neutral color palette and "Light Aviation" theme.
-   **Responsive Layout**: Fully responsive design that works seamlessly on desktop and mobile devices.
-   **Dynamic Routing**: Client-side routing using `react-router-dom` for smooth page transitions.
-   **Component-Based**: Modular architecture with reusable components for easy maintenance and scalability.
-   **Key Pages**:
    -   **Home**: Hero section, featured highlights, and quick links.
    -   **Events**: Upcoming live bands and events listing.
    -   **Menu**: Categorized food and drink menu.
    -   **Games**: Information about available games and entertainment.
    -   **Contact**: Location, hours, and reservation information.

## Technology Stack

-   **Frontend Framework**: [React](https://react.dev/) (v19)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [TailwindCSS](https://tailwindcss.com/)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd x-nightlife
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

```
x-nightlife/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other source assets
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── data/            # JSON data files for content (menu, events, etc.)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Individual page components
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles and Tailwind directives
├── .eslintrc.cjs        # ESLint configuration
├── tailwind.config.js   # TailwindCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## Customization

### Colors and Theme

The project uses a defined color palette in `tailwind.config.js`. You can customize the theme by modifying the `colors` object in the `extend` section:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        foreground: 'var(--color-text)',
        accent: 'var(--color-accent)',
        secondary: 'var(--color-secondary)',
      },
      // ...
    },
  },
};
```

CSS variables are defined in `src/index.css`.

## License

This project is licensed under the MIT License.
