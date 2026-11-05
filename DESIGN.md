---
name: Wild Joy Project
description: Implemented first-draft design for travel retreats with Alyssa Kuwana
colors:
  paper: "#fff6e8"
  ink: "#203f43"
  rust: "#096b70"
  rose: "#f4b8a4"
  olive: "#d8eeea"
  forest: "#18565a"
  line: "#b9cfca"
  rust-hover: "#075358"
  link-hover: "#084d52"
  fit-surface: "#f8d9c5"
  itinerary-line: "#9ebfba"
  list-line: "#203f4326"
  photo-white: "white"
  dialog-backdrop: "#17201ce6"
  print-black: "black"
  print-paper: "#fffdf5"
  print-shadow: "#4b362321"
  pillar-shadow: "#4b362314"
  portrait-shadow: "#4b36231c"
  ticket-line: "#82aaa2"
  motion-hover: "#e2eee6"
  sketch-pencil: "#477a74"
  ocean-surface: "#164d59"
  ocean-text: "#fffdf4"
  ocean-overlay: "#071f2b4d"
  ocean-text-shadow: "#11292466"
  hibiscus: "#a33158"
  hero-sand: "#fff0da"
typography:
  display:
    fontFamily: "Bree Serif, Georgia, serif"
    fontSize: "clamp(3.4rem,6.3vw,6rem)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-.015em"
  headline:
    fontFamily: "Bree Serif, Georgia, serif"
    fontSize: "clamp(2.5rem,4.2vw,4.6rem)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-.015em"
  title:
    fontFamily: "Bree Serif, Georgia, serif"
    fontSize: "clamp(1.8rem,2.4vw,2.7rem)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-.015em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(1.1rem,1.5vw,1.35rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: ".58rem"
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: ".14em"
  brand:
    fontFamily: "Bree Serif, Georgia, serif"
    fontSize: "2.65rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-.025em"
  handwriting:
    fontFamily: "Caveat, cursive"
    fontSize: "1.9rem"
    fontWeight: 500
    lineHeight: 1.2
  print-caption:
    fontFamily: "Caveat, cursive"
    fontSize: "1.65rem"
    fontWeight: 500
    lineHeight: 1.2
  journal-display:
    fontFamily: "Bree Serif, Georgia, serif"
    fontSize: "clamp(3.5rem,6.8vw,6rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-.015em"
rounded:
  button: "3px"
  list-marker: "50%"
spacing:
  gutter: "clamp(22px,5vw,80px)"
  paragraph: "20px"
  text-link-gap: "12px"
  button-gap: "24px"
  gallery-gap: "24px"
  room-gap: "36px"
components:
  button-primary:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "14px 25px"
  button-primary-hover:
    backgroundColor: "{colors.rust-hover}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.rust}"
    rounded: "{rounded.button}"
    padding: "14px 25px"
  button-light-hover:
    backgroundColor: "{colors.rose}"
  text-link:
    textColor: "{colors.rust}"
    padding: "8px 0"
  journal-ticket:
    textColor: "{colors.rust}"
    padding: "18px 0 18px 18px"
    width: "24%"
  button-closing:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "14px 25px"
  button-closing-hover:
    backgroundColor: "{colors.rust-hover}"
  closing:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.forest}"
  photo-print:
    backgroundColor: "{colors.print-paper}"
    padding: "13px 13px 0"
  motion-control:
    rounded: "{rounded.button}"
    padding: "7px 9px"
  motion-control-hover:
    backgroundColor: "{colors.motion-hover}"
  trip-navigation:
    backgroundColor: "{colors.paper}"
    padding: "16px 22px"
  photo-dialog:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "18px"
    width: "92vw"
---

# Design System: Wild Joy Project

## Overview

**Creative North Star: "Illustrated travel journal"**

