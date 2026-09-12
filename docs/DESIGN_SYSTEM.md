# Design System

## Design Goals

The Public Service Covenant interface should make public commitments easy to read, compare, cite, and revisit. The design system should support clarity, editorial trust, accessibility, and long-term maintainability.

This system is intentionally restrained. Civic accountability should feel calm and sturdy, not promotional.

## Product Feel

The product should feel:

- Public-minded
- Organized
- Precise
- Calm
- Readable
- Evidential
- Responsive

The product should avoid:

- Campaign aesthetics
- Dense legal formatting
- Overdecorated cards
- Partisan color symbolism
- Hero sections that delay the actual product
- Unexplained badges or authority markers

## Layout Principles

Use information-first layouts. A visitor should quickly find the commitment, status, source, and next relevant action.

Recommended page patterns:

- Home: concise introduction, featured commitments, explanation of status model, latest updates
- Commitment index: filters, search, sortable list, status overview
- Commitment detail: title, summary, metadata, status, timeline, sources, evidence, review notes
- Collection: thematic grouping by office, policy area, geography, or public need
- About: mission, methodology, correction policy, governance

Use full-width sections with constrained inner content. Avoid nested card layouts. Cards are appropriate for repeated commitment summaries, evidence items, and source references.

## Responsive Behavior

Desktop:

- Favor two-column detail pages when useful
- Keep primary reading column comfortable
- Keep source and metadata panels scannable
- Use tables only when they remain readable

Tablet:

- Collapse secondary panels below key status content
- Keep filters accessible without dominating the page

Mobile:

- Lead with commitment title, status, and summary
- Use stacked sections
- Make filter controls compact and explicit
- Avoid horizontal scrolling except for intentionally scrollable data tables

## Typography

Current technical foundation includes Geist and Geist Mono through the starter app. The brand can continue with Geist if it supports the desired civic tone.

Recommended roles:

- Display: strong, restrained headlines for page titles
- Body: readable sans-serif for long-form civic explanation
- Mono: source IDs, dates, record identifiers, and technical metadata only

Guidelines:

- Do not use viewport-based font scaling
- Keep letter spacing at normal values
- Use sentence case for most interface text
- Reserve all caps for short labels only
- Keep line length comfortable for reading

## Color Tokens

Suggested semantic palette:

- `background`: primary page background
- `surface`: raised or grouped content background
- `text`: primary readable text
- `text-muted`: secondary explanations and metadata
- `border`: dividers and boundaries
- `link`: interactive text links
- `focus`: visible keyboard focus
- `status-proposed`: commitment recorded but not yet active
- `status-in-progress`: meaningful action is underway
- `status-completed`: commitment appears fulfilled by available evidence
- `status-delayed`: timeline slipped or dependent action stalled
- `status-blocked`: progress depends on unresolved external action
- `status-unknown`: evidence is insufficient

Color should support meaning, not decoration. Status colors must always be paired with text labels so users do not need color perception to understand state.

## Status Labels

Recommended initial status set:

- Proposed: commitment has been made but implementation has not started
- In progress: meaningful action has begun
- Completed: available evidence indicates the commitment has been fulfilled
- Delayed: action has missed a stated or expected timeline
- Blocked: progress depends on another institution, vote, budget, legal process, or event
- Changed: the commitment has materially changed in scope
- Withdrawn: the commitment is no longer being pursued
- Unknown: evidence is insufficient for a status call

Each label should have a visible explanation on commitment detail pages.

## Components to Design Later

This document describes design direction only. It does not create React components.

Expected future UI components:

- Site header
- Main navigation
- Commitment card
- Commitment status badge
- Source card
- Evidence list item
- Timeline entry
- Filter bar
- Search input
- Empty state
- Correction notice
- Methodology callout
- Pagination controls
- Footer

Every component should have documented states before it becomes reusable: default, hover, focus, active, loading, empty, error, and disabled where relevant.

## Interaction Standards

Links:

- Use for navigation and source references
- External links should be clearly indicated
- Source links should preserve visible source titles

Buttons:

- Use for actions that change interface state or submit forms
- Use icon-only buttons only when the icon is familiar and a tooltip or accessible label exists

Filters:

- Make active filters visible
- Provide clear reset behavior
- Keep URLs shareable for filtered views when possible

Timelines:

- Sort chronologically unless the page explicitly uses latest-first
- Include dates and source references
- Distinguish factual events from editorial review notes

## Accessibility Standards

Minimum expectations:

- Semantic headings in order
- Keyboard navigability
- Visible focus states
- Sufficient color contrast
- Labels for form controls
- Accessible names for icon buttons
- Text alternatives for meaningful images
- No reliance on color alone
- Error messages that explain how to recover

Content accessibility:

- Use plain language
- Explain acronyms on first use
- Break long civic processes into steps
- Use summaries before dense evidence

## Data Display Standards

Commitments are records, not promotional snippets. List and detail views should make the following easy to scan:

- Commitment title
- Responsible person or institution
- Jurisdiction
- Policy area
- Status
- Date made
- Last reviewed date
- Source count
- Next milestone, if known

Evidence display should separate:

- Source metadata
- Quoted or summarized claim
- Editorial interpretation
- Status impact

## Imagery

Use imagery sparingly and only when it clarifies real civic context. Prefer actual source documents, meeting screenshots, maps, or relevant public-domain civic imagery over generic atmospherics.

Avoid:

- Abstract patriotic backgrounds
- Dark crowd photos
- Generic capitol images unrelated to the record
- Stock-photo symbolism

## Motion

Motion should be subtle and functional:

- Focus transitions
- Filter changes
- Loading states
- Disclosure panels

Avoid motion that makes serious civic content feel theatrical.

## Design QA Checklist

Before shipping a page, verify:

- The main purpose is visible without scrolling
- The commitment status is understandable without color
- Source links are visible and credible
- Text does not overlap at common viewport widths
- Mobile layout preserves reading order
- Keyboard focus is visible
- Empty and loading states are handled
- Dates and labels are consistent
