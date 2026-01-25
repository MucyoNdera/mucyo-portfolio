# Copilot Instructions for Mucyo Ndera Portfolio

## Project Overview
This is a **React 18 + TypeScript + Vite portfolio website** showcasing professional profiles, GIS expertise, projects, and publications. Deployed via GitHub Pages.

**Tech Stack:** React, TypeScript, Tailwind CSS, Vite, Lucide React icons, React Icons

**Key URLs:**
- Homepage: `https://MucyoNdera.github.io/mucyo-portfolio`
- Build tool: Vite (lightweight, fast HMR)
- Styling: Tailwind CSS with custom gradient background

## Architecture Patterns

### Component Structure
The app uses a **section-based layout** following scroll-based navigation:

```
App.tsx (main container with gradient background)
├── Header (fixed nav with smooth scroll listeners)
├── Hero (landing section)
├── About, Education, Experience (profile sections)
├── Skills, Projects, Publications (showcase sections)
├── GeoVisuals (specialized content section)
├── Contact, Footer
```

**Key Pattern:** Each section is a named component in `src/components/sections/` and imported directly into `App.tsx`. No routing—entire app is single-page with anchor-based navigation.

### Data Structure
Skills and experience data are **hardcoded within section components** as local objects (not externalized):
```tsx
const skills = {
  gisTools: [{ name: 'ArcGIS Pro', proficiency: 85 }, ...],
  programming: [{ name: 'Python', proficiency: 50 }, ...],
  // etc.
};
```

### Card Components
Reusable card patterns exist in `src/components/cards/`:
- **ProjectCard**: Interactive cards with expandable descriptions, image galleries, external links (Map, Database icons for related resources)
- **SkillCard**: Grid container for skill proficiency bars
- **ExperienceCard, DatasetCard, StoryMapCard**: Specialized content cards

All cards use **Tailwind styling with hover effects** (`scale-105`, `shadow-xl transitions`) and **interactive state management** (useState for expandable sections).

## Developer Workflows

### Commands
```bash
npm run dev        # Start Vite dev server (HMR enabled)
npm run build      # Production build to dist/
npm run lint       # ESLint check (TS + React rules)
npm run preview    # Preview prod build locally
npm run deploy     # Build + deploy to GitHub Pages
```

**Deployment:** Use `npm run deploy` which runs predeploy hook (`npm run build`) then pushes `dist/` to GitHub Pages. Base path is `/` (root deployment).

### Build Configuration
- **Vite config**: Standard React plugin, excludes `lucide-react` from optimization
- **Tailwind**: Scans `./index.html` and `./src/**/*.{js,ts,jsx,tsx}` for class names
- **TypeScript**: Strict mode enabled across tsconfig.json, tsconfig.app.json, tsconfig.node.json
- **ESLint**: Uses latest ESLint 9 with TypeScript, React hooks, and React refresh rules

## Styling Conventions

### Tailwind Specifics
- **Color scheme**: Green (`green-800`, `green-900`, `green-600`) for primary, gradients use green/emerald/amber
- **Background**: Consistent gradient: `from-green-50 via-emerald-50/50 to-amber-50/30`
- **Spacing**: Max-width container `max-w-7xl mx-auto`, responsive padding (`px-2 sm:px-4 lg:px-6`)
- **Transitions**: Use `transition-all duration-300` or `duration-700` for animations; common: hover states with `scale-105`, `shadow-xl`

### Component Styling Pattern
```tsx
className="bg-white/90 rounded-xl overflow-hidden shadow-lg 
           transition-all duration-300 hover:shadow-xl"
```
**Common modifiers:** `/90` or `/80` for transparency, `rounded-xl` for borders, `transition` for interactivity.

## Icon & UI Libraries
- **Lucide React**: Used in Header (Menu, Home, User, GraduationCap, Wrench, Briefcase, BookOpen, Map, Mail, Library, ChevronDown, ChevronUp)
- **React Icons**: Available but usage to be discovered in codebase
- **Pattern**: Icons are small (`h-3.5 w-3.5` in nav, `h-4 w-4` in cards) and match color scheme

## Navigation
- **Header component**: Fixed nav with scroll-dependent opacity (`bg-white/95` when scrolled)
- **Smooth scroll**: All nav links trigger smooth scroll to section IDs using `window.scrollY` listener
- **Mobile layout**: Component structure supports responsive grid (e.g., `md:grid-cols-2`)

## Adding New Content
1. **New Section**: Create file in `src/components/sections/`, export as named component, import in `App.tsx`
2. **New Card Type**: Create in `src/components/cards/`, define TypeScript interface for props
3. **Hardcoded Data**: Add data object at top of section component; avoid external data sources
4. **Styling**: Use Tailwind utility classes matching existing green/white/gradient palette

## Common Files Reference
- [App.tsx](src/App.tsx) — Main layout orchestrator
- [Header.tsx](src/components/sections/Header.tsx) — Navigation with scroll listener pattern
- [Skills.tsx](src/components/sections/Skills.tsx) — Example of data-driven section
- [ProjectCard.tsx](src/components/cards/ProjectCard.tsx) — Expandable interactive card pattern
- [tailwind.config.js](tailwind.config.js) — No custom theme extensions; uses defaults
