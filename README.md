# Innerbloom Festival Website – README

## Overview

Innerbloom is a multi-page website created to showcase a fictional electronic/techno music festival inspired by the atmosphere and aesthetics of Tomorrowland (actually existing festival). The project demonstrates front-end development skills, including reusable UI (user interface) components, responsive layouts, modular JavaScript, and consistent styling across multiple pages.

The website contains essential festival information such as the lineup, artist details, schedule, and ticket purchasing options (everything as a separate html page).

## Pages Structure

### 1. `index.html` – Main Page

- Features a large hero title introducing the Innerbloom Festival.
- Includes a lineup preview displaying featured artists in a simple visual arrangement.
- Provides button to immidiatly navigate into purchising tickets.
- Provides navigation to deeper pages for users to explore more details (header menu).

### 2. `lineup.html` – Artist Lineup

- Displays each artist inside a card component designed for clarity and consistency.
- Each card includes a button that opens a modal window with additional information about the artist.
- The card & modal system is powered by reusable JavaScript functions from script.js.

### 3. `schedule.html` – Festival Schedule

- Reuses the hero lineup preview from the main page for visual consistency.
- Contains collapsible windows representing Day 1 and Day 2 of the festival.
- Users can expand each collapse panel to view the schedule and artist time slots in more details.
- Each artist has been assigned to a certain stage; stage name is button that opens a modal window with additional information about the stage.
- Collapsible functionality comes from shared JavaScript utilities.

### 4. `tickets.html` – Ticket Types & Purchase

- Lists all seven ticket types, each showing price, description, and features.
- Includes a ticket selection feature (an arrow) that scrolls the user down to the purchase form.
- The form includes basic client-side validation handled via the shared JavaScript file.

## Global Website Structure

Across all pages, the website uses:

- A shared header navigation bar for consistent site-wide navigation.
- A shared footer containing essential event and contact information.
- One main stylesheet (`styles.css`) to keep the entire project visually unified.

## Assets & Styling

### Styles

- The project includes a single styles.css file.
- Most design elements (buttons, cards, modals, layout components, collapsibles) are fully reusable across every page.
- This ensures that every page maintains a cohesive festival-inspired aesthetic.

### Scripts

- All dynamic functionality is contained in script.js, including:
  - Opening/closing modal windows
  - Toggling collapsible sections
  - Form validation
  - Counter of "total to pay"
- The script is included at the bottom of each HTML file to ensure the DOM loads before the JavaScript executes, minimizing errors.

### Images

- All images used across the website are stored in the images/ folder.
- The folder contains artist pictures, backgrounds, and decorative assets (such as icons).

## Design Inspiration

The design concept was heavily inspired by Tomorrowland, especially in:

- Color palette
- Typography and decorative elements
- Layered visuals and festival atmosphere
- General UI mood and experience

The goal was to capture a modern electronic music festival feeling while keeping the implementation straightforward and original.

## Disclaimer

Some images and text descriptions used in this project were generated with the assistance of AI tools.
The purpose of this project is to demonstrate front-end development skills, UI structuring, and coding techniques - was met.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Project folder structure:

/project-folder
├── index.html
├── lineup.html
├── schedule.html
├── tickets.html
├── styles.css
├── script.js
├── README.md
└── /images
