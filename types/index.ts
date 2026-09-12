/**
 * Public Service Covenant (PSC) - Core Architectural Type Definitions
 * Scalable schema supporting current movement landing pages and future platform pillars.
 */

export interface CovenantPrinciple {
  id: string;
  title: string;
  statement: string;
  category: "accountability" | "duty" | "transparency" | "service";
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface WhyPillar {
  number: string;
  title: string;
  description: string;
  tagline: string;
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
    isExternal?: boolean;
    isBadge?: string;
  }[];
}

// Future Roadmap Domain Declarations

export interface VolunteerProfile {
  id: string;
  name: string;
  email: string;
  location: string;
  skills: string[];
  joinedAt: string;
  status: "active" | "pending" | "verified";
}

export interface MemberPledge {
  id: string;
  fullName: string;
  email: string;
  role: "citizen" | "public_servant" | "institution";
  pledgeSignedAt: string;
}

export interface ResearchPolicyPaper {
  id: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  author: string;
  downloadUrl?: string;
}

export interface LeadershipProfile {
  id: string;
  name: string;
  roleTitle: string;
  bio: string;
  publicDutyRecordUrl?: string;
  verifiedStatus: boolean;
}

export interface TransparencyMetric {
  id: string;
  title: string;
  currentValue: number | string;
  targetValue: number | string;
  unit: string;
  lastUpdated: string;
}
