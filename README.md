# Nexsoft Admin Dashboard

A responsive admin dashboard UI built with HTML5, CSS3, JavaScript, and Chart.js for the Nexsoft Solutions internship.

## Live Links

- GitHub Repository: https://github.com/fazal305/nexsoft-admin-dashboard
- Live Demo: https://fazal305.github.io/nexsoft-admin-dashboard/

## Overview

Nexsoft Admin Dashboard is a responsive dashboard interface for viewing business metrics, revenue charts, orders charts, sidebar navigation, and dark/light theme switching.

The project focuses on reusable UI components, responsive dashboard layout, Chart.js integration, and clean frontend structure.

## Features

- Responsive sidebar layout
- Mobile sidebar overlay
- Dashboard stat cards
- Monthly revenue line chart
- Weekly orders bar chart
- Dark and light mode toggle
- Theme saved in localStorage
- Active navigation states
- Escape key closes mobile sidebar
- Chart colors update with theme
- Responsive chart cards
- Keyboard focus states
- GitHub Pages ready

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js CDN
- localStorage
- GitHub Pages
  Folder Structure
  nexsoft-admin-dashboard/
  index.html
  style.css
  script.js
  README.md
  LICENSE
  .gitignore
  Getting Started

Clone the repository:

git clone https://github.com/fazal305/nexsoft-admin-dashboard.git

Open the folder:

cd nexsoft-admin-dashboard

Open index.html in your browser.

No installation or build tools are required.

Architecture Notes

The project is a static frontend dashboard.

index.html contains the sidebar, navbar, stat cards, and chart sections.
style.css controls the responsive layout, dashboard cards, dark/light theme variables, and mobile sidebar.
script.js controls sidebar behavior, active nav states, theme switching, localStorage theme persistence, and Chart.js chart rendering.
Accessibility

Accessibility support includes:

Semantic main, aside, header, nav, section, and article elements
Sidebar navigation labels
aria-current for active navigation
aria-expanded on mobile menu button
Button type="button" attributes
Escape key sidebar close
Visible keyboard focus states
Responsive layout for smaller screens
Performance

Performance notes:

Static frontend project
No build process
Lightweight custom JavaScript
CDN-loaded Chart.js
CSS variables for efficient theme switching
GitHub Pages compatible
Testing Checklist

Before final submission:

Test desktop layout
Test mobile sidebar open/close
Test overlay close
Test Escape key close
Test all sidebar nav links
Test dark/light mode toggle
Refresh page and confirm selected theme persists
Check chart visibility in both themes
Test mobile responsiveness
Run JavaScript syntax check:
node --check script.js
Lessons Learned
Building a responsive admin dashboard layout
Using CSS variables for theme switching
Creating reusable dashboard card components
Rendering charts with Chart.js
Saving UI preference in localStorage
Improving accessibility in dashboard navigation
Future Improvements
Add real dashboard pages
Add table widgets
Add recent activity feed
Add notification dropdown
Add date range filter
Add chart data switching
Add backend API integration
Add role-based admin UI later
