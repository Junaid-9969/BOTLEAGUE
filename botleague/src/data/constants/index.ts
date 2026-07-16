import {
  FaTools,
  FaLandmark,
  FaTrophy,
  FaUsers,
  FaCubes,
  FaLightbulb,
  FaUserCog,
  FaBrain,
  FaFlagCheckered,
  FaRoute,
  FaCar,
  FaHockeyPuck,
  FaFistRaised,
  FaMedal,
  FaGavel,
  FaBriefcase,
  FaBolt,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { TbDrone } from "react-icons/tb";

import type {
  NavLink,
  UpcomingEvent,
  PastResult,
  JourneyStep,
  AboutFeature,
  CategoryItem,
  Discipline,
  Advantage,
  LeaderboardEntry,
  EcosystemForm,
  Sponsor,
  FooterLinkGroup,
  SocialLink,
} from "@/types";

/* ---------- Navbar ---------- */
export const NAV_LINKS: NavLink[] = [
  { label: "Events", href: "#events" },
  { label: "Programs", href: "#programs" },
  { label: "Community", href: "#join" },
  { label: "Ranks", href: "#ranks" },
];

/* ---------- Hero ---------- */
export const HERO_CONTENT = {
  liveLabel: "Live",
  episodeText: "Episode 14 . Bengaluru Regionals",
  watchLive: "WATCH LIVE",
  heading: "India's Ultimate Robotics Arena",
  subtitle: "Build.Compete.Rank.The National Ecosystem for Robotics Arena",
  primaryCta: "Create Account",
  secondaryCta: "Explore Events",
};

/* ---------- Competitions & Events ---------- */
export const LIVE_NOW = {
  title: "Bengaluru Regionals",
  subtitle: "Lorem Ipsum",
  status: "Ongoing",
};

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "mumbai",
    city: "Event in Mumbai",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
  {
    id: "delhi",
    city: "Event in Delhi",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
];

export const PAST_RESULTS: PastResult[] = [
  { title: "Bengaluru Regionals", subtitle: "Lorem Ipsum" },
  { title: "Bengaluru Regionals", subtitle: "Lorem Ipsum" },
  { title: "Bengaluru Regionals", subtitle: "Lorem Ipsum" },
];

/* ---------- User Journey ---------- */
export const JOURNEY_STEPS: JourneyStep[] = [
  { step: 1, title: "Build Your Team", icon: FaTools },
  { step: 2, title: "Compete Across India", icon: FaLandmark },
  { step: 3, title: "Earn National Ranking & Value", icon: FaTrophy },
  { step: 4, title: "Join the League", icon: FaUsers },
];

/* ---------- What is BotLeague ---------- */
export const ABOUT_FEATURES: AboutFeature[] = [
  {
    number: "01",
    title: "Structured Events",
    description: "\u201CFrom one-off events to a year-round competitive season.\u201D",
  },
  {
    number: "02",
    title: "Digital Identity",
    description: "\u201CYour professional robotics legacy, tracked and verified.\u201D",
  },
  {
    number: "03",
    title: "National Ranking",
    description: "\u201CBenchmark your skills against the best engineers in India.\u201D",
  },
  {
    number: "04",
    title: "Career Pathway",
    description: "\u201CTurning arena victories into real-world industry opportunities.\u201D",
  },
];

/* ---------- Categories ---------- */
export const CATEGORIES: CategoryItem[] = [
  {
    id: "mini-makers",
    title: "Mini Makers",
    description: "Where Creativity Meets Logic.",
    icon: FaCubes,
    highlighted: true,
  },
  {
    id: "junior-innovators",
    title: "Junior Innovators",
    description: "Engineering & Strategy Fundamentals.",
    icon: FaLightbulb,
  },
  {
    id: "young-engineers",
    title: "Young Engineers",
    description: "Advanced Wireless & Autonomous Control.",
    icon: FaUserCog,
  },
  {
    id: "robo-minds",
    title: "Robo Minds",
    description: "Elite Professional Sports & Robotics.",
    icon: FaBrain,
  },
];

/* ---------- Competition Disciplines ---------- */
export const DISCIPLINES: Discipline[] = [
  { title: "Robo Race", icon: FaFlagCheckered, gradient: "from-accent-red/40 via-black to-black" },
  { title: "Line Follower", icon: FaRoute, gradient: "from-accent-blue/40 via-black to-black" },
  { title: "RC Racing", icon: FaCar, gradient: "from-zinc-500/40 via-black to-black" },
  { title: "FPV Drone Racing & Aeromodelling", icon: TbDrone, gradient: "from-accent-blue/40 via-black to-black" },
  { title: "Robo Hockey", icon: FaHockeyPuck, gradient: "from-accent-red/40 via-black to-black" },
  { title: "Robo War", icon: FaFistRaised, gradient: "from-accent-red/50 via-black to-black" },
];

/* ---------- League Advantage ---------- */
export const ADVANTAGES: Advantage[] = [
  {
    title: "National Recognition",
    description: "\u201CBenchmark your skills on India's official robotics leaderboard.\u201D",
    icon: FaMedal,
  },
  {
    title: "Fair Judging",
    description: "\u201CCompete with confidence under standardized, expert-led evaluation.\u201D",
    icon: FaGavel,
  },
  {
    title: "Career Ops",
    description: "\u201CBridge the gap between arena victories and top-tier tech placements.\u201D",
    icon: FaBriefcase,
  },
  {
    title: "High-Energy Eco",
    description: "\u201CJoin a nationwide community of elite innovators and robotics athletes.\u201D",
    icon: FaBolt,
  },
];

export const LEADERBOARD: LeaderboardEntry[] = [
  { rank: "01", name: "Player Name", score: 508754, accent: "gold" },
  { rank: "02", name: "Player Name", score: 22000, accent: "blue" },
  { rank: "03", name: "Player Name", score: 20030, accent: "blue" },
  { rank: "04", name: "Player Name", score: 19500, accent: "pink" },
  { rank: "05", name: "Player Name", score: 15060, accent: "pink" },
  { rank: "06", name: "Player Name", score: 13865, accent: "pink" },
  { rank: "07", name: "Player Name", score: 10954, accent: "pink" },
  { rank: "08", name: "Player Name", score: 9057, accent: "pink" },
];

/* ---------- Join the Ecosystem ---------- */
export const ECOSYSTEM_FORMS: EcosystemForm[] = [
  { id: "judge", title: "Become in Judge" },
  { id: "volunteer", title: "Volunteer" },
  { id: "community", title: "Community Member" },
];

/* ---------- Sponsors ---------- */
export const SPONSORS: Sponsor[] = [
  { name: "NIT Delhi", initials: "ND" },
  { name: "Indian BIT", initials: "IB" },
  { name: "NIT Silchar", initials: "NS" },
  { name: "Robo Company", initials: "RC" },
  { name: "IIT Bombay", initials: "IB" },
  { name: "Robo Company", initials: "GR" },
];

/* ---------- Footer ---------- */
export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "The Arena", href: "#hero" },
      { label: "Episodes", href: "#events" },
      { label: "National Rankings", href: "#ranks" },
      { label: "Programs", href: "#programs" },
      { label: "Rulebooks", href: "#disciplines" },
    ],
  },
  {
    title: "",
    links: [
      { label: "Join the Team", href: "#join" },
      { label: "Sponsorships", href: "#sponsors" },
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Legal", href: "#" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "YouTube", icon: FaYoutube, href: "#" },
  { label: "Instagram", icon: FaInstagram, href: "#" },
  { label: "Facebook", icon: FaFacebookF, href: "#" },
  { label: "Twitter", icon: FaTwitter, href: "#" },
];
