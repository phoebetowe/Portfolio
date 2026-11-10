# UI/UX principles for a professional portfolio

These are the checks to run before finishing any design change. Phoebe's saved preferences override anything here.

## Audience and tone
- Readers are law firm recruiters, attorneys, and law school admissions offices. They skim fast, so aim for quiet confidence over flash.
- They should find who she is, what she's aiming for, and her resume within about 10 seconds of landing.
- Avoid clichés like gavels, scales of justice, or stock photos of columns. Avoid emoji as decoration, and anything that reads as a template.
- Never describe her as a lawyer or legal advisor. Use "aspiring corporate attorney" or "pre-law."

## Hierarchy and layout
- Give each section one clear job, with headings that say what's in it.
- Use a consistent type scale with at most about 5 sizes. Pair a serif for display with a sans for body.
- Keep body text to about 65-75 characters per line.
- Use whitespace to separate sections. Apply borders and cards sparingly and by role, not to everything.
- Repeated items (experience entries, cards) share the same structure, padding and alignment.
- Put the most important actions first: View Resume, Contact.

## Color
- Define all colors as CSS custom properties in `css/main.css`. Never hard-code a color in a component.
- Use one accent color plus a quiet secondary. Semantic colors (success, error) are separate from the accent.
- Every new component must work in both light and dark themes.

## Accessibility
- Body text contrast should be at least 4.5:1 (aim for 7:1), and large text at least 3:1.
- Use semantic HTML (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`) and a single `h1`.
- Make focus states visible (never remove outlines). Touch targets should be at least 44px.
- Don't convey meaning by color alone. Images need `alt` text.
- Wrap all animation in `@media (prefers-reduced-motion: no-preference)`, and make sure content is never hidden if JS fails.

## Responsive
- Design mobile-first and test at 360-375px. There must be no horizontal scroll.
- Grids collapse to one column, and nav collapses to a menu button.
- Size with `clamp()` and `min()` rather than fixed widths.

## Interaction
- Interactive elements must look interactive (hover, focus and active states).
- Keep motion subtle (opacity and short translate, 200-500ms) and purposeful. Use one orchestrated moment rather than many scattered effects.
- Keep the print layout (`css/print.css`) clean for the resume.

## Performance
- No frameworks or heavy libraries. Use at most 2 font families and about 4 weights.
- Lazy-load images and give them explicit width and height. Keep JS small.
