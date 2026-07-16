import { motion } from "framer-motion";
import { FaUser, FaShieldAlt, FaCrown } from "react-icons/fa";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { ADVANTAGES, LEADERBOARD } from "@/data/constants";

const ACCENT_CLASSES: Record<string, string> = {
  gold: "text-amber-400 bg-amber-400/15 border-amber-400/50",
  blue: "text-accent-blue bg-accent-blue/15 border-accent-blue/40",
  pink: "text-pink-400 bg-pink-400/15 border-pink-400/40",
};

const Leaderboard = () => {
  const [top, ...rest] = LEADERBOARD;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="bg-circuit absolute inset-0 opacity-50" />
      <div className="relative">
        <p className="mb-6 font-heading text-lg font-bold uppercase tracking-widest text-white">Leaderboard</p>

        {/* #1 */}
        <div className="mb-6 flex items-center gap-4 rounded-xl border border-amber-400/40 bg-amber-400/10 p-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-amber-400/60 bg-black/40 text-amber-400">
            <FaCrown size={22} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">#{top.rank} · {top.name}</p>
            <p className="font-heading text-3xl font-extrabold text-white">{top.score.toLocaleString("en-IN")}</p>
          </div>
        </div>

        {/* 2-8 */}
        <ul className="flex flex-col gap-2.5">
          {rest.map((entry) => (
            <li
              key={entry.rank}
              className="flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-black/30 px-3.5 py-2.5"
            >
              <div className="flex items-center gap-3">
                <span className="w-5 text-xs font-semibold text-muted">{entry.rank}</span>
                <span className={`grid h-8 w-8 place-items-center rounded-full border ${ACCENT_CLASSES[entry.accent]}`}>
                  <FaUser size={13} />
                </span>
                <span className="text-sm font-medium text-white">{entry.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-white">{entry.score.toLocaleString("en-IN")}</span>
                <FaShieldAlt size={13} className={ACCENT_CLASSES[entry.accent].split(" ")[0]} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const AdvantagesSection = () => {
  return (
    <section id="ranks" className="scroll-mt-20 bg-surface py-16 lg:py-[100px]">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — benefits */}
          <div>
            <SectionTitle eyebrow="Why Register?" title="The League Advantage" className="mb-10" />
            <div className="flex flex-col gap-8">
              {ADVANTAGES.map((advantage, i) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-red/15 text-accent-red">
                    <advantage.icon size={19} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading text-base font-bold uppercase tracking-wide text-white">
                      {advantage.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — leaderboard */}
          <Leaderboard />
        </div>
      </Container>
    </section>
  );
};

export default AdvantagesSection;
