# My React Portfolio

My personal developer portfolio, rebuilt with React from my original vanilla HTML, CSS, and JavaScript website.

> 🚧 **Work in progress.** I'm still refining the existing pages and adding new features as I build my frontend skills.

**Live site:** Coming soon  
**Original portfolio:** [View the original site](https://mylesmureithi.github.io/my-portfolio/)

## Overview

I built this to deepen my understanding of React by rebuilding an existing site with a component-based architecture.

The original version repeated the navbar and footer markup across multiple HTML pages. With React, those are reusable components inside one shared layout, and navigation is handled by client-side routing instead of separate files.

## Tech Stack

- **React**: component-based UI
- **React Router**: client-side routing and active navigation links
- **react-router-hash-link**: smooth scrolling to page sections, including from other routes
- **react-icons**: icon components
- **Day.js**: keeps the footer year current
- **Vite**: development server and build tooling
- **CSS**: custom properties for theming and responsive layouts

## Features

- Fixed navbar with active-link highlighting
- Shared layout with a reusable navbar and a footer that stays at the bottom on short pages
- Home page with a hero section, profile picture, and two equal-width introduction panels
- Skills page with a responsive icon grid generated from a data array
- Contact link that smooth-scrolls to the message section on whichever page you're on
- Scroll resets to the top when navigating between routes
- Theme colors defined once as CSS custom properties

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) and npm

```bash
git clone https://github.com/MylesMureithi/my-react-portfolio.git
cd my-react-portfolio
npm install
npm run dev
```

Open the local URL Vite prints in your terminal (typically `http://localhost:5173`).

## Project Structure

```text
src/
├── assets/          # Images and static assets
├── components/
│   ├── common/      # Navbar, Footer, Message, ScrollToTop
│   └── Hero/        # General and programming introductions
├── pages/
│   ├── Home/
│   └── Skills/
├── App.jsx          # Shared layout and route definitions
├── main.jsx         # Entry point (BrowserRouter)
└── index.css        # Global styles and shared layout
```

## Roadmap

- Projects page
- Skills grouped by category
- A section on interests beyond programming
- Responsive and visual polish
- Deploy the React version

## Contact

**Myles Mureithi**
- [GitHub](https://github.com/MylesMureithi)
- [LinkedIn](https://linkedin.com/in/myles-mureithi)