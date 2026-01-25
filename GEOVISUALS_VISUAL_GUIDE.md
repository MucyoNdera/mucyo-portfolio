# GeoVisuals Redesign - Quick Visual Guide

## 🎨 Layout Overview

```
╔════════════════════════════════════════════════════════════════════════╗
║                         GeoVisuals Section                             ║
║                                                                        ║
║  [Maps] [StoryMaps] [Dashboards]    ← TAB NAVIGATION                  ║
║                                                                        ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  ┌─────────────────────────┬──────────────────────────────────────┐   ║
║  │ LEFT (40%)              │ RIGHT (60%)                          │   ║
║  │                         │                                      │   ║
║  │ Title                   │                                      │   ║
║  │ ════════════            │  ┌──────────────────────────────┐   │   ║
║  │                         │  │                              │   │   ║
║  │ Description text        │  │   Large Preview Image        │   │   ║
║  │ describing the map...   │  │   or Embedded Map/Dashboard  │   │   ║
║  │                         │  │                              │   │   ║
║  │ 🎯 Key Takeaway        │  │                              │   │   ║
║  │ ─────────────────       │  └──────────────────────────────┘   │   ║
║  │ Main insight or finding │                                      │   ║
║  │ from the analysis       │                                      │   ║
║  │                         │                                      │   ║
║  │ #Agriculture #Mapping  │                                      │   ║
║  │ #Sustainability #Data  │                                      │   ║
║  │                         │                                      │   ║
║  │ [View Full Map]         │                                      │   ║
║  │ (External Link)         │                                      │   ║
║  │                         │                                      │   ║
║  └─────────────────────────┴──────────────────────────────────────┘   ║
║                                                                        ║
║  ← Previous  ••••◉•••••  Next →  |  2 / 5                            ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

---

## 📱 Mobile View

```
╔═══════════════════════════╗
║      GeoVisuals           ║
║                           ║
║ [Maps] [Stories] [Dash]  ║
║                           ║
║ Title                     ║
║ ══════════                ║
║                           ║
║ Description text that     ║
║ explains this map...      ║
║                           ║
║ 🎯 Key Takeaway          ║
║ ─────────────────         ║
║ Main finding from         ║
║ the analysis             ║
║                           ║
║ #Tag1 #Tag2              ║
║                           ║
║ [View Full]              ║
║ ┌───────────────────────┐ ║
║ │                       │ ║
║ │   Preview Image       │ ║
║ │   (Full Width)        │ ║
║ │                       │ ║
║ └───────────────────────┘ ║
║                           ║
║ ← 2/5 → (Controls)        ║
║                           ║
╚═══════════════════════════╝
```

---

## ⌨️ Keyboard Navigation

```
Press ←          Press →
  ↓               ↓
[Previous]  Current Item  [Next]
  ↑               ↑
Click arrow    Click arrow
```

**Key mappings:**
- `←` — Go to previous item
- `→` — Go to next item
- `Tab` — Navigate through buttons
- `Enter/Space` — Click button
- `Click dots` — Jump to specific item

---

## 🎯 Tab Categories

```
┌─────────────┬──────────┬─────────────┐
│   MAPS      │STORYMAPS │ DASHBOARDS  │
│ (4 items)   │(2 items) │ (2 items)   │
│             │          │             │
│ 1. Maize    │ 1.Adapt- │ 1.Envir-    │
│ 2. Wetland  │    ation │   onmental  │
│ 3. LULC     │ 2.Forest │ 2.Climate   │
│ 4. Vegeta-  │ Restoration Indicators │
│    tion     │          │             │
└─────────────┴──────────┴─────────────┘
```

---

## 📊 Data Flow

```
User selects tab
    ↓
Component state updates
    ↓
Data array filtered by tab
    ↓
First item displayed in carousel
    ↓
User navigates with arrows/dots
    ↓
Index updates, new item displays
    ↓
No page reload!
```

---

## 🔄 Navigation Examples

**Example 1: Click Next Arrow**
```
Item 1 (Maize Suitability)
    ↓ [Click →]
Item 2 (Wetland Health Index)
    ↓ [Click →]
Item 3 (LULC Classification)
    ↓ [Click →]
Item 4 (Vegetation Cover)
    ↓ [Click →] (Wraps around)
Item 1 (Maize Suitability)
```

**Example 2: Click Progress Dot**
```
Current: Item 1/4
    ↓ [Click dot 3]
Jump to: Item 3/4 (LULC)
```

**Example 3: Keyboard Navigation**
```
Viewing Maps, Item 2
    ↓ [Press →]
