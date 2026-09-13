# Live website restoration

Reference: https://acquisitions.thenativeaigroup.com/ (14 September 2026).

Updated the existing React source using the published HTML, CSS and client bundles:

- Instrument Serif headings and Manrope body text, teal brand palette, wordmark, translucent navigation and panels.
- Shared hero backgrounds, home hero blobs, section reveals and button motion, with reduced-motion support. Motion uses browser animations; its easing is an approximation of the published spring animations.
- Home, model, portfolio, companies, AI OS, acquisitions, leadership, insights, contact, privacy, terms, confidentiality and accessibility pages.
- Restored the missing portfolio introduction, required contact fields, and corrected optional portfolio links and the leadership name without a URL.
- Existing favicon is byte-identical to the published favicon. The live branding is a text wordmark and dot, not an image logo.

## Verification

- All 13 routes render locally, with matching visible text and link destinations against the downloaded live HTML.
- Published page CSS class tokens are present locally; theme values were recovered from the live CSS.
- TypeScript and ESLint for changed components/routes pass. Production build passes.
- Browser screenshot comparison and interactive desktop/mobile QA were unavailable because this session has no connected browser. Pixel-level equivalence is not verified.
- Changes are local; nothing has been committed, pushed or deployed.

## Delivery configuration still needed

The live contact page invokes a private server function. Its implementation and delivery configuration cannot be recovered from the public client bundle. The local contact form preserves entered values and displays the published email fallback instead of falsely claiming delivery. Connect a server-side delivery provider before using the form in production.

The existing acquisition and newsletter forms also only display local success states; their delivery integration is outside this visual restoration. No forms were submitted to the live site.

## Run locally

```powershell
npm run dev
```

Use the URL printed by Vite. The restoration preview was started at http://127.0.0.1:8081/ because port 8080 was already occupied.
