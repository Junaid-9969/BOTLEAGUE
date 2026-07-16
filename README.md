# BotLeague — India's Ultimate Robotics Arena

A production-ready, pixel-close reproduction of the Figma landing
page: a dark, esports-inspired robotics competition site built with **React 19,
Vite, TypeScript, Tailwind CSS v4, Framer Motion and React Icons**.

## 1. Requirements

- Node.js **18.18+** (Node 20 LTS recommended)
- npm 9+ (comes with Node)

## 2. Setup (Windows / PowerShell or VS Code terminal)

```powershell
# Go to the main directory  
cd botleague

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open the URL it prints — usually **http://localhost:5173** — in your browser.

## 3. Other scripts

```powershell
npm run build     # Type-checks and builds an optimized production bundle to /dist
npm run preview   # Serves the production build locally, to sanity-check it
npm run lint       # Runs oxlint
```

## 4. Project structure

```
src/
  components/
    Navbar/             Sticky nav, transparent -> solid on scroll, mobile menu
    Hero/                Live badge, headline, CTAs, SVG "arena" visual
    CompetitionSection/  Live Now (bracket), Upcoming events, Past Results
    UserJourney/         4-step timeline (horizontal desktop / vertical mobile)
    AboutLeague/         "What is BotLeague?" - 4 features + network illustration
    CategoryCards/       Mini Makers / Junior Innovators / Young Engineers / Robo Minds
    SportsGrid/          Competition Disciplines image-style grid
    AdvantagesSection/   League Advantage + Leaderboard widget
    JoinEcosystem/       3 validated sign-up forms
    Sponsors/            Sponsor logo grid
    Footer/              Quick links + social icons
    common/              Button, Card, Container, SectionTitle (shared primitives)
  data/constants/        All page copy + icon mapping in one typed file
  types/                 Shared TypeScript interfaces
  pages/Home.tsx         Assembles every section in order
  styles/index.css       Tailwind v4 theme tokens (design system colors/fonts)
```

## 5. Design system 

| Token             | Value                        |
|--------------------|------------------------------|
| `bg-background`    | `#000000` primary background |
| `bg-surface`       | `#111111` secondary background |
| `bg-card`          | `#1A1A1A` card surfaces      |
| `border-border`    | `#333333`                    |
| `accent-red`       | `#FF4D57`                    |
| `accent-blue`      | `#2F49FF`                    |
| Headings           | Orbitron, bold, uppercase    |
| Body               | Inter, 16px                  |
| Container          | 1280px max-width             |
| Section spacing    | ~100px top/bottom on desktop (`lg:py-[100px]`) |


## 6. Accessibility & performance touches included

- Semantic landmarks (`header`, `main`, `footer`), one `<h1>`, ordered heading levels
- Visible keyboard focus ring on every interactive element
- Decorative SVGs marked `aria-hidden`; form inputs have real (visually hidden) labels
- `prefers-reduced-motion` respected globally (CSS) and by Framer Motion (`MotionConfig`)
- Sticky nav accounts for scroll offset (`scroll-mt-20`) so anchored sections aren't hidden underneath it
