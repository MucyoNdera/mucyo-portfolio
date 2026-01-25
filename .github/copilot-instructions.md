# Copilot Instructions for Mucyo Ndera Portfolio

## Quick Start
- **Commands:** `npm run dev` (local dev), `npm run build`, `npm run deploy` (GitHub Pages)
- **Tech:** React 18 + TypeScript + Vite + Tailwind CSS + Lucide React
- **Deployment:** GitHub Pages at `https://MucyoNdera.github.io/mucyo-portfolio`

## Architecture: Single-Page Section-Based Layout

This is NOT a routing app—it's a **single scroll-based portfolio** with sections as reusable components.

**Data Flow:**
1. [App.tsx](src/App.tsx) wraps sections in gradient background + ErrorBoundaries
2. Sections in `src/components/sections/` (Header, Hero, About, Skills, Projects, GeoVisuals, Contact, Footer)
3. Reusable cards in `src/components/cards/` (ProjectCard, SkillCard, etc.)
4. Data typically **hardcoded per section** (NOT in centralized store) OR externalized in `src/data/` files
5. Header has scroll listeners to dynamically change nav opacity (`bg-white/95` when scrolled)

**Key Pattern:** Each section independently manages state; no prop drilling needed. Cards handle expandable UI (useState for expand/collapse).

## Data Patterns

### Externalized Data (Preferred for Reusable Items)
Files in `src/data/` export TypeScript interfaces and arrays:
- [geovisuals.ts](src/data/geovisuals.ts): `MAPS`, `STORIES`, `VISUALIZATIONS` (interface: `GeoVisualItem` with id, title, description, tags, image, link, type)
- [projects.ts](src/data/projects.ts): `PROJECTS` array with storymaps and datasets (interface: title, description, image, projectLink, storymapLink, datasetLink)
- [skills.ts](src/data/skills.ts), [publications.ts](src/data/publications.ts): Similar patterns

**Import Example:**
```tsx
import { MAPS, STORIES } from '../../data/geovisuals';
```

### Inline Data (Local Component State)
Some sections keep data within component for simplicity. Only externalize if reused across multiple components.

## Component Patterns

### Cards (Expandable, Interactive)
[ProjectCard.tsx](src/components/cards/ProjectCard.tsx) exemplifies the card pattern:
```tsx
const [isExpanded, setIsExpanded] = useState(false); // Toggle detail view
// className includes: bg-white/90, rounded-xl, shadow-lg, hover:shadow-xl, transition-all duration-300
// Links to external resources use ExternalLink icon (lucide-react)
```

### Sections with Carousels
[GeoVisualsCarousel.tsx](src/components/sections/GeoVisualsCarousel.tsx) shows carousel pattern:
- Keyboard navigation: Arrow keys move between items (useEffect listener on window)
- Renders split-screen layout: lg:grid-cols-5 (2 cols text, 3 cols image)
- Props: `items` (GeoVisualItem[]), `tabName` (string)

### Scroll Listeners
[Header.tsx](src/components/sections/Header.tsx) demonstrates scroll pattern:
```tsx
useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 10);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## Styling Conventions

**Color Palette:**
- Primary: Green (`green-800`, `green-900`, `green-600`)
- Background gradient: `from-green-50 via-emerald-50/50 to-amber-50/30` (set in App.tsx)
- Cards: `bg-white/90` (semi-transparent white), `rounded-xl`, `shadow-lg`
- Text: `text-green-900` (headings), `text-gray-700` (body)

**Common Patterns:**
- Hover effects: `hover:shadow-xl`, `hover:scale-105`, `hover:text-green-900` with `transition-all duration-300`
- Transparency modifiers: `/90`, `/80`, `/95` (e.g., `bg-white/90`)
- Accents: `h-1 w-12 bg-green-600 rounded-full` (divider under section titles)
- Responsive: `md:grid-cols-2`, `lg:col-span-3`, `max-w-7xl mx-auto px-2 sm:px-4 lg:px-6`

## External Libraries

**Icons (Lucide React):**
Import as needed: `import { ChevronLeft, ExternalLink, Menu, GraduationCap } from 'lucide-react';`
Used for: navigation, section markers, action buttons. Sizes: `h-3.5 w-3.5` (nav), `h-4 w-4` (cards)

**Forms (Contact Section):**
[Contact.tsx](src/components/sections/Contact.tsx) uses **Formspree** + Axios for email:
- Form ID stored in constant: `const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_ID'`
- POST to `https://formspree.io/f/${FORMSPREE_FORM_ID}`
- Form validation before submit (name, email, message required; email format checked)
- State: `submitStatus` tracks 'idle' | 'success' | 'error'

**Error Handling:**
Wrap all sections in ErrorBoundary (class component in [ErrorBoundary.tsx](src/components/ui/ErrorBoundary.tsx)). Already applied in App.tsx.

## Adding Features

**New Section:**
1. Create component in `src/components/sections/YourSection.tsx` (named export)
2. Import in [App.tsx](src/App.tsx), place between existing sections
3. Wrap in `<ErrorBoundary>` in App.tsx
4. Add nav link in Header.tsx with smooth scroll to section ID

**New Data:**
- If reusable: Add to `src/data/*.ts`, export interface + array
- If single-use: Define data object within section component

**New Card Type:**
1. Create in `src/components/cards/YourCard.tsx`
2. Define TypeScript interface for props
3. Match styling: `bg-white/90 rounded-xl shadow-lg transition-all duration-300`

## Files Reference
- [App.tsx](src/App.tsx) — Main layout, gradient background, ErrorBoundaries
- [Header.tsx](src/components/sections/Header.tsx) — Fixed nav, scroll listener, smooth scroll links
- [ProjectCard.tsx](src/components/cards/ProjectCard.tsx) — Interactive card with expand/collapse
- [GeoVisualsCarousel.tsx](src/components/sections/GeoVisualsCarousel.tsx) — Multi-tab carousel with keyboard nav
- [Contact.tsx](src/components/sections/Contact.tsx) — Form handling with Formspree
- [geovisuals.ts](src/data/geovisuals.ts) — GeoVisual data structure
- [Skills.tsx](src/components/sections/Skills.tsx) — Example of data-driven section
- [ProjectCard.tsx](src/components/cards/ProjectCard.tsx) — Expandable interactive card pattern
- [tailwind.config.js](tailwind.config.js) — No custom theme extensions; uses defaults