The implemented illustrated travel journal builds on the original photographic travel-correspondence direction: expressive serif headings, warm paper surfaces, and personal invitations. Source photographs now appear as layered framed prints with handwritten captions, original pencil-style SVG studies, and bounded scroll-linked depth. The approved Maui direction uses ocean teal, sand, hibiscus, seafoam, and coral; it changes the visual atmosphere, not the Bali retreat location or facts. Practical retreat content remains still and uses familiar web patterns.

This remains a reversible first draft. Hiro explicitly requested the added visual impact, parallax, and pencil-sketch SVG direction; Alyssa has not reviewed the final brand implementation. PRODUCT.md remains the product authority; docs/first-draft-brief.md, docs/motion-direction.md, and docs/coastal-direction.md hold the surface briefs. This snapshot was extracted from site/styles.css, site/fonts.css, site/journal.css, site/app.js, scripts/illustrations.mjs, and scripts/build.mjs on November 5, 2026. This documentation pass did not inspect rendered pages.

Sidecar tonal ramps are synthesized OKLCH panel previews, not additional implemented CSS tokens or approved palette choices. Component snippets retain CSS variable references with extracted fallback values. Text is illustrative where a snippet requires sample content.

**Key Characteristics:**

- Source photography framed as overlapping prints, with generous editorial spacing.
- Bree Serif headings and DM Sans body copy, with Caveat for normal handwritten emphasis and captions.
- Original pencil studies of a palm, shell, sun, and waves.
- Bounded decorative parallax with a persistent control and system reduced-motion priority.
- Conventional navigation, native disclosure controls, and contextual keyboard focus.

## Colors

The approved coastal palette combines sun-warmed sand, deep ocean teal, hibiscus emphasis, seafoam sections, and coral invitations. Frontmatter values are the normative snapshot; CSS remains the implementation source. Technical names are retained for compatibility: `rust` now means ocean teal, `olive` means seafoam, `rose` means coral, and `forest` means deep teal. These names do not describe the current hues.

- **Ocean teal (`rust`) and deep teal (`forest`):** headings, navigation, primary actions, brand, and supporting section titles. `rust-hover` and `link-hover` are darker ocean-teal interaction states.
- **Sand (`paper`) and hero-sand:** the main page and warmer journal opening. Ink is a dark blue-green; line and itinerary-line are soft sea-glass dividers.
- **Seafoam (`olive`):** retreat, itinerary, and belief section backgrounds.
- **Coral (`rose`) and fit-surface:** coral is the closing background and selection color; the lighter peach fit surface contains suitability guidance. The closing uses deep-teal text and ocean-teal buttons with sand text.
- **Hibiscus:** home hero handwritten emphasis, intro/host emphasis, pillar titles, and framed-photo captions. Other H1/H2 handwritten emphasis inherits its section color.
- **Print and sketch colors:** print-paper borders the photographs; translucent brown frame shadows remain. Ticket-line is muted sea-glass; sketch-pencil is muted teal. Motion-hover is a pale seafoam fill.
- **Ocean and overlay colors:** ocean-surface remains the panorama fallback, ocean-text its light typography, ocean-overlay the photographic tint, and ocean-text-shadow the contrast treatment. Waves are filtered white. Dialog-backdrop dims the photo viewer; print uses white and black.

**The Contextual Focus Rule.** Use ocean teal (`--rust`) outlines on light surfaces and deep teal (`--forest`) outlines inside the coral closing section; retain the 3px outline and 6px offset.

## Typography

Bree Serif regular (400) replaces the previous display family for rounder, more distinctive headings and the wordmark. DM Sans remains the practical reading face, loaded at 400/500/600/700. Caveat normal (500) supplies handwritten emphasis in H1/H2, ocean interlude, and belief text, plus captions, pillar titles, invitation introductions, and discovery cues. All are local with `font-display: swap`; the body disables synthetic font styles with `font-synthesis: none`.

