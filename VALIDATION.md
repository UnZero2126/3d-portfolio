# Validation record

- JavaScript syntax: all three JS files pass `node --check`.
- Project data: six unique IDs, five artwork categories, 18 valid local media references.
- Images: all seven WebP images decode successfully.
- Video: H.264, yuv420p, 720 × 600, 4 seconds, MP4.
- Model: GLB 2.0 magic/version, byte lengths, JSON and mesh metadata checked.
- Assets: largest file is approximately 190 KiB; no oversized GitHub files.
- Static source review: relative paths, native dialog controls, hash-based routes, filter generation, textContent rendering, missing-media fallbacks, lazy video/model loading, responsive breakpoints and reduced-motion rules are present.
- No database, API key, or build command is required.

Limitations: the preview server started, but the cloud browser denied access under its URL security policy. Consequently, end-to-end browser interactions, console output, mobile layout, MP4 playback and interactive GLB rendering were NOT visually verified in this environment. Follow the browser checklist in README before sharing widely. The optional CDN viewer and external video availability depend on network access. No successful GitHub Pages deployment is claimed by this record.
