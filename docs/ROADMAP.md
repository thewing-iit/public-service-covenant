# Roadmap

## Roadmap Philosophy

Public Service Covenant should grow from a small, reliable record into a durable civic accountability platform. The roadmap favors depth before scale: first prove that a single commitment can be represented fairly, then expand to collections, workflows, publishing operations, and public participation.

The product should avoid rushing into automation, scoring, or broad data ingestion before the editorial model is strong.

## Current Phase: Foundation

Status: in progress

The repository currently contains the base Next.js app and foundational documentation. No product-specific application experience has been implemented yet.

Foundation goals:

- Define product purpose and scope
- Establish documentation for brand, content, design, specification, and technology
- Keep early implementation choices aligned with public trust and maintainability
- Prepare for a small first product slice

Exit criteria:

- Documentation set exists and is internally consistent
- Initial information architecture is agreed
- First product slice is defined enough to build
- Technical stack and project conventions are documented

## Phase 1: Public Prototype

Goal: replace the starter app with a small, polished product experience.

Core deliverables:

- Product home page with clear positioning
- Commitment index page
- Commitment detail page
- Sample commitment records stored locally
- Status model for commitments
- Source and evidence presentation
- Basic responsive layout
- Accessible typography, contrast, navigation, and focus states

Recommended sample commitment fields:

- Title
- Summary
- Public servant or institution
- Jurisdiction
- Policy area
- Commitment date
- Source title and URL
- Current status
- Last reviewed date
- Evidence notes
- Next known milestone

Exit criteria:

- A visitor can understand the product within one minute
- A visitor can open a commitment and inspect its source
- The design feels credible on desktop and mobile
- All sample content is clearly marked as sample or sourced

## Phase 2: Editorial Workflow

Goal: make content creation and maintenance repeatable.

Core deliverables:

- Structured content model
- Contributor guidelines
- Source quality rubric
- Status change workflow
- Correction policy
- Review checklist
- Changelog discipline for public-facing content updates

Implementation options:

- Local Markdown or JSON for early editorial control
- Headless CMS when editorial volume increases
- Database-backed records when filtering, history, and relationships become too complex for flat files

Exit criteria:

- A maintainer can add a commitment without editing UI code
- Every published commitment has required source metadata
- Status updates preserve history
- Corrections can be documented without ambiguity

## Phase 3: Search, Filtering, and Collections

Goal: help users navigate commitments by public need, geography, institution, and status.

Core deliverables:

- Search by title, person, institution, and keyword
- Filters for status, policy area, jurisdiction, and date
- Collection pages for themes or public offices
- Shareable URLs for filtered views
- Empty states that explain what is missing
- Basic analytics for content usefulness

Exit criteria:

- Users can find relevant commitments without knowing exact wording
- Filtered views are linkable and readable
- Search behavior is predictable and documented

## Phase 4: Evidence and Timeline Depth

Goal: represent complicated public progress without flattening it.

Core deliverables:

- Commitment timeline
- Evidence item records
- Related public documents
- Responsible parties and institutional dependencies
- Milestone tracking
- Notes on blockers, delays, reversals, or scope changes

Exit criteria:

- A commitment can show progress over time
- Users can distinguish source evidence from editorial interpretation
- Status changes are auditable

## Phase 5: Public Participation

Goal: allow residents and partners to contribute responsibly.

Core deliverables:

- Submission form for suggested commitments or sources
- Moderation queue
- Contributor identity and contact handling
- Abuse prevention
- Public correction request flow
- Partner organization workflows

Exit criteria:

- Public submissions improve coverage without weakening trust
- Moderators can accept, reject, or request clarification
- Personal data handling is documented and minimal

## Phase 6: Scale and Integrations

Goal: support larger datasets, public APIs, and external publishing relationships.

Possible deliverables:

- Database persistence
- Admin dashboard
- Full-text search service
- Public API
- RSS or email updates
- Embeddable commitment cards
- Civic data imports
- Archival snapshots

Exit criteria:

- Performance remains acceptable with real data volume
- Data ownership and provenance are clear
- External integrations do not compromise editorial standards

## Cross-Cutting Work

Accessibility:

- Keyboard navigation
- Semantic HTML
- Screen reader review
- Color contrast checks
- Plain language content

Trust and safety:

- Source review
- Correction workflow
- Editorial audit trail
- Clear distinction between facts, summaries, and analysis

Performance:

- Fast initial page loads
- Static generation where appropriate
- Image optimization
- Minimal client-side JavaScript for mostly informational pages

Governance:

- Maintainer roles
- Publishing authority
- Review cadence
- Public correction policy

## Known Risks

Overclaiming precision. Public commitments are often ambiguous. The product must avoid false certainty.

Partisan capture. The project must have standards that work across parties, offices, and ideologies.

Source decay. Links may break or documents may move. Important sources need preservation strategy.

Editorial bottlenecks. Trust requires review, but review can slow publishing. Workflows must be realistic.

Premature automation. Automated extraction or scoring can introduce errors at the exact point where trust matters most.

## Roadmap Review Cadence

Review this roadmap after each meaningful product milestone. Update it when the project learns something important about users, editorial operations, technical constraints, or governance.
