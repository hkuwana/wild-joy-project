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
