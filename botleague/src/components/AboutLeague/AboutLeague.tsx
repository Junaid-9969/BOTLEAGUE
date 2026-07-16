import { motion } from "framer-motion";
import { FaIdCard, FaGears, FaBriefcase, FaMicrochip } from "react-icons/fa6";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { ABOUT_FEATURES } from "@/data/constants";

const NETWORK_NODES = [
  { x: 20, y: 22, Icon: FaIdCard, label: "Digital identity record" },
  { x: 80, y: 24, Icon: FaGears, label: "Structured event system" },
  { x: 82, y: 84, Icon: FaBriefcase, label: "Career pathway" },
];
const HUB = { x: 42, y: 62 };

/** Abstract circuit / network illustration standing in for the Figma artwork. */
const NetworkIllustration = () => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    aria-hidden="true"
    className="relative mx-auto aspect-square w-full max-w-[440px]"
  >
    <div className="bg-circuit absolute inset-0 rounded-2xl opacity-40" />
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
      {NETWORK_NODES.map((n) => (
        <line
          key={n.label}
          x1={HUB.x}
          y1={HUB.y}
          x2={n.x}
          y2={n.y}
          stroke="#2F49FF"
          strokeWidth="0.4"
          strokeDasharray="2 2"
          opacity="0.7"
        />
      ))}
      <circle cx={HUB.x} cy={HUB.y} r="1" fill="#2F49FF" />
      {NETWORK_NODES.map((n) => (
        <circle key={`${n.label}-dot`} cx={n.x} cy={n.y} r="0.8" fill="#2F49FF" />
      ))}
    </svg>

    {/* Hub */}
    <div
      className="absolute grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-accent-blue/60 bg-card shadow-[0_0_35px_-8px_rgba(47,73,255,0.55)]"
      style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}
    >
      <FaMicrochip size={30} className="text-accent-blue" />
    </div>

    {/* Satellite nodes */}
    {NETWORK_NODES.map(({ x, y, Icon, label }) => (
      <div
        key={label}
        title={label}
        className="absolute grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-border bg-card text-white/80"
        style={{ left: `${x}%`, top: `${y}%` }}
      >
        <Icon size={20} />
      </div>
    ))}
  </motion.div>
);

const AboutLeague = () => {
  return (
    <section className="bg-surface py-16 lg:py-[100px]">
      <Container>
        <SectionTitle title="What is BotLeague?" className="mb-14" />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — numbered features */}
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {ABOUT_FEATURES.map((feature, i) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="mb-2 block font-heading text-2xl font-extrabold text-accent-red">
                  {i + 1}.
                </span>
                <h3 className="mb-2 font-heading text-lg font-bold uppercase tracking-wide text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right — illustration */}
          <NetworkIllustration />
        </div>
      </Container>
    </section>
  );
};

export default AboutLeague;
