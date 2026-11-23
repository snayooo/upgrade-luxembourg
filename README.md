# Upgrade Luxembourg — Next.js website

A responsive one-page recreation based on the supplied `Site Web` PowerPoint/PDF concept.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/page.tsx` — page composition
- `app/globals.css` — responsive design and visual styling
- `components/` — reusable page sections
- `public/images/` — images extracted from the supplied PowerPoint

## Notes

- All page copy is in French and follows the supplied presentation.
- The contact form currently opens the visitor's default email application with the message prefilled. Connect it to an API route or form provider to receive submissions directly.
- Replace or optimize the supplied image assets as needed before production.
