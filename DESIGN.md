---
name: Wild Joy Project
description: Implemented first-draft design for travel retreats with Alyssa Kuwana
colors:
  paper: "#f8f4e9"
  ink: "#3b382c"
  rust: "#913b27"
  rose: "#e6b9a4"
  olive: "#e5e7cc"
  forest: "#304c42"
  line: "#d6cbb9"
  rust-hover: "#702b1c"
  link-hover: "#602f22"
  fit-surface: "#ebd5c6"
  itinerary-line: "#b6bba5"
  list-line: "#3b382c26"
  photo-white: "white"
  photo-shadow: "#000"
  tag-shadow: "#26150f26"
  dialog-backdrop: "#17201ce6"
  print-black: "black"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3.4rem,6.3vw,6rem)"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.5rem,4.2vw,4.6rem)"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-.035em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.8rem,2.4vw,2.7rem)"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-.035em"
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
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "2.65rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-.055em"
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
  trip-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.rust}"
    padding: "20px 25px"
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

**Creative North Star: "Photographic travel correspondence"**

This records the implemented photographic travel-correspondence direction: expressive serif headings, warm paper surfaces, personal invitations, and generous space around source photography. The photos carry the identity; navigation and practical retreat information use familiar web patterns.

This is a reversible first-draft implementation record, not a newly approved brand identity. PRODUCT.md remains the product authority; docs/first-draft-brief.md owns the page strategy. Values were extracted from site/styles.css, site/fonts.css, and scripts/build.mjs on November 4, 2026. This documentation pass did not inspect rendered pages or establish new brand commitments.

Sidecar tonal ramps are synthesized OKLCH panel previews, not additional implemented CSS tokens or approved palette choices. Component snippets retain CSS variable references with extracted fallback values. Text is illustrative where a snippet requires sample content.

**Key Characteristics:**

- Photo-led compositions with restrained colored section backgrounds.
- Fraunces headings paired with readable DM Sans body text.
- Mostly flat rectangular surfaces, fine dividing rules, and one lightly lifted invitation tag.
- Conventional navigation, native disclosure controls, and contextual keyboard focus.

## Colors

The existing palette combines warm ivory and rust with muted green and blush section surfaces. Frontmatter values are the normative snapshot; CSS remains the implementation source.

- **Primary — Rust:** headings, links, primary actions, brand, and the closing invitation. The darker rust and link-hover values belong to their respective hover states.
- **Secondary — Olive and forest:** olive backgrounds with forest headings distinguish retreat, itinerary, and belief sections.
- **Supporting — Rose and fit surface:** rose is used for selection and light-button hover; the separate pale blush fit surface contains suitability guidance.
- **Neutral — Paper, ink, and line:** the default canvas, body text, and fine dividers. Itinerary and list dividers use their own observed colors.
- **Image and overlay colors:** photo-white and photo-shadow support captions; tag-shadow lifts the invitation; dialog-backdrop dims the page behind an enlarged image. Print uses white and black.

**The Contextual Focus Rule.** Use a rust outline on the light surfaces and a paper outline inside the rust closing section; retain the 3px outline and 6px offset.

## Typography

Fraunces supplies the expressive headings, italic emphasis, wordmark, and signature; DM Sans carries body copy, navigation, practical facts, and controls. Both are served locally with `font-display: swap`. Loaded weights are DM Sans 400/500/600/700 and Fraunces normal 500/600 plus italic 500. This is an observed pairing, not a fixed mathematical type scale.

The display, headline, title, body, lead, brand, and brand-label roles are in frontmatter. H1–H3 use balanced wrapping. Paragraphs cap at 68ch. The story copy uses 1.08rem with 1.85 line height; smaller explanatory copy commonly uses .9rem. The uppercase wordmark subline uses the label role, not body text.

Home hero type overrides general H1 with `clamp(3.5rem,6.2vw,6rem)`; the closing headline uses `clamp(2.6rem,4.4vw,4.8rem)`, and contact H1 uses `clamp(3.3rem,5.7vw,5.5rem)`. Preserve these as component variants, rather than assuming every headline shares one size.

## Layout

The primary wrapper is centered at a 1400px maximum width with the fluid gutter in frontmatter. Header and home hero allow 1600px. Editorial two-column grids combine text and images with 7–12% gaps; the intro is 1fr/1.15fr, retreat feature 1.2fr/1fr, itinerary .8fr/1.2fr, and gallery 1.5fr/1fr. Room options use equal columns. Three-column pillar and experience groups provide the broader overview.

Desktop sections generally have 80–110px vertical breathing room. These are observed section values, not a global spacing scale. The pillar images are staggered with second/third offsets of 65px/20px. Photography uses `object-fit: cover`; portraits favor a 35% vertical position and the home hero favors 55%.

