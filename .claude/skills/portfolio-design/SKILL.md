---
name: portfolio-design
description: Phoebe's design workflow for her corporate law portfolio website (and any other site or page she designs). Before designing, browse 21st.dev for components that fit, adapt the best ones, apply UI/UX principles, and follow her saved likes and dislikes. Also records her design feedback - every change she asks for becomes a "dislike" and anything she says she loves becomes a "like". Use this whenever Phoebe designs, redesigns, styles, restyles, adds a section or component to, or gives visual feedback on her website or portfolio, even if she doesn't mention 21st.dev, design, or preferences - e.g. "make the hero more interesting", "add a testimonials section", "I don't like the font", "love those cards".
---

# Portfolio design workflow

Phoebe (Finance major, Philosophy & Law minor, aiming for corporate law) is building a portfolio site that law firm recruiters, attorneys and law school admissions offices will see. She wants every design decision to:
1. draw on real, well-made components from 21st.dev,
2. follow sound UI/UX principles, and
3. respect what she has already told you she likes and dislikes.

## Step 1: Load her preferences first

Read `design-preferences.md` at the root of the website repo (e.g. `/home/user/portfolio/design-preferences.md`). If it doesn't exist, create it from the template at the bottom of this file.

Treat **Dislikes** as hard constraints: never reintroduce something she rejected. Treat **Likes** as the direction to lean into. Her preferences override 21st.dev inspiration and override the general principles below.

## Step 2: Browse 21st.dev before designing

21st.dev is a catalog of community React + Tailwind components. Every category and component page has a lightweight markdown version. Fetch those (append `.md`) instead of the heavy HTML:

- Category listing: `https://21st.dev/community/components/s/<category>.md`
- Component page: `https://21st.dev/@<author>/components/<slug>.md` (gives the description, license and live preview link)
- Full directory and docs: `https://21st.dev/llms.txt`

Useful categories for this site: `hero`, `animated-hero`, `navigation-menu`, `card`, `features`, `timeline`, `testimonials`, `stat`, `cta`, `footer`, `button`, `text`, `background`, `badge`, `tabs`, `accordion`, `faq`, `gallery`, `profile`, `team`, `marquee`, `form`. Run `curl -sS https://21st.dev/llms.txt` or view any category page to see the full list (about 80 categories).

How to browse:
1. Pick the 1-3 categories that match the section being designed (e.g. an Experience section → `timeline`, `card`).
2. Fetch each category `.md`, skim titles and descriptions, and shortlist 3-5 candidates that suit a polished, professional, law-and-finance audience. Skip gimmicky ones (heavy shaders, AI-chat widgets, neon, playful 8-bit) unless she asks for them.
3. Fetch the shortlisted component `.md` pages to read what each one does.
4. Tell Phoebe in a short list which components you're drawing from, with their 21st.dev links, before or alongside the change. She wants to see where ideas come from.

If 21st.dev doesn't load (DNS or proxy error), the session's network probably doesn't allow it. Say so plainly, and ask her to use the "portfolio" cloud environment, which allows 21st.dev. Don't silently skip this step.

## Step 3: Adapt, don't paste blindly

Her site is plain HTML/CSS/vanilla JS (no React, no Tailwind, no build step), so 21st.dev components are adapted, not dropped in:

- **Default: recreate the pattern.** Rebuild the layout, interaction and visual idea in the site's own HTML/CSS, using the site's existing color tokens and fonts (`css/main.css`) so it stays consistent.
- **Copying code directly** is fine when the source is actually available (installing it needs a 21st.dev API key; ask for one through the credential form, never in chat) and its license allows reuse (MIT, Apache etc.). Many components list "License: unknown". For those, recreate the idea and don't copy the code verbatim. Credit the author in an HTML comment when you closely adapt something.
- Strip any React state, Framer Motion, or Tailwind classes into plain CSS and a few lines of JS.
- Keep motion subtle and wrapped in `prefers-reduced-motion`.

## Step 4: Apply UI/UX principles

Read `references/ui-ux-principles.md` and check the design against it before finishing, especially:
- the audience and tone for law-firm readers,
- hierarchy,
- accessibility (contrast, focus, semantic HTML),
- mobile at 360px, and
- performance.

Take one screenshot at desktop width and one at phone width (Playwright is available) to confirm nothing overflows.

## Step 5: Record her feedback

Phoebe asked for this explicitly: her reactions are how the design gets better over time. Keep `design-preferences.md` up to date as the conversation goes:

- **Whenever she asks you to change something**, add it under **Dislikes**. Write what she rejected and, if you can tell, why. Example: "Rounded pill buttons: wanted sharper, more formal corners (Nov 2026)." Record the underlying taste, not only the literal edit: "make the heading smaller" likely means "dislikes oversized display type."
- **Whenever she says she likes or loves something** ("love this", "perfect", "keep that", "this looks great"), add it under **Likes**, naming the specific element.
- Add the date to each entry. If a new entry contradicts an old one, update the old entry instead of keeping both.
- After updating, mention it in one short line (e.g. "Saved to your dislikes: oversized hero heading.") so she knows it was remembered.
- Commit the preferences file along with the design change. It's what carries her taste into future sessions.

## Preferences file template

```markdown
# Design Preferences: Phoebe's Portfolio

Read this before any design work. Dislikes are hard constraints; Likes show the direction to lean into.

## Likes
- (none yet)

## Dislikes
- (none yet)

## Notes
- Audience: law firm recruiters, attorneys, law school admissions.
```
