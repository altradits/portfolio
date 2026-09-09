# ALTRADITS BRAND IDENTITY & VECTOR LOGO SPECIFICATION
### Single Unified Master Vector Lockup Standard
**Brand Entity**: Altradits Engineering Syndicate (Founded by Stanley Chege Thuita)  
**Specification Version**: 4.0 (Exact Master Standard)  
**Status**: Formally Approved & Synchronized  

---

## 1. Master Vector Logo Lockup Standard

The Altradits brand lockup consists of the title-case typography and the dynamic asymmetric wave ribbon swoosh unified in exact mathematical geometry:

```
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                A l t r a d i t s                                  |
|                             \~~~~~~~~~~~~~~~~~~~~~/                               |
|                           (Centered Coral-Red Swoosh)                             |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 1.1 Typography Specifications
* **Text String**: `"Altradits"` (*Title Case*: Capital `'A'` followed by lowercase `'ltradits'`).
* **Font Family**: `Open Sans` (Bold 700 with standalone embedded font geometry).
* **Color**: Solid Cornflower Blue (`#4A6FC3` / `rgb(74, 111, 195)`).
* **Kerning**: Standard balanced Open Sans tracking.
* **Anchor**: Center-anchored (`x="510" y="194"` within `1024x450` viewBox).

### 1.2 Swoosh Graphic Specifications
* **Placement**: Positioned directly centered underneath the wordmark.
* **Shape**: Fluid, asymmetric horizontal wave ribbon:
  * **Left Needle Tip**: Points up-left (`92, 238`).
  * **Trough**: Curves downwards through `(197.5, 331.8)` to `(315.4, 358.9)`.
  * **Upward Sweep**: Rises through `(476.6, 293.9)` to crest at `(782.0, 222.9)`.
  * **Right Needle Tip**: Terminates at `(924, 287)` pointing down-right.
  * **Lower Contour**: Swells volumetrically to ~65px thickness at `(312.5, 428.8)` and tapers smoothly back to both needle tips.
* **Color & 3D Depth**: Solid vivid Coral-Red (`#E64F56` / `rgb(230, 79, 86)`) with a multi-stop linear gradient (`#FF636B` ➔ `#E64F56` ➔ `#D43A42` ➔ `#B32028`) creating a soft inner shadow along its lower contour and specular sheen along its upper edge.

### 1.3 Active Logo Deliverables
All non-matching variations and obsolete files have been purged. The active assets are:

* `theme/assets/logo.svg` (and mirrored in `assets/logo.svg`, `public/logo.svg`) — **Master Scalable Vector Graphic**
* `theme/assets/logo.png` (and mirrored in `assets/logo.png`, `public/logo.png`) — **High-DPI 4x Badge Raster PNG**
* `theme/assets/logo-transparent.png` (and mirrored) — **High-DPI 4x Transparent Raster PNG**
* `theme/assets/favicon.svg` & `favicon.png` — **Active Favicon Icon**
* `theme/assets/hero-watermark.svg` — **Ambient Hero Section Texture**

---

## 2. Color Palette Values

### 2.1 Core Identity & Logo Assets
| Role | Color Name | Hex | RGB | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Wordmark** | Cornflower Blue | `#4A6FC3` | `74, 111, 195` | "Altradits" Wordmark |
| **Swoosh Body** | Coral-Red | `#E55252` | `229, 82, 82` | Wave Ribbon Swoosh & CTA Highlights |
| **Swoosh Highlight**| Coral Sheen | `#FF6E6E` | `255, 110, 110` | Hover States & Specular Highlight |
| **Swoosh Shadow** | Deep Crimson | `#B32028` | `179, 32, 40` | Lower Contour Depth |

### 2.2 Luxury Light Palette (Active Default)
| Role | Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `--al-surface-bg` | `#FAFAFA` | Main body & section background canvas |
| **Surface Cards** | `--al-surface-card` | `#FFFFFF` | Elevated cards, containers, modal menus |
| **Subtle Card Surface** | `--al-surface-subtle` | `#F4F4F5` | Secondary card fills, code containers |
| **Card Borders** | `--al-border` | `#E4E4E7` / `rgba(228,228,231,0.8)` | Clean dividing lines & card outlines |
| **Hover Border** | `--al-border-hover` | `#CBD5E1` | Interactive card hover borders |
| **Primary Text** | `--al-text-primary` | `#09090B` | H1/H2/H3 titles, prominent headings |
| **Secondary Text** | `--al-text-secondary` | `#52525B` | Paragraph body copy, card descriptions |
| **Muted Text** | `--al-text-muted` | `#71717A` | Metadata, tags, footnotes |
| **Accent Rails** | Bitcoin Gold / Emerald | `#D97706` / `#059669` | Metric numbers and speed velocity tags |

---

## 3. UI & Design Rules

1. **Button Constraints**:
   - Zero emojis and zero SVG/icon graphics inside buttons.
   - Text only, bold, uppercase or clear title case.
   - Primary action buttons: Coral Red `#E55252` background with pure white text and hover shift to `#FF6E6E`.
   - Secondary action buttons: Pure white `#FFFFFF` surface with `#E4E4E7` border and dark `#18181B` text.

2. **No Top Pill Badges**:
   - Do not display personal name/title floating pill badges above headings.

3. **Fluid Grid & Flexbox**:
   - Sections must expand fluidly using CSS Grid and Flexbox up to `max-w-7xl` / `2xl:max-w-[1600px]`.
   - Grid cards stretch equally using `auto-rows-fr` and `h-full` to avoid ragged empty card bottoms.

4. **Direct-Response Copywriting**:
   - Short, punchy sentences written in active voice.
   - Address the reader directly with "you" and "your".
   - No em dashes (—), en dashes (–), or connector hyphens.
   - No semicolons.
   - No AI marketing cliches (e.g., *delve*, *skyrocket*, *game-changer*, *unlock*, *revolutionize*, *tapestry*).
