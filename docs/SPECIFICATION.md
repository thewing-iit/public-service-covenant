# Product Specification

## Summary

Public Service Covenant is a web product for documenting, explaining, and tracking public service commitments. It should provide structured commitment records with sources, status, evidence, review history, and plain language context.

The current repository is a Next.js starter application. This specification defines the intended product behavior for future implementation.

## Problem Statement

Public commitments are scattered across speeches, campaign pages, council meetings, public documents, interviews, social media, and agency announcements. People who want to understand whether a public servant followed through often have to reconstruct the record themselves.

This creates several problems:

- Promises become detached from their original wording
- Updates are hard to find
- Partial progress is difficult to represent
- Public debate becomes more emotional than evidential
- Residents without time or expertise are excluded from accountability work

## Product Goals

The product should:

- Preserve public commitments in structured records
- Make sources easy to inspect
- Explain status in plain language
- Track changes over time
- Support fair editorial review
- Help users find commitments by issue, office, geography, and status
- Maintain a clear distinction between evidence and interpretation

## Non-Goals

The product should not:

- Automatically rate politicians without human review
- Publish unsourced claims
- Function as a campaign endorsement platform
- Replace public records systems
- Host unrestricted user-generated accusations
- Treat civic complexity as a simple win-or-loss game

## User Roles

Visitor:

- Reads public commitment records
- Searches and filters commitments
- Opens sources
- Shares records

Researcher or journalist:

- Reviews evidence
- Cites source metadata
- Compares related commitments
- Tracks status history

Content maintainer:

- Adds and edits commitment records
- Reviews sources
- Updates status
- Publishes corrections

Public contributor, future role:

- Suggests commitments
- Submits sources
- Requests corrections

Administrator, future role:

- Manages users
- Reviews submissions
- Configures taxonomy
- Oversees publication workflow

## Core Objects

Commitment:

- The primary record of a public promise or obligation.

Source:

- A public document, statement, page, video, transcript, meeting record, or dataset that supports a commitment or evidence item.

Evidence item:

- A specific action, event, document, vote, budget line, announcement, or verified fact relevant to a commitment's status.

Status update:

- A dated editorial assessment explaining the current state of the commitment.

Timeline event:

- A chronological entry connected to the commitment, source, evidence, or review process.

Collection:

- A curated grouping of commitments by theme, office, geography, institution, or policy area.

## Commitment Fields

Minimum viable fields:

- `id`
- `title`
- `summary`
- `commitmentText`
- `responsibleEntity`
- `jurisdiction`
- `policyArea`
- `dateMade`
- `source`
- `status`
- `statusExplanation`
- `lastReviewedAt`
- `reviewedBy`

Recommended fields:

- `relatedEntities`
- `affectedCommunities`
- `timeline`
- `evidence`
- `nextMilestone`
- `knownDependencies`
- `correctionHistory`
- `tags`
- `publicNotes`
- `internalNotes`

## Status Model

Initial statuses:

- Proposed
- In progress
- Completed
- Delayed
- Blocked
- Changed
- Withdrawn
- Unknown

Status rules:

- A status must include an explanation
- A status must include a review date
- A status should cite evidence when evidence exists
- Status changes should be preserved in history
- "Unknown" is preferable to unsupported certainty

## Information Architecture

Recommended first public routes:

- `/`: product home and featured commitments
- `/commitments`: searchable commitment index
- `/commitments/[id]`: commitment detail
- `/methodology`: how commitments are selected, reviewed, and updated
- `/about`: mission, governance, contact, and correction policy

Future routes:

- `/collections/[slug]`
- `/people/[slug]`
- `/institutions/[slug]`
- `/policy-areas/[slug]`
- `/submit`
- `/admin`

## Primary User Flows

Browse commitments:

1. User opens the commitment index.
2. User filters by status, policy area, jurisdiction, or responsible entity.
3. User scans commitment cards.
4. User opens a detail page.
5. User reviews summary, status, source, and evidence.

Inspect a commitment:

1. User lands on a commitment detail page.
2. User sees title, status, responsible entity, and summary.
3. User opens the original source.
4. User reads evidence and timeline.
5. User reviews status explanation and last reviewed date.

Update a commitment, future editorial flow:

1. Maintainer opens a commitment record.
2. Maintainer adds new evidence.
3. Maintainer evaluates whether status changes.
4. Maintainer writes an explanation.
5. Maintainer submits for review.
6. Approved update becomes public with preserved history.

Submit a correction, future public flow:

1. User opens correction form from a record.
2. User identifies the issue.
3. User provides source or explanation.
4. Submission enters moderation queue.
5. Maintainer accepts, rejects, or requests clarification.
6. Outcome is recorded when material.

## Content Requirements

Every published commitment should include:

- Clear title
- Plain language summary
- Responsible person or institution
- Date made or best known date
- Source citation
- Current status
- Last reviewed date
- Status explanation

Every public source should include:

- Source title
- Publisher or institution
- Publication date, if available
- Access date, if relevant
- URL or archival reference
- Notes about excerpts, transcripts, or context when needed

## Functional Requirements

Commitment index:

- Display commitment records
- Support basic filtering
- Show status and last reviewed date
- Link to detail pages
- Provide useful empty states

Commitment detail:

- Display full commitment record
- Show current status and explanation
- Show original source
- Show evidence and timeline
- Show correction or update history when available

Methodology:

- Explain how commitments are selected
- Explain status labels
- Explain sourcing standards
- Explain correction policy

Admin and editorial features are future requirements and should not block the first public prototype.

## Non-Functional Requirements

Accessibility:

- Meet WCAG 2.2 AA expectations where practical
- Support keyboard navigation
- Use semantic HTML
- Preserve readable color contrast

Performance:

- Prioritize fast loading informational pages
- Keep client-side JavaScript minimal for content-heavy pages
- Use static generation where content allows

Security and privacy:

- Collect minimal personal data
- Protect unpublished editorial notes if admin features are added
- Validate public submission inputs before storing or publishing

Reliability:

- Preserve source metadata
- Avoid broken internal links
- Track changes to commitment status

Maintainability:

- Keep content models explicit
- Avoid hard-coded civic claims in UI components once content grows
- Document important editorial and technical decisions

## Analytics and Measurement

Useful metrics:

- Commitment detail views
- Source link clicks
- Search queries with no results
- Filter usage
- Correction submissions
- Time since last review
- Most viewed policy areas

Analytics must be privacy-conscious. Avoid collecting sensitive personal data or building user profiles unless there is a clear public-interest need and consent model.

## Acceptance Criteria for First Prototype

- The starter page is replaced by a Public Service Covenant experience
- At least three sample commitments are represented consistently
- Each sample commitment has source metadata
- Users can navigate from index to detail pages
- Status labels are visible and explained
- The site works on mobile and desktop
- Content is clearly sample, fictional, or sourced
- Linting and build commands pass

## Open Questions

- What jurisdiction or political context should the first real content cover?
- Will early content be fictional sample data, public-domain examples, or sourced live records?
- Who has editorial authority to publish or update records?
- What level of correction history should be public in the first release?
- Should commitment IDs be human-readable slugs, stable UUIDs, or both?
- What archival strategy is needed for source links?