The display asset is `/assets/bree-serif.ttf`; the former font-4/5/6 display files are removed. Caveat remains `/assets/caveat-500.ttf`. H1–H3 use weight 400 and -.015em tracking; the wordmark uses -.025em. Emphasis uses Caveat at weight 500, normal style, and -.02em tracking. Hero emphasis is 1.08em and hibiscus; the journal H1 line height is 1.08. Some legacy shorthand declarations (journal ticket, ocean paragraph, signature) still request 500 or italic, but only regular 400 Bree Serif is loaded and synthetic styles are disabled. Preserve that distinction between declared and available font weights.

The display, headline, title, body, lead, brand, and brand-label roles are in frontmatter. H1–H3 use balanced wrapping; paragraphs use pretty wrapping. Paragraphs cap at 68ch. The story copy uses 1.08rem with 1.85 line height; smaller explanatory copy commonly uses .9rem. The uppercase wordmark subline uses the label role, not body text.

Home journal hero type overrides general H1 with `clamp(3.5rem,6.8vw,6rem)`; the closing headline uses `clamp(2.6rem,4.4vw,4.8rem)`, and contact H1 uses `clamp(3.3rem,5.7vw,5.5rem)`. Preserve these as component variants, rather than assuming every headline shares one size.

Caveat normal print captions use 1.65rem/1.2, the smaller ocean print 1.45rem, pillar titles 2.2rem/1.2, the discovery cue 1.6rem/1.2, and the about portrait caption 1.5rem. Handwriting does not replace practical body text. Ocean interlude copy uses Bree Serif `clamp(2.7rem,5.7vw,5.5rem)` at 1.16 line height.

## Layout

The primary wrapper is centered at a 1400px maximum width with the fluid gutter in frontmatter. Header and home hero allow 1600px. Editorial two-column grids combine text and images with 7–12% gaps; the intro is 1fr/1.15fr, retreat feature 1.2fr/1fr, itinerary .8fr/1.2fr, and gallery 1.5fr/1fr. Room options use equal columns. Three-column pillar and experience groups provide the broader overview.

Desktop sections generally have 80–110px vertical breathing room. These are observed section values, not a global spacing scale. The pillar images are staggered with second/third offsets of 65px/20px. Photography uses `object-fit: cover`; portraits favor a 35% vertical position, the sunset print 44%, the ocean print a 46% horizontal position, and the ocean panorama 52% vertically.

The journal scene is `clamp(600px,52vw,790px)` high. Its sunset print is 75% wide at left 1%/top 18px, with a 25.5%-wide ocean print at right .8%/top -40px. Their image heights are `clamp(340px,34vw,500px)` and `clamp(260px,29vw,440px)`. The ticket stays fixed within the composition rather than receiving parallax. The ocean interlude is `min(770px,67vw)` high with a 530px minimum and a plain straight lower edge; no fake torn-paper polygon is used. Its panorama and the Bali cover image are 130% high at top -15%, clipped to their containers to accommodate movement.

- **At 1100px and below:** hide the supplementary header invitation and tighten navigation; the journal H1 becomes 6vw, scene height 630px, ticket width 26% at top 68%, and pillar images 340px. Room title/price stack. Main navigation remains visible.
- **At 760px and below:** the header places navigation on a full-width third row, with the motion control beside the brand. Most editorial grids become single-column; trip facts become two columns; section navigation scrolls horizontally. Journal pillars remain two columns, with the third no longer spanning both; experience items remain image/text pairs. The journal scene is 590px tall. The sunset print becomes 92% wide, with a 300px image and -4deg tilt; the ocean print becomes 42% wide at top 238px with a 205px image and 8deg tilt. The ticket is at top 377px/left 4% with 50% width and wrapping .76rem trip-fact text. Print padding reduces to 7px, captions to 1.23rem (ocean 1.1rem), and pillar images to 290px. The ocean interlude uses 80svh, bounded by 560–700px, with smaller text and wave artwork. Motion strength drops to .35. Room headings return to side-by-side; the secondary stay-gallery image is hidden and dialog padding becomes 12px.
- **At 390px and below:** pillars and experience items fully stack; journal pillar images become 370px and experience images remain 270px. Room title/price stack, and the hero-note link tightens. The journal scene retains its mobile dimensions.

