# GeoVisuals Section Redesign - Complete Documentation

## 🎨 Overview

The GeoVisuals section has been completely redesigned from a **static grid gallery** to an **interactive, tab-based carousel** with improved storytelling, readability, and map visibility.

---

## ✨ Key Features

### **1. Tab-Based Navigation**
- Three tabs: **Maps | StoryMaps | Dashboards**
- Each tab shows item count
- Tab state persists during browsing
- Clean, modern button design

### **2. Split-Screen Layout**
```
┌─────────────────────────────────────────────┐
│  [Left 40%]          [Right 60%]            │
│  • Title             Large Preview           │
│  • Description       (Image or Iframe)      │
│  • Key Takeaway                             │
│  • Tags                                     │
│  • CTA Button                               │
└─────────────────────────────────────────────┘
```

### **3. Navigation Features**
- **Previous/Next Arrows** — Click or use keyboard ← →
- **Progress Indicator** — Shows current position (e.g., "2 / 5")
- **Progress Dots** — Click any dot to jump to that item
- **Keyboard Navigation** — Full arrow key support

### **4. Responsive Design**
- Desktop: Split-screen layout (40% left, 60% right)
- Tablet: Adjusted spacing and font sizes
- Mobile: Stacks text above image for readability

### **5. Content Display**
- **Maps**: Full-resolution image display
- **StoryMaps**: Embedded ArcGIS StoryMaps (iframe)
- **Dashboards**: Embedded dashboards (Google Data Studio, ArcGIS)

### **6. Accessibility**
- ✅ Full keyboard navigation (arrow keys, tab stops)
- ✅ ARIA labels on all interactive elements
- ✅ Focus states on buttons
- ✅ Alt text on images
- ✅ Screen reader friendly

---

## 📁 New File Structure

```
src/
├── data/
│   └── geovisuals.ts              [NEW] Data arrays for Maps, StoryMaps, Dashboards
├── components/
│   └── sections/
│       ├── GeoVisuals.tsx          [UPDATED] Main section component
│       └── GeoVisualsCarousel.tsx  [NEW] Carousel component with all logic
```

---

## 📊 Data Structure

### **GeoVisualItem Interface**
```typescript
interface GeoVisualItem {
  id: string;              // Unique identifier (map-1, story-1, etc.)
  title: string;           // Display title
  description: string;     // Detailed description
  keyTakeaway: string;     // Key insight/finding
  tags: string[];          // Topic tags
  image: string;           // Image path or thumbnail
  link: string;            // URL (local path for images, full URL for iframes)
  type: 'image' | 'iframe'; // Display type
}
```

### **Current Data Arrays**

**MAPS (4 items)**
- Maize Suitability Assessment
- Wetland Health Index (WHI)
- Land Use and Land Cover Classification
- Vegetation Cover in Volcanoes National Park

**STORYMAPS (2 items)**
- Climate Change Adaptation in Rwanda
- Roots of Success: Rwanda's Journey to a Greener Future

**DASHBOARDS (2 items)**
- Environmental Monitoring Dashboard
- Climate Adaptation Indicators

---

## 🛠️ Component Architecture

### **GeoVisuals.tsx** (Main Section)
```typescript
- Manages active tab state
- Renders tab buttons
- Passes data to carousel
- Displays info cards
```

**Key State:**
```typescript
const [activeTab, setActiveTab] = useState<TabType>('maps');
```

### **GeoVisualsCarousel.tsx** (Carousel Component)
```typescript
- Displays single item in split-screen
- Manages carousel position
- Handles navigation (prev/next)
- Keyboard event listeners
- Progress indicator
```

**Key State:**
```typescript
const [currentIndex, setCurrentIndex] = useState(0);
```

---

## ⌨️ Keyboard Navigation

| Key | Action |
|-----|--------|
| `←` Arrow Left | Previous item |
| `→` Arrow Right | Next item |
| `Tab` | Navigate buttons and interactive elements |
| `Enter/Space` | Activate button |

---

## 🎨 Styling

### **Colors**
- Primary: `text-green-900`, `bg-green-700`
- Accent: `text-amber-700` (for dashboards)
- Secondary: `text-blue-700` (for story maps)

### **Typography**
- Titles: `text-2xl md:text-3xl font-bold`
- Description: `text-base md:text-lg`
- Tags: `text-xs` with `rounded-full`

### **Spacing**
- Container padding: `p-6 md:p-10`
- Gap between elements: `gap-6 md:gap-8`
- Section padding: `py-20`

---

## 📱 Responsive Breakpoints

```
Mobile (<768px):
- Single column layout
- Text stacked above image
- Adjusted font sizes
- Full-width buttons

Tablet (768px - 1024px):
- 2-column grid with smaller gaps
- Reduced padding

Desktop (1024px+):
- Split-screen (40/60)
- Full spacing
- Side-by-side layout
```

---

## 🔄 How It Works

### **User Flow**

1. **View Tab** → Click "Maps", "StoryMaps", or "Dashboards"
2. **See First Item** → Carousel loads first item in tab
3. **Read Content** → Title, description, key takeaway, tags visible
4. **See Preview** → Large image or embedded map on right
5. **Navigate** → Click arrows, dots, or press arrow keys
6. **Jump to Item** → Click progress dot to go to specific item
7. **Open Full View** → Click CTA button to view in full size

### **State Management**

