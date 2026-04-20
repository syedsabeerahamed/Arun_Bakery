# Design System Documentation

## 1. Overview & Creative North Star: "The Tactile Archivist"
This design system is built to move beyond the transactional nature of e-commerce and into the realm of a digital boutique. Our Creative North Star, **"The Tactile Archivist,"** dictates that every screen should feel like a page from a high-end culinary journal. We reject the "templated" look of modern web design in favor of editorial layouts that prioritize storytelling, sensory appeal, and heritage.

The experience is defined by:
*   **Intentional Asymmetry:** Breaking the 12-column grid to allow imagery and typography to "breathe" like a physical magazine spread.
*   **Atmospheric Depth:** Moving away from flat UI by using a palette of deep forest greens and warm creams to create a sense of place.
*   **High-Contrast Sophistication:** Pairing authoritative, heritage serifs with utilitarian sans-serifs to signal both craft and precision.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
Our palette is rooted in the earth and the oven. We use these tones not just for decoration, but to define the physical structure of the interface.

### The "No-Line" Rule
Standard UI relies on 1px borders to separate content. In this design system, **solid 1px borders for sectioning are strictly prohibited.** Boundaries must be defined through background color shifts. Use `surface-container-low` (#f5f3ee) for sections sitting on a `surface` (#fbf9f4) canvas. This creates a "soft edge" that feels more organic and premium.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked fine papers. 
*   **Base:** `surface` (#fbf9f4) for primary content areas.
*   **Elevated Elements:** Use `surface-container-lowest` (#ffffff) for high-importance cards to provide a subtle "lift."
*   **Recessed Elements:** Use `surface-container-high` (#eae8e3) for utility areas like footers or sidebars to create a sense of containment without a hard line.

### Glass & Gradient Transitions
To avoid a "flat" digital feel, apply these signature treatments:
*   **Signature Gradient:** For primary Call-to-Actions (CTAs) or Hero backgrounds, use a subtle linear gradient from `primary` (#061b0e) to `primary_container` (#1B3022). This adds a "soul" to the forest green that a flat hex code cannot achieve.
*   **The Glass Overlay:** For floating navigation or product filters, use `surface_bright` at 80% opacity with a `24px` backdrop blur. This allows the artisanal photography to bleed through the UI, softening the layout.

---

### 3. Typography: Editorial Authority
Typography is the primary vehicle for our brand's "sophisticated" voice. 

*   **The Serif (Noto Serif):** Used for all `display` and `headline` roles. This font carries the weight of tradition. For `display-lg`, use a tighter letter-spacing (-0.02em) to give it a modern, custom-type feel.
*   **The Sans-Serif (Manrope):** Used for `title`, `body`, and `label` roles. This provides a clean, functional counterpoint to the serif. 
*   **Hierarchy as Identity:** 
    *   **Display Tiers:** Use `display-lg` (3.5rem) for hero statements to command attention.
    *   **The Meta-Label:** Use `label-md` in all-caps with generous letter-spacing (0.1em) for category headers (e.g., "Sourdough Series") to create a luxury boutique "tag" feel.

---

## 4. Elevation & Depth: Tonal Layering
We achieve hierarchy through light and color, not structural dividers.

*   **The Layering Principle:** Depth is achieved by "stacking" the surface-container tiers. For instance, a `surface-container-lowest` card placed on a `surface-container-low` section creates a natural, soft lift.
*   **Ambient Shadows:** If a "floating" effect is mandatory (e.g., a cart drawer), use an extra-diffused shadow. 
    *   *Formula:* `0px 12px 32px` with 6% opacity of `on_surface` (#1b1c19). This mimics natural light filtered through a window, rather than a harsh digital shadow.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use a "Ghost Border": the `outline-variant` token (#c3c8c1) at 20% opacity. It should be felt, not seen.
*   **Glassmorphism:** Use semi-transparent `surface` colors for elements that overlay imagery. This ensures the UI feels integrated with the "bakery environment" rather than pasted on top.

---

## 5. Components: Refined Utility
Components should feel like bespoke tools, not off-the-shelf widgets.

*   **Buttons:**
    *   **Primary:** `primary` background with `on_primary` text. Use `rounded-sm` (0.125rem) for a sharp, architectural edge.
    *   **Secondary:** `outline` border (Ghost Border style) with `primary` text. No fill.
*   **Cards:** Forbid the use of divider lines. Separate the product image from the description using `1.5rem` of vertical whitespace or a subtle shift from `surface-container-low` to `surface`.
*   **Input Fields:** Avoid "boxed" inputs. Use a `surface-container-highest` background with a `0.125rem` bottom border in `tertiary` (Gold #211500) only when active.
*   **Chips:** Use `tertiary_fixed_dim` (#e9c176) for selected states to provide that "gold accent" promised in the brand palette. Text should be `on_tertiary_fixed` (#261900).
*   **Lists:** Remove all horizontal rules. Use `title-md` for the list item and `body-sm` for the description, relying on the Spacing Scale to define the rows.
*   **Bespoke Component - "The Ingredient Tag":** A specialized chip using `secondary_container` with a `label-sm` font, used to denote organic or heritage grain sources.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Whitespace:** If a layout feels "busy," double the padding between sections. Whitespace is a luxury commodity.
*   **Use Asymmetrical Grids:** Place an image in the center-left and the text in the bottom-right to create a dynamic, editorial flow.
*   **Tint Your Shadows:** Always use a dark green/black tint for shadows, never pure grey, to maintain the warmth of the forest green palette.

### Don't:
*   **Don't Use 100% Opaque Borders:** This shatters the "editorial" feel and makes the UI look like a generic dashboard.
*   **Don't Overuse Gold:** Gold (`tertiary`) is a spice, not a main ingredient. Reserve it for active states, small accents, or high-value price points.
*   **Don't Center-Align Everything:** While elegant, over-centering can feel "wedding invitation generic." Use left-aligned body text against right-aligned imagery for a more modern boutique edge.
*   **Don't Use Default Icons:** If an icon is needed, ensure it has a thin stroke weight (1px) to match the refinement of the Manrope typography.
