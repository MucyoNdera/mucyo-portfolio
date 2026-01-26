# Copilot Instructions for Mucyo Ndera Portfolio

## Quick Start

**Essential Commands:**
- `npm run dev` – Local dev server on http://localhost:5173
- `npm run build` – Production build to `dist/` folder
- `npm run deploy` – Deploy to GitHub Pages (runs predeploy hook automatically)
- `npm run lint` – Check code quality (ESLint)

**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Lucide React + Formspree (emails)  
**Deployment:** GitHub Pages (`https://MucyoNdera.github.io/mucyo-portfolio`)  
**Build Tool:** Vite (configured for React + optimized Lucide excludes)

---

## Architecture: Single-Page Scroll Portfolio

**This is NOT a routing app.** It's a stateless, scroll-based portfolio where each section is independent and manages its own state. No Context API, Redux, or global state—prop drilling is minimal because components are self-contained.

### Key Data Flow
1. [App.tsx](src/App.tsx) – Renders all 11 sections wrapped in ErrorBoundary; applies gradient background
2. **Sections** (`src/components/sections/`) – Hero, About, Experience, Skills, Projects, Publications, GeoVisuals, Contact, Footer
   - Each section independently fetches/imports its data and manages local state
   - Uses `id` attributes for scroll anchor navigation (Header nav links scroll-to-id)
3. **Cards** (`src/components/cards/`) – ProjectCard, SkillCard, DatasetCard, StoryMapCard, ExperienceCard, MapCard
   - Receive data via props; handle expandable/interactive UI with local `useState`
4. **UI Components** (`src/components/ui/`) – ErrorBoundary, SkillBar, Card
   - Reusable wrappers and utilities
5. **Data** (`src/data/`) – Externalized TypeScript files with typed interfaces
   - Used by carousels, lists, and data-heavy sections

---

## Data Patterns

### Externalized Data (Use for Content Reuse or Carousels)

**GeoVisuals Data** ([geovisuals.ts](src/data/geovisuals.ts)):
- **Interface:** `GeoVisualItem` – `{ id, title, description, keyTakeaway, tags, image, link, type: 'image' | 'iframe' }`
- **Exports:** `MAPS`, `STORYMAPS`, `DASHBOARDS` (each is `GeoVisualItem[]`)
- **Usage:** Consumed by [GeoVisualsCarousel.tsx](src/components/sections/GeoVisualsCarousel.tsx) to power tab-based carousel with keyboard navigation

**Projects Data** ([projects.ts](src/data/projects.ts)):
- Contains `PROJECTS` array with storymap + dataset links (dual action buttons)
- Used by [Projects.tsx](src/components/sections/Projects.tsx) section

**Skills Data** ([skills.ts](src/data/skills.ts)):
- Organized by category: `gisTools`, `programming`, `webMapping`, `remoteSensing`
- Each skill has `{ id, name, proficiency }` (proficiency is 0–100)
- Used by [Skills.tsx](src/components/sections/Skills.tsx) with SkillBar component

**Publications & Other Data** ([publications.ts](src/data/publications.ts)):
- Similar pattern for publication lists and other reference data

### Inline/Local Data
Single-use, static content (e.g., About paragraph, Experience timeline, Contact info) stays hardcoded in component. No need to externalize unless reused or managed by carousels.

---

## Component Patterns

### Expandable Cards (Key Pattern)
[ProjectCard.tsx](src/components/cards/ProjectCard.tsx):
```tsx
const [isExpanded, setIsExpanded] = useState(false);
// Renders compact by default, full details on expand
// Tailwind toggles: max-h-0 opacity-0 → max-h-[1000px] opacity-100 (smooth animation)
```
- Use `transition-all duration-500 ease-in-out` for expand/collapse animation
- Wrap expandable content in `<div className={isExpanded ? 'max-h-[1000px]' : 'max-h-0'} ...>`
- Include ExternalLink icons (lucide-react) for action buttons

### Carousels with Keyboard Navigation
[GeoVisualsCarousel.tsx](src/components/sections/GeoVisualsCarousel.tsx):
- Tracks `currentIndex` via `useState`; updates on arrow key press
- `useEffect` listens for keyboard events; **cleanup on unmount required**
- Layout: `lg:grid-cols-5` (left: 2 cols text, right: 3 cols image/iframe)
- Navigation: arrow buttons + keyboard (ArrowLeft/ArrowRight)
- Tab selection via dot indicators

### Scroll-Triggered Styling
[Header.tsx](src/components/sections/Header.tsx):
```tsx
useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 10);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```
- Toggles nav background opacity at scroll threshold
- **Always cleanup event listeners on component unmount**