```typescript
// Tab selection
const [activeTab, setActiveTab] = useState<TabType>('maps');

// Item position in carousel
const [currentIndex, setCurrentIndex] = useState(0);

// Derived value
const currentItem = getActiveData()[currentIndex];
```

---

## ✅ Adding New Items

### **Step 1: Add to Data Array**

```typescript
// In src/data/geovisuals.ts

export const MAPS: GeoVisualItem[] = [
  // ... existing items
  {
    id: 'map-5',
    title: 'New Map Title',
    description: 'Detailed description...',
    keyTakeaway: 'Main finding or insight',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    image: './images/new-map.jpg',
    link: '/images/new-map.jpg',
    type: 'image'
  }
];
```

### **Step 2: For Iframes (StoryMaps/Dashboards)**

```typescript
{
  id: 'story-3',
  title: 'New StoryMap',
  description: 'Description...',
  keyTakeaway: 'Key insight...',
  tags: ['Climate', 'Adaptation'],
  image: './images/thumbnail.jpg',  // Preview/thumbnail
  link: 'https://storymaps.arcgis.com/stories/xxxxx',
  type: 'iframe'
}
```

### **Step 3: Test**
- Count updates automatically
- Navigation works seamlessly
- Responsive design adjusts

---

## 🎯 Features Implemented

✅ **Tab-based layout** with three content categories
✅ **Split-screen design** (40% text, 60% preview)
✅ **One item at a time** (no vertical scrolling)
✅ **Previous/Next navigation** with arrow buttons
✅ **Progress indicator** showing position
✅ **Progress dots** for quick navigation
✅ **Keyboard navigation** (arrow keys)
✅ **Responsive design** (mobile, tablet, desktop)
✅ **Image and iframe support**
✅ **Full accessibility** (ARIA, focus states, alt text)
✅ **Key takeaway section** with styling
✅ **Tags for categorization**
✅ **External link integration**
✅ **Info cards** showing category counts

---

## 🚀 Performance Considerations

- **Lazy iframe loading** — `loading="lazy"` attribute
- **No page reloads** — SPA navigation
- **Efficient state management** — Minimal re-renders
- **Optimized images** — Consider compressing `./images/` files
- **Smooth animations** — CSS transitions for interactions

---

## 🔗 Integration

### **In App.tsx**
GeoVisuals component is already integrated. No changes needed.

### **Component Imports**
```typescript
import { GeoVisuals } from './components/sections/GeoVisuals';
```

---

## 📝 Example: Adding a Dashboard

```typescript
// In src/data/geovisuals.ts

const newDashboard: GeoVisualItem = {
  id: 'dash-3',
  title: 'Forest Cover Monitoring Dashboard',
  description: 'Real-time tracking of forest coverage changes across protected areas.',
  keyTakeaway: 'Dashboard-based approach enables rapid response to deforestation',
  tags: ['Monitoring', 'Forests', 'Real-time'],
  image: './images/forest-dashboard-thumbnail.jpg',
  link: 'https://lookerstudio.google.com/embed/reporting/xxxxx/page/yyyy',
  type: 'iframe'
};

export const DASHBOARDS: GeoVisualItem[] = [
  // ... existing dashboards
  newDashboard
];
```

---

## 🎨 Design Highlights

### **Visual Hierarchy**
1. Section title (largest)
2. Item title (large)
3. Key takeaway (highlighted box)
4. Description (main text)
5. Tags (small, categorized)

### **Interactive Elements**
- Buttons: Hover states, focus rings
- Progress dots: Active state (wider, green)
- Navigation: Clear hover feedback
- Links: External link icons

### **Storytelling**
- Title introduces topic
- Description provides context
- Key takeaway highlights value
- Tags show relevance
- Image/map shows visual proof

---

## 📞 Troubleshooting

### **Issue: Carousel not showing**
- Check: Data arrays populated in `src/data/geovisuals.ts`
- Check: GeoVisualsCarousel imported correctly

### **Issue: Keyboard navigation not working**
- Browser must have focus on page
- Ensure no input fields intercepting keys

### **Issue: Images not loading**
- Verify image paths in `./images/`
- Check file names match exactly
- Use absolute paths for web URLs

### **Issue: Iframes not displaying**
- Verify URL is embed-friendly (ArcGIS, Google Data Studio)
- Check `loading="lazy"` supported
- Ensure HTTPS URLs

---

## 🎓 Learning Resources

- **Carousel Patterns**: https://www.w3.org/WAI/ARIA/apg/patterns/carousel/
- **Tab Patterns**: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
- **Responsive Design**: https://tailwindcss.com/docs/responsive-design

---

## 📈 Future Enhancements

- [ ] Add filtering (by tags)
- [ ] Add search functionality
- [ ] Add favorites/bookmarks
- [ ] Add download options
- [ ] Add comments/annotations
- [ ] Add related items suggestions
- [ ] Add zoom for maps
- [ ] Add fullscreen mode

---

## 🎉 Summary

The new GeoVisuals section provides:
- **Better UX** — Clear navigation, focused content
- **Improved Storytelling** — Key takeaways, descriptions
- **Greater Visibility** — Large preview area
- **Full Accessibility** — Keyboard navigation, ARIA labels
- **Professional Design** — Modern, clean, research-focused
- **Mobile Friendly** — Responsive across all devices

Enjoy your redesigned portfolio! 🚀
