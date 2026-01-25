# Copilot Instructions for Mucyo Ndera Portfolio

## Quick Start

**Essential Commands:**
- `npm run dev`  Local dev server on http://localhost:5173
- `npm run build`  Production build to `dist/` folder
- `npm run deploy`  Deploy built site to GitHub Pages (runs predeploy hook automatically)
- `npm run lint`  Check code quality (ESLint)

**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Lucide React + Formspree (emails)  
**Deployment:** GitHub Pages (`https://MucyoNdera.github.io/mucyo-portfolio`)  
**Build Tool:** Vite (configured for React + optimized Lucide excludes)

---

## Architecture: Single-Page Scroll Portfolio

**This is NOT a routing app.** It's a stateless, scroll-based portfolio with sections as self-contained components.

### Data Flow
1. [App.tsx](src/App.tsx)  Renders all sections wrapped in ErrorBoundary; applies gradient background (`from-green-50 via-emerald-50/50 to-amber-50/30`)
2. Sections (`src/components/sections/`)  About, Experience, Skills, Projects, GeoVisuals, Contact, etc. Each manages own state
3. Cards (`src/components/cards/`)  ProjectCard, SkillCard, GeoVisualCard, etc. Handle expandable/interactive UI
4. Shared UI (`src/components/ui/`)  ErrorBoundary, SkillBar, Card (reusable card wrapper)
5. Data (`src/data/`)  Externalized TypeScript arrays/interfaces for content-heavy sections

**No Context, Props Drilling, or Global State**  Each section is independent. Data flows downward via props, state lives locally.

---

## Data Patterns

### Externalized Data (in `src/data/`)
Use for content reused across multiple components or managed by carousels:
- [geovisuals.ts](src/data/geovisuals.ts): `MAPS`, `STORYMAPS`, `VISUALIZATIONS` (all typed as `GeoVisualItem`)
  ```typescript
  export interface GeoVisualItem {
    id: string; title: string; description: string; keyTakeaway: string;
    tags: string[]; image: string; link: string; type: 'image' | 'iframe';
  }
  ```
- [projects.ts](src/data/projects.ts): `PROJECTS` (storymaps + datasets; has dual links: storymapLink, datasetLink)
- [skills.ts](src/data/skills.ts), [publications.ts](src/data/publications.ts): Arrays of objects with consistent interfaces

### Inline/Local Data
Single-use content (e.g., experience timeline, about paragraph) stays hardcoded in component for simplicity.

---

## Component Patterns

### Expandable Cards
[ProjectCard.tsx](src/components/cards/ProjectCard.tsx) exemplifies the pattern:
- Local `useState` for `isExpanded` toggle
- Renders compact view by default; shows full details on expand
- Always includes ExternalLink icons for action buttons (lucide-react)
- Uses Tailwind: `bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all`

### Carousels (Keyboard Navigation)
[GeoVisualsCarousel.tsx](src/components/sections/GeoVisualsCarousel.tsx):
- Props: `items` (array of GeoVisualItem), `tabName` (for section headings)
- Tracks `currentIndex` with useState; Left/Right arrow keys navigate
- `useEffect` listens for keyboard events on window
- Split-screen layout: `lg:grid-cols-5` (2 cols text + 3 cols image/iframe)

### Scroll-Triggered Styling
[Header.tsx](src/components/sections/Header.tsx):
- Listens to `window.scroll` event; threshold at `scrollY > 10`
- Toggles nav background opacity (`bg-white/95` when scrolled, transparent at top)
- Standard pattern: useEffect + cleanup listener on unmount

### Compact Media List (Option 1)
[Projects.tsx](src/components/sections/Projects.tsx) (deprecated):
- Row layout: thumbnail (76px square) | center content | right actions | expand indicator
- Thumbnail: `w-[76px] h-[76px] rounded-md ring-1 ring-green-200 shadow-sm` with `object-cover`
- Center: title (line-clamp-1), 2-line summary (line-clamp-2), category tag
- Right actions (desktop): compact icon buttons with text hidden on small screens; stack on mobile
- Mobile actions: hidden row below row when collapsed; full buttons in expanded panel
- Search at top with placeholder "Search Project with keywords"
- Expand/collapse to show full description and action buttons (desktop style)

