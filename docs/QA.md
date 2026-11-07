# First-draft verification

November 4, 2026.

- `npm run build` succeeds with no runtime dependencies.
- `npm run check` validates five HTML documents and 100 internal link/asset references; all eight itinerary days, both room types, critical suitability/exclusion text, and exclusive calendar end date pass.
- Local HTTP checks: home 200, Bali guide 200, unknown route 404.
- JavaScript syntax checks pass for build, preview server, and browser interactions.
- Browser checked all four routes at 390px; no horizontal document overflow. Bali also checked at 1440px.
- Desktop and mobile screenshots inspected for Home, Bali, and room selection; mobile About and Contact captured.
- Itinerary accordion opens; FAQ reveals suitability information; villa lightbox opens/closes and restores keyboard focus.
- Room inquiry links address the published email, with room-specific subjects. No email was sent.
- Calendar file covers May 23–30, 2027 as tentative all-day dates. It does not book the retreat.
- Visual review requested one fix: contrasting keyboard focus on rust closing sections. Fixed and verified with desktop/mobile keyboard captures. Reviewer scored that finding resolved.

Limits: print styling and expansion logic are implemented but a print-to-PDF output was not inspected. This is not a full assistive-technology audit. Alyssa has not reviewed the draft, and live booking availability is not verified. Source-site prices and dates are preserved with inquiry-only actions. Production replacement and domain changes are outside this iteration.

Live verification: all four public HTML routes, styles, and the calendar returned successfully and matched the local build byte-for-byte. Unknown route returned 404. The deployed homepage rendered without browser console errors or broken visible images at 1680px. See deployment.json.

## Illustrated journal and parallax update

- Build and checks pass: five HTML documents, 115 internal references.
- Six motion behavior tests pass: reduced-motion preference, saved toggle and reversal, frame coalescing/no idle loop, preference changes, hidden documents/storage failure, and smaller phone movement/offscreen culling.
- Browser-observed layer offsets change by different amounts while scrolling. Motion off clears every offset and persists on reload.
- Home reviewed at 1440px and 390px, ocean interlude at both sizes; Bali at 320px and About at 900px. Document width equals viewport width.
- Original factual retreat details remain unchanged.

Limits: reduced motion was tested with a simulated media-query event in the source harness, not a changed OS preference. Physical mobile-device frame timing was not profiled.

Live update verification: 13 routes/assets matched the local build byte-for-byte,
including all four SVGs, Caveat, browser JS, and both stylesheets. An unknown route
returned 404. The deployed page has no captured console errors; parallax offsets
are applied under the production CSP, and the live motion toggle clears them.

## Coastal typography and color update — November 5, 2026

- User confirmed the Maui direction: ocean, sand, hibiscus. All trip content remains unchanged.
- Bree Serif regular replaces the three Fraunces font files; Caveat normal provides handwritten emphasis, while DM Sans carries practical text.
- Build and internal checks pass (113 references), with all six motion tests passing.
- Rendered Home at 1440/760/390, Bali rooms at 320, About at 1100 and Contact at 390. No horizontal document overflow at these widths; navigation to rooms and keyboard focus on the closing action verified. No captured console errors.
- New solid-color text pairs pass AA: body/sand 10.57:1, teal/sand 5.85:1, hibiscus/photo-paper 6.57:1, forest/coral 4.86:1. Closing keyboard focus uses forest on coral (4.86:1).
- No physical-device or complete assistive-technology audit performed. The existing motion implementation is unchanged.

Live coastal update: all 13 checked routes/assets matched the build byte-for-byte; unknown route returned 404. Current in-app view at 734px renders Bree Serif and teal correctly with no horizontal overflow or captured console errors.

## Travel notebook and upward motion — November 7, 2026

- Build/check pass: five HTML documents, 128 internal references; eight behavioral motion tests pass. New cases verify upward displacement and route progress/reset alongside reduced-motion, persistence and scheduler behavior.
- Notebook browser review at 1440×1000, 1280×720, 390×844 and 320×740: no document overflow; readable captions and stationary chapter copy. Compact desktop index stays visible; mobile stacks the pages.
- Browser-observed first-chapter offsets changed from +1.50/+4.50/+7.75px to −26.31/−78.92/−135.91px while advancing to Play; route progress changed from 0.2104 to 0.5850. Motion off clears all offsets and route progress, and persists after reload.
- Desktop and mobile hero reviewed; mobile sunset caption now reserves space beside the foreground photograph. No captured browser console errors.
- Impeccable finish review: disposition **ship** for notebook; supplemental hero caption finding fixed and reviewed **ship**. One detector pass: no primary findings, seven advisory notebook type/color values. Existing stale design sidecar metadata was reported and left unchanged.
- Original retreat facts in content.json unchanged. All additional photos were already present with retained rights. No external runtime dependency added.

Limits: reduced-motion events are covered by the source harness, not a changed OS setting. Physical-device frame timing and a complete assistive-technology audit were not performed.

Live notebook verification: 13 routes/assets match the build byte-for-byte, including the new CSS and brush SVG, all four pages, the three supporting photos, browser JS and calendar. Unknown route returns 404. Production browser shows the new notebook, active motion and no horizontal overflow or captured console errors. Deployment version: 9afeb4c3-7baa-4590-9903-2de4ca9258bc.

## Stacking photo memories — November 7, 2026

- Motion scroll module pinned and self-hosted; raw/gzip sizes 9,353/4,199 bytes. npm reported zero known vulnerabilities at installation. Normal build still requires no package installation; vendor regeneration uses the lockfile.
- Build and 130-reference checks pass; 13 tests pass. Added tests cover assembly order/reverse/bounds, missing/failed library, reduced/off/short-screen fallback, anchor restoration, subscription cleanup/re-enable, and printing.
- Browser captures cover desktop 1440×1000 and 1280×720, phones 390×844 and 320×740, plus 844×390 landscape fallback. Confirmed arriving and settled cards, reverse navigation, keyboard chapter link, persisted motion-off and re-enable. No horizontal overflow or captured console errors.
- The enhanced notebook replaces its earlier photo parallax with a collecting stack; the separate hero depth effect is unchanged. Photos and factual content remain unchanged.
- One detector scan: zero primary findings; 13 advisory type/color values, including existing notebook values. Prior stale sidecar metadata remains unchanged.
- OS reduced-motion and library failure are tested in the source harness; physical-device frame timing and a full assistive-technology audit were not performed.

Impeccable finish review: **ship** after reconciling the design documentation with whole-chapter stacking. No visual findings remained.

Live memory-stack verification: 16 routes/assets matched the local build byte-for-byte, including the vendor bundle, license and controller. Unknown route returned 404. Production browser displayed the stacked cards with active transforms and route progress, no document overflow and no captured console errors. Version 6ef791fb-053d-4968-812c-69ef94e69b3d.
