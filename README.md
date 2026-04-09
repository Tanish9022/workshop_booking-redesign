# WorkshopPortal | UI/UX Redesign 🚀

A modern, mobile-first frontend redesign for a legacy workshop booking platform. This project transforms a functional but dated interface into a high-performance, accessible, and visually cohesive user experience.

## ⚠️ Note on Original Repository
The original Django project encountered static file configuration issues, which prevented the frontend from rendering correctly. This redesign was conducted independently to resolve those visual limitations, focusing on modernizing the UI/UX while strictly adhering to the project's intended functional structure.

## ✨ Recent Updates (April 2026)
- **Premium Minimal Color System**: Refactored the entire UI to a sophisticated dark/neutral theme using `bg-[#020617]` and grayscale accents.
- **Global Layout Refactor**: Centralized `Navbar` and `Footer` in `App.jsx` for single-instance rendering.
- **Modern Light-Themed Footer**: Redesigned to match the light-themed sections, eliminating harsh visual breaks.
- **Social Media Integration**: Added accessible GitHub, Twitter, and Discord icons using `react-icons`.

## 🛠️ Design & Implementation Decisions

### 1. What design principles guided your improvements?
My primary guidance came from the **UX4G Handbook** and **Modern Minimalist** principles:
- **Mobile-First**: Prioritizing the experience for students on mobile devices.
- **Visual Hierarchy**: Using scale and weight (bold headings vs. medium body text) to guide users toward the "Book Workshop" CTA.
- **Clarity & Intentionality**: Every element (shadows, borders, rounding) was applied with purpose to reduce cognitive load and avoid "just-in-case" clutter.
- **Accessibility (WCAG)**: Ensuring high color contrast (min 4.5:1), semantic HTML tags, and accessible touch targets.

### 2. How did you ensure responsiveness across devices?
Responsiveness was achieved through a multi-layered strategy:
- **Tailwind Grid & Flexbox**: Using responsive utility classes (e.g., `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) to adapt layouts seamlessly.
- **Touch-Friendly Targets**: All interactive elements (buttons, links) follow the **min 44px height** rule to ensure usability on mobile touchscreens.
- **Adaptive Navigation**: Implemented a sticky mobile-first navbar with a collapsible hamburger menu for small screens.
- **Viewport-Relative Spacing**: Using flexible padding (`px-6 md:px-12`) to maintain balance on both ultra-wide and narrow displays.

### 3. What trade-offs did you make between the design and performance?
I prioritized **Performance-First Design**:
- **CSS over JS Animations**: Used native Tailwind transitions and transforms instead of heavy libraries like Framer Motion to ensure smooth interactions on low-end mobile devices.
- **Native SVG Icons**: Leveraged `react-icons` (SVGs) instead of image assets to minimize HTTP requests and bundle size.
- **Lightweight State**: Avoided Redux/Context for simple UI states (like navbar toggles) to keep the React reconciliation cycle fast and the bundle small.
- **Selective Shadowing**: Used `shadow-sm` and `blur-3xl` CSS effects sparingly to avoid rendering lag on older mobile GPUs.

### 4. What was the most challenging part of the task and how did you approach it?
The most challenging part was **Architectural Refactoring of Legacy Layouts**. The initial project had `Navbar` and `Footer` components duplicated across multiple pages and nested incorrectly.
- **Approach**: I performed a "Surgical Refactor" by first mapping the component tree. I then centralized the global layout into `App.jsx` and converted page-level components into clean content fragments. This ensured a "Single Source of Truth" for the UI framework and eliminated rendering bugs caused by duplication.

## 💻 Tech Stack
- **Frontend**: React 19 (Functional Components, Hooks, Suspense)
- **Styling**: Tailwind CSS v4 (@tailwindcss/vite)
- **Icons**: React Icons (Font Awesome)
- **Build Tool**: Vite

## 🚀 Getting Started
```bash
# Clone the repository
git clone https://github.com/Tanish9022/workshop_booking-redesign.git

# Navigate to the frontend directory
cd workshop_booking/frontend

# Install dependencies
npm install

# Start development
npm run dev
```

---
*Designed for the next generation of engineers.*
