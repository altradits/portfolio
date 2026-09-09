# ALTRADITS BRAND IDENTITY & DESIGN SYSTEM MANUAL
### Master Color Palette, Vector Geometry & Aerodynamic Swoosh Specification
**Entity**: Altradits Engineering Syndicate (Founded by Stanley Chege Thuita)  
**Version**: 2.0 (High-Intensity Luxury Fintech Edition)  
**Status**: Formally Approved by the Altradits Executive Board  

---

## 1. Executive Brand Identity & Symbology

### 1.1 The Altradits Name & Wordmark
**Altradits** represents the convergence of **high-altitude adventure**, **cryptographic sound money (Bitcoin)**, and **sub-second financial engineering**.

* **The Wordmark Typography**: Rendered in heavy-weight neo-grotesque sans-serif (*Plus Jakarta Sans / Inter*), featuring high-contrast **Electric Cobalt Blue** (`#3B82F6` ➔ `#1D4ED8`).
* **The Aerodynamic Velocity Wave (Swoosh)**: A custom-engineered, multi-stop cubic bezier arc in **Kinetic Crimson** (`#F43F5E` ➔ `#E11D48`). It symbolizes sub-second payment settlement velocity, friction-free money flow, and adrenaline-fueled engineering precision.

```
+-----------------------------------------------------------------------------------+
|                            ALTRADITS BRAND EMBLEM                                 |
|                                                                                   |
|                               A l t r a d i t s                                   |
|                          \~~~~~~~~~~~~~~~~~~~~~~~~~/                              |
|                              (Velocity Swoosh)                                    |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

---

## 2. Master High-Intensity Color Palette Architecture

The Altradits color system is engineered for maximum visual impact on dark OLED/Retina displays, maintaining strict **WCAG AAA contrast ratios** across all text and interactive elements.

```
+----------------------------------------------------------------------------------------------------+
|                                    ALTRADITS 5-TIER COLOR MATRIX                                   |
+----------------------+-------------+-------------------+-------------------------------------------+
| PALETTE TIER         | SHADE HEX   | RGB / HSL VALUES  | STRATEGIC UI APPLICATION                  |
+----------------------+-------------+-------------------+-------------------------------------------+
| **Electric Cobalt**  | `#60A5FA`   | `96, 165, 250`    | Wordmark Light Gradient / Active Hover    |
| (Primary Authority)  | `#3B82F6`   | `59, 130, 246`    | **Core Brand Blue** (Dominant Wordmark)   |
|                      | `#1D4ED8`   | `29, 78, 216`     | Deep Shadow Gradient / Primary Badges     |
|                      | `#1E3A8A`   | `30, 58, 138`     | Glow Backgrounds / Low-light Borders      |
+----------------------+-------------+-------------------+-------------------------------------------+
| **Kinetic Crimson**  | `#FF6B81`   | `255, 107, 129`   | Swoosh Leading Edge / Ambient Glow        |
| (Velocity Swoosh)    | `#F43F5E`   | `244, 63, 94`     | **Core Velocity Red** (Aerodynamic Arc)   |
|                      | `#E11D48`   | `225, 29, 72`     | Deep Base Arc / Action Callouts           |
|                      | `#BE123C`   | `190, 18, 60`     | Baseline Shadow / High-Emphasis Badges    |
+----------------------+-------------+-------------------+-------------------------------------------+
| **Lightning Gold**   | `#FDE047`   | `253, 224, 71`    | High-Intensity CTA Buttons / Sat Counter  |
| (Sound Money Rails)  | `#F59E0B`   | `245, 158, 11`    | **Core Bitcoin Gold** (Package Badges)    |
|                      | `#D97706`   | `217, 119, 6`     | 3D Button Shadows / Metric Highlights     |
+----------------------+-------------+-------------------+-------------------------------------------+
| **Emerald Velocity** | `#34D399`   | `52, 211, 153`    | Telemetry Beacon Pulse / Latency Numbers  |
| (Settlement Speed)   | `#10B981`   | `16, 185, 129`    | **Core M-Pesa Green** (Success Status)    |
|                      | `#059669`   | `5, 150, 105`     | Terminal Success Stream / Health Check    |
+----------------------+-------------+-------------------+-------------------------------------------+
| **Obsidian Dark**    | `#040C07`   | `4, 12, 7`        | Void Canvas Background (99.9% Black)      |
| (Luxury Foundation)  | `#08160E`   | `8, 22, 14`       | Elevated Glassmorphic Card Surface        |
|                      | `#0D2418`   | `13, 36, 24`      | Hover Card Surface / Modal Canvas         |
+----------------------+-------------+-------------------+-------------------------------------------+
```

---

## 3. Mathematical Swoosh Bezier Geometry

The velocity swoosh is rendered via pure parametric cubic bezier equations to guarantee infinite scalability without jagged edges:

```xml
<!-- Primary Aerodynamic Velocity Wave -->
<path d="M 215,208 
         C 280,256 385,302 485,294 
         C 580,286 680,212 768,206 
         C 695,214 590,254 495,260 
         C 410,266 315,236 215,208 Z" 
      fill="url(#altraditsCrimson)" />