Viewing Maps, Item 3
    ↓ [Click StoryMaps tab]
Viewing StoryMaps, Item 1 (resets)
```

---

## 🎨 Visual Elements

### **Button States**

**Tab Buttons:**
```
Inactive: [Maps (4)]          Active: [Maps (4)]
        Gray border, green text       Green background, white text
        Hover effect                  No hover needed
```

**Navigation Buttons:**
```
Normal:    [← ]  [→]
Hover:     [←]  [→]   (darker, more visible)
Focus:     Has green ring around button
```

**Progress Dots:**
```
Inactive: ● (small, gray)
Active:   ●●●●●● (wider, green)
Hover:    Slightly larger
```

### **Text Styling**

```
TITLE
═════════════════════════════════════════
Large, bold, green color

Description text that explains the map...
Regular size, gray color

🎯 Key Takeaway
───────────────────────────────────────
Main insight or finding from the data.
Highlighted in green box with border

#Tag1  #Tag2  #Tag3
Small tags with green background
```

---

## 🎬 Animation Details

| Element | Animation |
|---------|-----------|
| Tab switch | No animation (instant) |
| Carousel item | Fade/slide effect |
| Hover buttons | Color transition (200ms) |
| Focus ring | Appear on tab/click |
| Progress dots | Width transition |

---

## 📏 Layout Proportions

```
Split-Screen (Desktop)
Left:   40% (400px max)
Right:  60% (600px max)
Gap:    24-32px

Mobile Stack
Text:   100% width
Image:  100% width
Vertical order: Text above image
```

---

## 🌈 Color Scheme

```
Primary:     Green (#059669)      - Tabs, highlights
Text:        Gray (#111827)       - Body text
Accent:      Amber (#B45309)      - Dashboards
Secondary:   Blue (#2563EB)       - StoryMaps
Background:  White (#FFFFFF)      - Main
Subtle:      Green 50 (#F0FDF4)   - Info boxes
```

---

## ⚡ Performance Features

```
✓ Lazy iframe loading
  When type='iframe', adds loading="lazy"

✓ No re-renders on navigation
  Only index state updates

✓ Smooth scrolling
  CSS transitions for animations

✓ Keyboard listeners
  Efficient event handling
```

---

## ✅ Testing Checklist

- [ ] Click each tab (Maps, StoryMaps, Dashboards)
- [ ] Press arrow keys (← →)
- [ ] Click previous/next buttons
- [ ] Click progress dots
- [ ] Click "View Full" button
- [ ] Test on mobile (responsive)
- [ ] Test keyboard navigation only
- [ ] Check focus states visible
- [ ] Verify images load
- [ ] Check iframe embeds work
- [ ] Test counter updates (e.g., 2/5)
- [ ] Verify tab count displays

---

## 🎓 File Structure

```
geovisuals/
├── GeoVisuals.tsx              (Tab management)
│   └── Manages: activeTab state
│   └── Renders: Tab buttons, carousel, info cards
│
├── GeoVisualsCarousel.tsx       (Carousel logic)
│   └── Manages: currentIndex state
│   └── Renders: Split-screen layout, navigation
│
└── data/geovisuals.ts          (Content)
    └── MAPS array
    └── STORYMAPS array
    └── DASHBOARDS array
```

---

## 🚀 Deployment Notes

When deploying:
1. Images in `./public/images/` load correctly
2. iframes (StoryMaps, Dashboards) load from HTTPS URLs
3. Keyboard navigation works after initial page load
4. Focus indicators visible in all browsers

---

## 💡 Pro Tips

**Adding Content:**
- Keep titles under 50 characters
- Key takeaway should be 1-2 sentences
- Use 3-4 tags per item
- Ensure images are compressed

**Customization:**
- Change split percentage: Edit grid `lg:col-span-2` and `lg:col-span-3`
- Modify colors: Search for `text-green-` and `bg-green-`
- Adjust spacing: Update `gap-`, `p-`, `py-` values

**Performance:**
- Compress images before adding
- Use proper image formats (webp, jpg)
- Test iframe loading speed

---

## 🎯 Summary

The new GeoVisuals section provides:
- **Better UX** — Tab-based, focused navigation
- **Professional Design** — Split-screen, modern aesthetic
- **Rich Content** — Descriptions, insights, tags
- **Full Accessibility** — Keyboard + screen reader support
- **Mobile Ready** — Responsive on all devices
- **Easy to Extend** — Add new items to data arrays

Enjoy your redesigned portfolio! 🚀
