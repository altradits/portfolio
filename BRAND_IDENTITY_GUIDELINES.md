# ALTRADITS BRAND IDENTITY & VECTOR LOCKUP SPECIFICATION
### Master Vector Geometry, Typography, and Color Standard
**Brand Entity**: Altradits Engineering Syndicate (Founded by Stanley Chege Thuita)  
**Specification Version**: 3.0 (Exact Vector Lockup Standard)  
**Status**: Formally Approved by the Altradits Executive Board  

---

## 1. Master Vector Logo Lockup Specifications

The Altradits brand lockup consists of two core elements unified with balanced padding and mathematical alignment:

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
* **Text String**: `"Altradits"` (Strict Title Case: capital `'A'` followed by lowercase `'ltradits'`).
* **Font Family**: `Open Sans` (Weights: Bold 700 / ExtraBold 800).
* **Letter Spacing (Tracking)**: `20px` expanded kerning.
* **Color**: Solid Periwinkle / Medium Cornflower Blue (`#4A6FA5` / `rgb(74, 111, 165)`).
* **Horizontal Alignment**: Center-anchored (`x="510" y="148"` within `1000x360` viewBox to account for trailing tracking).

### 1.2 Swoosh Graphic Specifications
* **Placement**: Positioned directly centered underneath the wordmark.
* **Shape**: A fluid, asymmetric horizontal wave ribbon featuring needle-sharp tapered ends:
  * **Left Tip**: Starts at `(215, 195)`, pointing sharply up-left.
  * **Right Tip**: Terminates at `(785, 275)`, pointing sharply down-right.
  * **Middle Body**: Swells volumetrically between `X=380` and `X=620` with a smooth ~48px organic thickness.
* **Color**: Solid vivid Coral-Red (`#E55252` / `rgb(229, 82, 82)`).
* **3D Contour Finish**: Multi-stop linear gradient (`#FF6B6B` ➔ `#E55252` ➔ `#D43D3D` ➔ `#A82020`) creating a soft inner shadow gradient along its lower contour and specular sheen along its upper edge.

### 1.3 Composition & Alignment
* **Vertical Alignment**: Clean, balanced vertical padding between the baseline of the wordmark and the top crest of the swoosh.
* **Background**: Pure transparent SVG canvas (`viewBox="0 0 1000 360"`).
* **Deliverable Formats**:
  * `theme/assets/logo.svg` & `assets/logo.svg` — Master Scalable Vector Graphic with embedded Open Sans font.
  * `theme/assets/logo-badge.svg` & `assets/logo-badge.svg` — Solid white badge container lockup.
  * `theme/assets/logo.png` & `assets/logo.png` — 4x Super-sampled rasterized PNG with badge container.
  * `theme/assets/logo-transparent.png` & `assets/logo-transparent.png` — 4x Super-sampled transparent PNG.
  * `theme/assets/favicon.svg` & `public/favicon.svg` — Standalone coral-red wave ribbon icon.

---

## 2. Master Color Palette Architecture

| Color Role | Color Name | Hex Code | RGB | Strategic Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Wordmark** | Cornflower Blue | `#4A6FA5` | `74, 111, 165` | "Altradits" Title Case Wordmark |
| **Primary Swoosh** | Vivid Coral-Red | `#E55252` | `229, 82, 82` | Centered 3D Wave Ribbon Underneath |
| **Swoosh Light Sheen**| Coral Highlight | `#FF6B6B` | `255, 107, 107` | Upper Contour Specular Highlight |
| **Swoosh Deep Shadow**| Deep Crimson | `#A82020` | `168, 32, 32` | Lower Contour Depth Gradient |
| **Canvas Background**| Obsidian Black | `#09090B` | `9, 9, 11` | Primary Syndicate Dark Mode Surface |
| **Accent Accent** | Bitcoin Gold | `#F59E0B` | `245, 158, 11` | Value Rails & Settlement Badges |
| **Accent Telemetry** | Lightning Emerald| `#10B981` | `16, 185, 129` | Node Health & Live Network Telemetry |

---

## 3. Mathematical Vector Path Definition

```xml
<!-- Typography (Title Case "Altradits", 20px Tracking, Open Sans 800) -->
<text x="510" y="148" 
      font-family="'Open Sans', sans-serif" 
      font-size="94" 
      font-weight="800" 
      letter-spacing="20px" 
      fill="#4A6FA5" 
      text-anchor="middle">Altradits</text>

<!-- Fluid Asymmetric Wave Ribbon Swoosh (Needle Tips + Volumetric Body) -->
<path d="M 215,195 
         C 270,222 365,262 495,256 
         C 610,250 715,188 785,275 
         C 715,255 595,292 488,298 
         C 355,306 262,238 215,195 Z" 
      fill="url(#coral3DGradient)" />
```