Sticky trip navigation sits at the top with z-index 5. Anchor offset is 90px, reduced to 75px at the mobile breakpoint. Print removes navigation, major image groups and action controls, uses white/black with 11pt body copy, reduces heading sizes, and avoids splitting itinerary details. The print handlers open every itinerary disclosure before printing and restore prior open states afterward. Journal print rules also hide motion controls, studies, discovery cue, ocean interlude, and framed hero photos; transforms are removed and the ticket returns to normal flow.

## Elevation & Depth

Practical content remains flat and separated by color, whitespace, and rules. Framed photographs supply the journal depth: hero prints use `3px 14px 32px #4b362321`, pillar prints `2px 10px 24px #4b362314`, and the about portrait `2px 12px 28px #4b36231c`. Ocean copy uses text-shadow `0 3px 18px #11292466` over the translucent photographic tint. The native dialog keeps its dark backdrop. The previous lifted invitation-tag style remains unused in the base stylesheet; the rendered journal ticket is flat and ruled.

Bounded parallax combines vertical translation with each layer's static tilt. The hero depths are sun -70, palm -135, sunset 65, ocean print -105, and shell 80; the panorama layers use 150. These are multipliers, not direct pixel displacements: `parallaxY = clamp(-.65,.65,progress) × depth × strength`, with progress derived from scene and viewport centers. Strength is 1 above 760px and .35 at or below it. The resulting absolute ceiling for depth 150 is 97.5px desktop or 34.125px mobile; observed travel depends on scene geometry.

**The Bounded Motion Rule.** Move decorative layers only, keep practical content still, respect the visible motion control and system reduced motion, and preserve ordinary document scrolling.

## Shapes

Photo frames are rectangular with deliberately unequal bottom margins for captions; buttons retain their small radius and list markers remain circular. Hero prints rest at -3deg and 7deg (mobile -4deg and 8deg); pillar images at -3deg, 3deg, and -2deg; the about portrait at 3deg. The ruled journal ticket has no rotation. The ocean interlude ends in a straight edge. Icons remain 22px outline SVGs with 1.5 stroke width; motion-control icons are 18px.

Four original decorative SVG studies in scripts/illustrations.mjs use muted teal pencil outlines, fine veins, doubled contours, and low-opacity hatching: `palm-study.svg` (580×750), `shell-study.svg` (350×280), `sun-study.svg` (300×290), and `wave-study.svg` (400×120). They implement Hiro's explicit pencil-sketch request. The study images have empty alt text and `aria-hidden="true"`, with pointer events and selection disabled. The ocean waves are filtered white; other study placements retain their muted teal stroke and contextual opacity.

## Components

**Buttons and text links.** The filled ocean-teal button and the base inverse light button use 52px minimum height, 24px content gap, a 1px matching border, and 500-weight text with 1.4 line height. Background transitions take .2s. The base light variant still exists, but the rendered closing overrides it with an ocean-teal fill, matching border, and sand text; hover darkens fill and border to `rust-hover`. Its coral section uses deep-teal text and focus outlines. Underlined text links use a 1px bottom border, 12px gap, and 1.5 line height. Itinerary links use forest. These are links when navigating or opening email; print is a real button.

**Navigation.** The wordmark links home. Main navigation uses .92rem text, 30px gaps, and a thin ocean-teal underline/color change on hover and `aria-current`; mobile values are specified above. The supplementary invitation disappears at 1100px. Sticky retreat navigation preserves all its links through horizontal overflow on mobile. A keyboard-revealed skip link targets main content.