### Horizontal Scroll Gallery (Option 3)
[Projects.tsx](src/components/sections/Projects.tsx):
- Fixed-width card layout: `w-80 snap-center` with scroll snapping for smooth scrolling
- Image area: `h-48` fixed height with `object-fit cover` and rounded corners
- Card content: title (line-clamp-1), 2-line summary, tag chip, compact action buttons
- Left/Right arrow buttons for one-card scroll; supports mouse wheel, trackpad, touch
- "Show Details" button reveals full description inside expandable card area
- Search filters by keyword; placeholder: "Search Project with keywords"
- Empty state shows message when no projects match search

---

## Styling Conventions

**Global Layout & Margins:**
- **Container:** All sections use `max-w-7xl mx-auto` for centering
- **Horizontal Padding:** `px-4 sm:px-6 lg:px-8` (responsive padding)
- **Mobile:** `px-4` (~16px), Tablet: `px-6` (~24px), Desktop: `px-8` (~32px)
- **Consistency:** Hero, About, Experience, Skills, Projects, Publications, GeoVisuals, Contact, Footer all use this pattern
- **No Overrides:** Removed inline section-level `px-4` (moved to container level)

**Color System:**
- **Primary:** Greens (`green-900` headings, `green-800` accents, `green-600` links)
- **Background:** `bg-green-50` (base), cards `bg-white/90` (semi-transparent)
- **Text:** `text-green-900` (headings), `text-gray-700` (body)

**Reusable Classes:**
- Cards: `bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`
- Hover: `hover:scale-105 hover:text-green-900` (subtle pop + color shift)
- Accent line: `h-1 w-12 bg-green-600 rounded-full` (decorative under section titles)
- Responsive spacing: `max-w-7xl mx-auto px-2 sm:px-4 lg:px-8`

**Icon Sizing:** `h-3.5 w-3.5` (nav), `h-4 w-4` (cards/buttons)

---

## External Integrations

### Form Submission (Formspree + Axios)
[Contact.tsx](src/components/sections/Contact.tsx):
- `const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_ID'` (replace with actual ID from formspree.io)
- POST to `https://formspree.io/f/${FORMSPREE_FORM_ID}` via axios
- Validation: name, email, message required; regex check on email format
- State: `submitStatus` ('idle' | 'success' | 'error'); auto-clears success after 5s
- Setup docs in [FORMSPREE_SETUP.md](FORMSPREE_SETUP.md)

### Error Boundaries
[ErrorBoundary.tsx](src/components/ui/ErrorBoundary.tsx)  Class component catching render errors in child sections. Already wrapped around all sections in App.tsx.

---

## Common Workflows

### Adding a New Section
1. Create `src/components/sections/MySection.tsx` (named export)
2. Import in [App.tsx](src/App.tsx); insert before Footer
3. Wrap in `<ErrorBoundary>` in App.tsx
4. Add nav link in [Header.tsx](src/components/sections/Header.tsx) with section `id` for scroll anchor

### Adding Content to Externalized Data
1. Edit file in `src/data/` (e.g., add project to `PROJECTS` array)
2. Import where needed: `import { PROJECTS } from "../../data/projects"`
3. Map over array in JSX; TypeScript ensures type safety

### Customizing Styles
- Update Tailwind config in [tailwind.config.js](tailwind.config.js) for global theme changes
- Inline Tailwind classes in components; no separate CSS files (convention)

---

## Deployment Notes

**GitHub Pages:**
- `homepage` in package.json points to deployment URL
- `npm run deploy` uses gh-pages package; builds first, then pushes `dist/` to gh-pages branch
- No environment variables needed for public GitHub Pages deployment

**Alternative: Vercel**
- See [VERCEL_DEPLOY.md](VERCEL_DEPLOY.md) for quick setup
- Build command: `npm run build`, Output: `dist/`
- Can store Formspree ID as env var `VITE_FORMSPREE_ID` for security
