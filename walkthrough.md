# Walkthrough - X-Nightlife Website

I have successfully generated the production-ready React website for **X-Nightlife**. The site is built with React, Vite, and TailwindCSS, featuring a minimalist, dark-themed design with gold accents.

## Features Implemented

### 1. Home Page
- **Hero Section**: Immersive background with venue branding and CTA buttons.
- **Feature Highlights**: Cards linking to Menu, Events, Games, and Reservations.
- **About Section**: Brief overview of the venue.

### 2. Events Page
- **Dynamic Listing**: Displays events from `src/data/events.json`.
- **Filtering**: Filter events by genre (Indie Rock, Jazz, House, etc.).
- **Event Cards**: Reusable component showing band info, date, time, and price.

### 3. Menu Page
- **Categorized Menu**: Food, Cocktails, Beer, etc.
- **Category Navigation**: Sticky sub-navigation for easy browsing.
- **Visuals**: Grid layout with item descriptions and prices.

### 4. Games Page
- **Games Showcase**: Pool, Darts, Poker.
- **Tournament Info**: Highlight section for weekly poker nights.

### 5. Contact Page
- **Information**: Address, Phone, Email, Hours.
- **Reservation Form**: Functional form (logs to console) for booking tables.
- **Map Placeholder**: Visual placeholder for location map.

## Project Structure

- `src/components`: Reusable components (Navbar, Footer, EventCard, MenuCategory).
- `src/pages`: Main page views.
- `src/data`: JSON files for easy content updates.
- `src/layouts`: Main layout wrapper.

## How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Customization

- **Update Data**: Edit `src/data/menu.json`, `events.json`, or `games.json` to change content.
- **Update Images**: Replace placeholder URLs in the JSON files or component code with your own assets.
- **Theme**: Modify `tailwind.config.js` and `src/index.css` to adjust colors and fonts.
