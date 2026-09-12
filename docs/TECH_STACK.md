# Technical Stack

## Current Repository State

This repository is a Next.js application scaffold for Public Service Covenant. The current app still contains the default starter experience and has not yet implemented the product described in the project documentation.

No application code should be assumed to represent final product architecture yet.

## Runtime and Framework

Current package metadata:

- Next.js: 16.2.12
- React: 19.2.4
- React DOM: 19.2.4
- TypeScript: 5.x
- Tailwind CSS: 4.x
- ESLint: 9.x

Project scripts:

- `npm run dev`: start the local development server
- `npm run build`: build the production app
- `npm run start`: start the production server
- `npm run lint`: run ESLint

## Current File Structure

Important current paths:

- `app/`: Next.js app directory
- `app/layout.tsx`: root layout and metadata
- `app/page.tsx`: current starter home page
- `app/globals.css`: global CSS and Tailwind import
- `public/`: static assets
- `docs/`: project documentation
- `package.json`: scripts and dependencies
- `tsconfig.json`: TypeScript configuration
- `next.config.ts`: Next.js configuration
- `eslint.config.mjs`: linting configuration

## Architecture Direction

The first product implementation should be content-first and simple. The project does not yet need a complex backend, database, authentication layer, or admin system.

Recommended early architecture:

- Static or file-backed commitment records
- Server-rendered pages where possible
- Minimal client components
- Route-based information architecture
- Typed content models
- Shared utility functions for status and source display
- No database until content volume or workflow requires it

Future architecture can add persistence, search, admin workflows, and public submissions once the editorial model is validated.

## Next.js Notes

This repository uses a modern Next.js version. Before changing application code, consult the relevant local Next.js documentation under `node_modules/next/dist/docs/`, as the repository instructions warn that APIs and conventions may differ from older assumptions.

Potential implementation areas:

- App Router routes
- Server Components by default
- Metadata API for page titles and descriptions
- Static generation for content pages
- Image optimization for real assets
- Route handlers only when the app needs server-side endpoints

## Styling

Tailwind CSS 4 is available. The current global CSS imports Tailwind and defines basic background, foreground, and font theme variables.

Recommended styling approach:

- Use semantic design tokens in global CSS
- Keep utility classes readable and scoped
- Extract repeated patterns only when repetition becomes meaningful
- Prioritize accessible contrast and stable layout
- Avoid adding a component library before product patterns are known

## Fonts

The starter app currently loads Geist and Geist Mono through `next/font/google`.

Recommended use:

- Geist Sans for primary interface and long-form content
- Geist Mono for record IDs, timestamps, and technical metadata
- Avoid overusing monospace in public-facing civic content

## Data Strategy

Early stage:

- Use typed local data files for sample commitments
- Keep source metadata explicit
- Store dates in ISO format internally
- Render human-readable dates in the UI
- Make sample or fictional data clearly labeled

Growth stage:

- Move to a CMS or database when non-developers need to edit records
- Preserve revision history
- Support source relationships and timeline events
- Add search indexing when content volume justifies it

Possible future data stores:

- Headless CMS for editorial workflow
- PostgreSQL for relational commitment, evidence, and review history
- Search service for larger datasets

## Testing Strategy

No dedicated test framework is currently configured beyond linting.

Recommended progression:

- Keep `npm run lint` passing
- Add unit tests for content model utilities once they exist
- Add accessibility checks for core page templates
- Add end-to-end tests for navigation and filtering once public routes exist
- Add content validation tests for required commitment fields

Useful future test targets:

- Status label mapping
- Date formatting
- Source rendering
- Commitment filtering
- Slug generation
- Required field validation

## Accessibility Engineering

Accessibility should be treated as a core technical requirement.

Implementation expectations:

- Semantic landmarks
- Ordered headings
- Keyboard-visible focus states
- Form labels
- Accessible names for icon buttons
- Text alternatives for meaningful images
- Status labels that do not rely on color alone
- Reduced motion support if animation is introduced

## Performance

The product is primarily informational, so it should be fast by default.

Performance priorities:

- Prefer server-rendered content
- Avoid unnecessary client-side state
- Keep images optimized and purposeful
- Use static generation for stable records
- Limit analytics and third-party scripts
- Keep bundle size visible as features are added

## Security and Privacy

Early public pages have limited security needs, but future submission and admin features will require stronger controls.

Baseline expectations:

- Do not expose internal editorial notes
- Validate submitted URLs and text
- Avoid storing unnecessary personal data
- Keep secrets out of the repository
- Use environment variables for future credentials
- Document data retention choices

Future admin features should include authentication, authorization, audit logs, and moderation controls.

## Deployment

The app can likely deploy cleanly to platforms that support Next.js, including Vercel. No deployment configuration has been customized yet.

Before public deployment:

- Replace starter metadata
- Replace starter page
- Confirm production build
- Review accessibility
- Confirm source links
- Confirm sample data labeling
- Add privacy and correction pages if collecting submissions

## Development Conventions

Recommended conventions for future work:

- Keep app code and documentation changes separated when possible
- Use TypeScript types for content records
- Keep route names readable
- Use clear commit messages when commits are requested
- Do not hard-code real civic claims in presentation components
- Document meaningful product decisions in `docs/`
- Update `CHANGELOG.md` for user-visible or documentation-visible changes

## Known Gaps

Current gaps:

- Product UI not implemented
- No content model
- No sample commitment data
- No tests beyond lint tooling
- No deployment metadata specific to Public Service Covenant
- No editorial workflow
- No persistence layer

These gaps are expected for the current foundation stage.