**Journal ticket.** A stationary ruled invitation with Caveat introduction, Bree Serif trip title, and small sans trip facts. The title underlines on hover; the contextual keyboard outline remains visible. Desktop sizing is in frontmatter and mobile placement in Layout. It links to the retreat and does not represent a reservation.

**Framed photos.** Hero frames use print-paper, the hero shadow, clipped image windows, and handwritten captions; pillar images use 10px side/top padding and 34px bottom padding with caption-like headings overlapping the lower margin. The about portrait uses 12px side/top padding and a Caveat caption. The photos retain their real source content.

**Room groups.** A source image, room name, currency-qualified price, description, and inquiry link form an unboxed article. There is no invented availability badge or checkout state. The price alignment adapts at all three breakpoints.

**Itinerary and FAQ disclosures.** Native `details`/`summary` provide keyboard behavior. Thin top/bottom rules separate entries. The plus icon loses its vertical stroke when open. Itinerary summaries use date and day number with a 35px/1fr/20px grid and 25px vertical padding; mobile uses 28px/1fr/16px and 22px. FAQ summaries use flexible text/icon alignment and 23px vertical padding. The first itinerary day is initially open.

**Photos and viewer.** Enlarge controls are buttons with accessible labels; the image hover scales to 1.025 over .5s with `cubic-bezier(.2,.8,.2,1)` easing. The native dialog is capped at 1000px wide and 94vh high, with contained imagery capped at 73vh, a visible close button and caption. The viewer uses native modal behavior, copies the source alt text and caption, closes via its button or backdrop, and returns focus to the opener on close.

**Motion control and scheduling.** The header button has a 40px minimum height, .72rem text, 1px line border, and the padding/radius in frontmatter; mobile reduces these to 38px, .67rem, and 5px 7px. It shows “Motion on/off,” exposes `aria-pressed`, and switches pause/play icons. It is hidden until JavaScript enables the controller. Preference is saved as `wildjoy-motion` in localStorage; unavailable storage falls back to a working setting for the visit. System reduced motion overrides the preference, disables the button, and labels it “Motion reduced.”

Scroll and resize events request at most one pending animation frame. Each render batches scene measurements before style writes, updating only scenes within a 100px visibility margin. Hidden documents stop pending work; motion off cancels frames and clears dynamic translation. There is no autoplay or continuous animation loop, scroll hijacking, or pinned narrative. Without JavaScript, the composed photos remain static and readable.

**Reduced motion and focus.** The base reduced-motion rule disables smooth scrolling, transitions, and animations. Journal rules additionally remove depth translation while retaining static print tilts; ocean and Bali panoramas lose all transforms. The off control also removes dynamic translation but is specifically a decorative-parallax control, not a global hover or smooth-scroll switch. Apply the contextual focus rule to every interactive element.

**Photography and rights.** Original public Wild Joy Project images were retained for this first draft, with descriptive alt text and contextual captions. They are not generic open-license assets: content and photography retain their existing rights, independent of any MIT license on implementation code. New image sources or new usage rights require separate verification. Font files are local; the Caveat license is recorded in docs/caveat-OFL.txt. The Bree Serif license is recorded in docs/bree-serif-OFL.txt. The SVG studies are original implementation artwork, separate from the retained photography rights.

## Do's and Don'ts

- Do retain the existing source photography and its rights attribution.
- Do preserve readable body copy, visible focus, native controls, and reduced-motion behavior.
- Do carry all three responsive thresholds forward when changing components.
- Do retain a still, readable composition with motion off, reduced motion, or JavaScript unavailable.
- Do label this as a first-draft system until Alyssa reviews it.
- Don't treat the MIT implementation license as permission to relicense the photos or source text.
- Don't add booking, payment, newsletter, or availability states that have no implementation or verified source.
- Don't replace the deep-teal closing focus outline with a pale outline that disappears on coral.
- Don't turn these observed choices into permanent brand commitments without review.
- Don't add scroll hijacking, autoplay loops, moving practical information, or fake torn-paper edges to this implementation.
