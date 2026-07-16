import type { IconType } from "react-icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface UpcomingEvent {
  id: string;
  city: string;
  date: string;
  location: string;
  category: string;
}

export interface PastResult {
  title: string;
  subtitle: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  icon: IconType;
}

export interface AboutFeature {
  number: string;
  title: string;
  description: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  highlighted?: boolean;
}

export interface Discipline {
  title: string;
  icon: IconType;
  gradient: string;
}

export interface Advantage {
  title: string;
  description: string;
  icon: IconType;
}

export interface LeaderboardEntry {
  rank: string;
  name: string;
  score: number;
  accent: "blue" | "pink" | "gold";
}

export interface EcosystemForm {
  id: string;
  title: string;
}

export interface Sponsor {
  name: string;
  initials: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  icon: IconType;
  href: string;
}