```

### Geometric Principles:
1. **Left Anchor**: Tapered needle point at `(215, 208)` directly below the letter "l".
2. **Vortical Drop**: Fluid parabolic curve reaching its deepest belly at `(485, 294)` below the letter "a".
3. **Kinetic Rise & Crest**: Smooth acceleration sweeping upward past `(680, 212)` under the letters "i" and "t".
4. **Right Terminal**: Crisp aerodynamic release tapering to a needle tip at `(768, 206)` directly under the trailing tail of "s".

---

## 4. Typography Hierarchy & Font Tokens

| Hierarchy Level | Typeface | Weights | Letter Spacing | CSS Variable |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Wordmark** | `Plus Jakarta Sans` | ExtraBold (800) | `-0.03em` | `--font-display` |
| **Hero Headlines** | `Playfair Display` / `Plus Jakarta Sans` | Black (900) | `-0.04em` | `--font-display` |
| **UI & Body Copy** | `Inter` / `Plus Jakarta Sans` | Regular (400), Medium (500), Bold (700) | `-0.01em` | `--font-body` |
| **Telemetry & Code** | `JetBrains Mono` | Medium (500), Bold (700) | `+0.02em` | `--font-mono` |

---

## 5. CSS Tokens & Design System Implementation

```css
:root {
  /* Brand Primary: Electric Cobalt */
  --al-cobalt-light: #60A5FA;
  --al-cobalt-core:  #3B82F6;
  --al-cobalt-deep:  #1D4ED8;

  /* Brand Action: Kinetic Crimson */
  --al-crimson-light: #FF6B81;
  --al-crimson-core:  #F43F5E;
  --al-crimson-deep:  #E11D48;
  --al-crimson-glow:  rgba(244, 63, 94, 0.45);

  /* Sound Money: Bitcoin Gold */
  --al-gold-bright: #FDE047;
  --al-gold-core:   #F59E0B;
  --al-gold-deep:   #D97706;
  --al-gold-glow:   rgba(245, 158, 11, 0.35);

  /* Settlement: Emerald */
  --al-emerald-light: #34D399;
  --al-emerald-core:  #10B981;
  --al-emerald-deep:  #059669;

  /* Luxury Obsidian Canvas */
  --al-obsidian-void: #040C07;
  --al-obsidian-surf: rgba(8, 22, 14, 0.85);
  --al-obsidian-card: rgba(13, 36, 24, 0.70);

  /* Glass Dividers */
  --al-glass-border: rgba(255, 255, 255, 0.12);
  --al-glass-border-bright: rgba(255, 255, 255, 0.24);
}
```

---

## 6. Asset File Registry & Usage Locations

| Asset Filename | Format | Description & Usage |
| :--- | :--- | :--- |
| 📁 `theme/assets/logo.svg` | Vector SVG | **Master Primary Brand Logo** (Full color on transparent) |
| 📁 `theme/assets/logo-badge.svg` | Vector SVG | **Solid White Capsule Badge** (Floating glass navbar) |
| 📁 `theme/assets/logo-dark.svg` | Vector SVG | **Neon Glow Edition** (Dark background applications) |
| 📁 `theme/assets/logo.png` | 3x Retina PNG | Rasterized badge for legacy browser fallbacks |
| 📁 `theme/assets/logo-transparent.png` | 3x Retina PNG | Transparent high-DPI rasterized logo |
| 📁 `assets/logo.svg` | Vector SVG | Public distribution root copy |