- **At 1100px and below:** hide the supplementary header invitation, reduce nav gaps, use 5.4vw home hero type, reduce several image heights, and stack the room title/price. Main navigation remains visible.
- **At 760px and below:** wrap the header with a full-width navigation row; most editorial grids become one column; trip facts become two columns; the section navigation scrolls horizontally. Pillars become two columns with the last spanning the row, and experience items become image/text pairs. Room headings return to a side-by-side title/price. Section spacing generally becomes 55–65px. The home hero is 400px tall with `clamp(2.9rem,8.9vw,4.3rem)` type. The secondary stay-gallery image is hidden; the primary image retains its enlargement control. Dialog padding becomes 12px.
- **At 390px and below:** pillars and experience items become fully stacked, pillar image height is 350px, experience images are 270px, room title/price stack again, and hero-note link text/gap tighten.
- **At 1600px and above:** explicitly hold the hero photo at 610px tall.

Sticky trip navigation sits at the top with z-index 5. Anchor offset is 90px, reduced to 75px at the mobile breakpoint. Print removes navigation, major image groups and action controls, uses white/black with 11pt body copy, reduces heading sizes, and avoids splitting itinerary details. The stylesheet alone does not prove all collapsed disclosures print expanded.

## Elevation & Depth

Most surfaces are flat; color fields, whitespace, photographs, and thin rules define groups. The invitation tag has the only box-shadow (`0 8px 24px #26150f26`). Photo captions use a text shadow (`0 2px 10px #000`) and the home photo is darkened with `brightness(.92)`. The native photo dialog uses a dark translucent backdrop rather than a card shadow system.

## Shapes

Images and editorial groups are rectangular, with no general rounded-card system. Primary and light buttons have the small radius recorded in frontmatter; list markers are circular. Rules are 1px. The invitation tag rotates 3 degrees at rest and straightens on hover. Icons are 22px outlined SVGs with 1.5 stroke width and round caps/joins.

## Components

**Buttons and text links.** The filled rust button and inverse light button use 52px minimum height, 24px content gap, a 1px matching border, and 500-weight text with 1.4 line height. Background transitions take .2s; light hover also changes its border to rose. Underlined text links use a 1px bottom border, 12px gap, and 1.5 line height. Itinerary links use forest. These are links when navigating or opening email; print is a real button.

**Navigation.** The wordmark links home. Main navigation uses .92rem text, 30px gaps, and a thin rust underline/color change on hover and `aria-current`; mobile values are specified above. The supplementary invitation disappears at 1100px. Sticky retreat navigation preserves all its links through horizontal overflow on mobile. A keyboard-revealed skip link targets main content.

**Invitation tag.** Paper surface, rust text, compact sans labels, italic serif introductory line, and a serif trip title. A .25s `cubic-bezier(.2,.8,.2,1)` transform transition straightens its rotated paper silhouette on hover. It links to the retreat; it does not represent a reservation.

**Room groups.** A source image, room name, currency-qualified price, description, and inquiry link form an unboxed article. There is no invented availability badge or checkout state. The price alignment adapts at all three breakpoints.

**Itinerary and FAQ disclosures.** Native `details`/`summary` provide keyboard behavior. Thin top/bottom rules separate entries. The plus icon loses its vertical stroke when open. Itinerary summaries use date and day number with a 35px/1fr/20px grid and 25px vertical padding; mobile uses 28px/1fr/16px and 22px. FAQ summaries use flexible text/icon alignment and 23px vertical padding. The first itinerary day is initially open.

**Photos and viewer.** Enlarge controls are buttons with accessible labels; the image hover scales to 1.025 over .5s with the same easing as the invitation tag. The native dialog is capped at 1000px wide and 94vh high, with contained imagery capped at 73vh, a visible close button and caption. Actual dialog interaction behavior belongs to the application code and its verification, not this token snapshot.

**Motion and focus.** The page uses smooth anchor scrolling, brief background transitions, tag rotation, and photo zoom. Under `prefers-reduced-motion: reduce`, scrolling becomes automatic and all transitions/animations are disabled. Hover end states remain available without interpolation. Apply the contextual focus rule to every interactive element; do not rely on hover alone.

**Photography and rights.** Original public Wild Joy Project images were retained for this first draft, with descriptive alt text and contextual captions. They are not generic open-license assets: content and photography retain their existing rights, independent of any MIT license on implementation code. New image sources or new usage rights require separate verification. Font files are local; licensing evidence belongs with the asset records, not this design document.

## Do's and Don'ts

- Do retain the existing source photography and its rights attribution.
- Do preserve readable body copy, visible focus, native controls, and reduced-motion behavior.
- Do carry all three responsive thresholds forward when changing components.
- Do label this as a first-draft system until Alyssa reviews it.
- Don't treat the MIT implementation license as permission to relicense the photos or source text.
- Don't add booking, payment, newsletter, or availability states that have no implementation or verified source.
- Don't replace contextual focus outlines with a single color that disappears on the rust closing section.
- Don't turn these observed choices into permanent brand commitments without review.
