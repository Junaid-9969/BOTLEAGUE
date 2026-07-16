import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";
import { LIVE_NOW, UPCOMING_EVENTS, PAST_RESULTS } from "@/data/constants";

/** Decorative bracket graphic for the "Live Now" card — pure SVG, no assets required. */
const TournamentBracket = () => {
  const nodeFill = "#242424";
  const lineColor = "#FF4D57";

  const round1 = [
    { x: 0, y: 8 },
    { x: 0, y: 50 },
    { x: 0, y: 140 },
    { x: 0, y: 182 },
  ];
  const round2 = [
    { x: 150, y: 29 },
    { x: 150, y: 161 },
  ];
  const final = { x: 280, y: 95 };
  const w = 96;
  const h = 26;

  const connectors = [
    "M96,21 H123 V42 H150",
    "M96,63 H123 V42 H150",
    "M96,153 H123 V174 H150",
    "M96,195 H123 V174 H150",
    "M246,42 H263 V108 H280",
    "M246,174 H263 V108 H280",
  ];

  return (
    <svg viewBox="0 0 380 232" className="h-auto w-full" role="img" aria-label="Sample tournament bracket">
      {connectors.map((d) => (
        <path key={d} d={d} fill="none" stroke={lineColor} strokeWidth="1.5" opacity="0.8" />
      ))}
      {round1.map((n, i) => (
        <rect key={`r1-${i}`} x={n.x} y={n.y} width={w} height={h} rx="4" fill={nodeFill} stroke="#333333" />
      ))}
      {round2.map((n, i) => (
        <rect key={`r2-${i}`} x={n.x} y={n.y} width={w} height={h} rx="4" fill={nodeFill} stroke="#333333" />
      ))}
      <rect x={final.x} y={final.y} width={w} height={h} rx="4" fill="#2a1414" stroke={lineColor} />
    </svg>
  );
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const CompetitionSection = () => {
  return (
    <section id="events" className="scroll-mt-20 bg-black py-16 lg:py-[100px]">
      <Container>
        <SectionTitle title="Competitions & Events" className="mb-12" />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Column 1 — Live Now */}
          <motion.div custom={0} variants={columnVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <h3 className="mb-4 font-heading text-xl font-bold uppercase tracking-wide text-accent-red">Live Now</h3>
            <Card className="p-6" glowColor="red">
              <div className="mb-1 flex items-center justify-between gap-3">
                <h4 className="font-heading text-lg font-bold text-white">{LIVE_NOW.title}</h4>
                <span className="shrink-0 rounded-md bg-accent-red px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wide text-white">
                  {LIVE_NOW.status}
                </span>
              </div>
              <p className="mb-6 text-sm text-muted">{LIVE_NOW.subtitle}</p>
              <div className="border-t border-border pt-5">
                <TournamentBracket />
              </div>
            </Card>
          </motion.div>

          {/* Column 2 — Upcoming */}
          <motion.div custom={1} variants={columnVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <h3 className="mb-4 font-heading text-xl font-bold uppercase tracking-wide text-white">Upcoming</h3>
            <div className="flex flex-col gap-6">
              {UPCOMING_EVENTS.map((event) => (
                <Card key={event.id} className="p-6" glowColor="red">
                  <h4 className="mb-4 font-heading text-lg font-bold text-white">{event.city}</h4>
                  <div className="mb-6 grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wide text-muted">Date</p>
                      <p className="font-medium text-white">{event.date}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wide text-muted">Location</p>
                      <p className="font-medium text-white">{event.location}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wide text-muted">Category</p>
                      <p className="font-medium text-white">{event.category}</p>
                    </div>
                  </div>
                  <Button variant="primary" className="w-full" href={`#join`}>
                    Register
                  </Button>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Column 3 — Past Results */}
          <motion.div custom={2} variants={columnVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <h3 className="mb-4 font-heading text-xl font-bold uppercase tracking-wide text-white">Past Results</h3>
            <Card className="divide-y divide-border p-6" glowColor="red" hoverLift={false}>
              {PAST_RESULTS.map((result, i) => (
                <div key={i} className={i === 0 ? "pb-4" : i === PAST_RESULTS.length - 1 ? "pt-4" : "py-4"}>
                  <p className="font-heading text-base font-bold text-white">{result.title}</p>
                  <p className="text-sm text-muted">{result.subtitle}</p>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CompetitionSection;
