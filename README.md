# WorkshopPortal | UI/UX Redesign 🚀

A modern, mobile-first frontend redesign for a legacy workshop booking platform. This project transforms a functional but dated interface into a high-performance, accessible, and visually cohesive user experience.

## ✨ Recent Updates (April 2026)
- **Premium Minimal Color System**: Refactored the entire UI from a blue-heavy design to a sophisticated dark/neutral theme using `bg-[#020617]` and high-contrast grayscale accents.
- **Global Layout Refactor**: Centralized `Navbar` and `Footer` in `App.jsx`, ensuring they render only once across the application and improving structural integrity.
- **Modern Light-Themed Footer**: Redesigned the footer to match the light-themed sections of the page, eliminating harsh visual breaks and adding subtle elevation.
- **Social Media Integration**: Added accessible GitHub, Twitter, and Discord icons using `react-icons` with smooth hover states.
- **Mobile-First Navigation**: Implemented a fully responsive sticky navbar with a functional hamburger menu and shadow-on-scroll effects.

## 🛠️ Key Improvements
- **Modern Minimalist UI**: Card-based layouts with generous whitespace and clear hierarchy.
- **Enhanced Visual Hierarchy**: Strategic use of typography (Inter/Noto Sans) and a refined color palette to guide users toward primary CTAs.
- **Accessibility-First**: Semantic HTML5, ARIA labels, and high-contrast combinations (contrast ratio ≥ 4.5:1) for full WCAG compliance.
- **Performance Optimized**: Leveraged Vite and native CSS/Tailwind transitions for a lightweight, fast-loading experience on all devices.

## 📐 Design Principles (UX4G Handbook)
- **Mobile-First**: Designed for small screens first with touch-friendly targets (min 44px height).
- **Clarity over Complexity**: Reduced cognitive load by simplifying forms and grouping information into logical sections.
- **Consistency**: Established a design system using Tailwind utility classes for uniform spacing, rounding (`rounded-lg`), and shadows.

## 💻 Tech Stack
- **Frontend**: React 19 (Functional Components, Hooks, Suspense/Lazy)
- **Styling**: Tailwind CSS v4 (@tailwindcss/vite)
- **Icons**: React Icons (Font Awesome)
- **Build Tool**: Vite
- **Version Control**: Git-based workflow

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Tanish9022/workshop_booking-redesign.git

# Navigate to the frontend directory
cd workshop_booking/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🏗️ Project Structure
```text
frontend/
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, Hero, etc.)
│   ├── pages/           # Page-level components (Home.jsx)
│   ├── App.jsx          # Global layout and routing
│   └── main.jsx         # Entry point
```

## ⚠️ Backend Compatibility Note
The legacy Django 3.0.7 backend requires a **Python 3.10 or 3.11** environment due to the removal of `distutils` in Python 3.12. This redesign focuses on the frontend layer, ensuring the UI is modern, responsive, and ready for integration once a compatible environment is provisioned.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---
*Designed for the next generation of engineers.*