### Gallery/List Layouts
[Projects.tsx](src/components/sections/Projects.tsx) implements horizontal scroll gallery:
- Fixed-width cards: `w-80 snap-center` with scroll snapping
- Search filtering at top (filters by title/description keywords)
- Empty state when no results match

---

## Styling Conventions

### Responsive Layout Pattern
All sections follow the same structure:
```tsx
<section id="section-id" className="py-10 bg-white/80">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>
```
- Container: `max-w-7xl mx-auto` for horizontal centering
- Padding: `px-4 sm:px-6 lg:px-8` (mobile ~16px, tablet ~24px, desktop ~32px)
- Section padding: `py-10` (40px vertical)
- Background: `bg-white/80` or `bg-white/90` (semi-transparent white)

### Color System (Strict)
The portfolio uses **three primary colors** with specific roles:

1. **Green (Primary/Emphasis)**
   - Headings: `text-green-900`
   - Primary buttons: `bg-green-700 hover:bg-green-800 text-white`
   - Active nav/tabs: `bg-green-700 text-white`
   - Accent bars (under titles): `bg-green-600 h-1 w-12 rounded-full`
   - Focus rings: `focus:ring-green-600`
   - Icons: `text-green-700`

2. **Amber/Peanut (Secondary)**
   - Secondary buttons: `bg-amber-600 hover:bg-amber-700 text-white`
   - Tags/chips: `bg-amber-100 text-amber-700 ring-1 ring-amber-200`
   - Links: `text-amber-600 hover:text-amber-700`
   - Hover effects: `hover:border-amber-300`

3. **Grey (Structure)**
   - Borders (default): `border-gray-200` or `border-gray-300`
   - Dividers: `border-gray-200`
   - Inactive nav: `text-gray-700`
   - Form input focus: `focus:border-green-500 focus:ring-green-500`

4. **Black (Text)**
   - Body text/paragraphs: Always use `text-black` (not `text-gray-900`)
   - Descriptions, titles in cards: `text-black`

### Reusable Patterns
- **Card wrapper:** `bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`
- **Hover effect:** `hover:scale-105 hover:text-green-900 transition-transform`
- **Section title underline:** `h-1 w-12 bg-green-600 rounded-full`
- **Focus state:** `focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2`

### Page Background
- **Root gradient** (in [App.tsx](src/App.tsx)): `bg-gradient-to-b from-green-50 via-emerald-50/50 to-amber-50/30`

---

## External Integrations

### Form Submission (Formspree + Axios)
[Contact.tsx](src/components/sections/Contact.tsx):
- Email form sends via Formspree API: `axios.post('https://formspree.io/f/${FORM_ID}', { name, email, message })`
- **Setup:** Replace `FORMSPREE_FORM_ID` with your actual form ID from https://formspree.io
- Validation: Required fields + email regex check
- State management: `submitStatus` ('idle' | 'success' | 'error'); success auto-clears after 5s
- Setup guide: [FORMSPREE_SETUP.md](FORMSPREE_SETUP.md)

### Error Boundaries
[ErrorBoundary.tsx](src/components/ui/ErrorBoundary.tsx) – Class component that catches render errors in child components. Every section in [App.tsx](src/App.tsx) is wrapped.

---

## Common Workflows

### Adding a New Section
1. Create component in `src/components/sections/NewSection.tsx` (named export)
2. Import and add to [App.tsx](src/App.tsx) before Footer, wrapped in `<ErrorBoundary>`
3. Add scroll anchor: `<section id="section-slug" ...>`
4. Add nav link in [Header.tsx](src/components/sections/Header.tsx) with matching `id`

### Adding Content to Data Files
1. Edit file in `src/data/` (e.g., `geovisuals.ts`, `projects.ts`)
2. TypeScript interfaces ensure type safety; add to appropriate array
3. Import in consuming component: `import { MAPS } from "../../data/geovisuals"`
4. Map over array in JSX

### Updating Styles
- **Global theme:** Edit [tailwind.config.js](tailwind.config.js)
- **Component styles:** Use inline Tailwind classes (no separate CSS files)
- **Consistency:** Reference existing patterns (e.g., color codes, spacing, shadows)

---

## Deployment

**GitHub Pages (Primary):**
- Homepage: `https://MucyoNdera.github.io/mucyo-portfolio`
- Command: `npm run deploy` (builds + pushes to gh-pages branch)
- No env vars needed

**Vercel (Alternative):**
- See [VERCEL_DEPLOY.md](VERCEL_DEPLOY.md)
- Build output: `dist/`
- Can use `VITE_FORMSPREE_ID` env var for Formspree ID (security)
