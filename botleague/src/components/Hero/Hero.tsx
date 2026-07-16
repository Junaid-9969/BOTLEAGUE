import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { HERO_CONTENT } from "@/data/constants";

/**
 * Abstract "arena core" emblem standing in for the Figma photo of two
 * robots colliding under stage lights — built entirely from SVG/CSS so
 * it never depends on an external image. Swap for a real arena photo
 * by dropping a file into src/assets/images and replacing this block.
 */
const ArenaGraphic = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] items-center justify-center md:flex"
  >
    <div className="relative aspect-square w-full max-w-[560px]">
      <div className="absolute inset-0 rounded-full bg-accent-red/20 blur-[100px]" />
      <div className="absolute inset-10 rounded-full bg-accent-blue/20 blur-[90px]" />
      <motion.svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <polygon
          points="200,20 353,110 353,290 200,380 47,290 47,110"
          fill="none"
          stroke="#2F49FF"
          strokeWidth="2"
          opacity="0.7"
        />
        <polygon
          points="200,70 313,135 313,265 200,330 87,265 87,135"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
        />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1="200"
            y1="200"
            x2={200 + 180 * Math.cos((angle * Math.PI) / 180)}
            y2={200 + 180 * Math.sin((angle * Math.PI) / 180)}
            stroke="#333333"
            strokeWidth="1"
          />
        ))}
        <circle cx="200" cy="200" r="58" fill="#0A0A0A" stroke="#FF4D57" strokeWidth="2.5" />
        <path
          d="M175 185 h50 v45 h-50 z M188 205 h8 M204 205 h8 M182 175 v10 M218 175 v10"
          fill="none"
          stroke="#FF4D57"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="192" cy="195" r="3.5" fill="#FF4D57" />
        <circle cx="208" cy="195" r="3.5" fill="#FF4D57" />
        {[
          [80, 60],
          [330, 90],
          [60, 320],
          [340, 300],
          [200, 30],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="#FF4D57"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.svg>
    </div>
  </div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-black pt-28 pb-20 scroll-mt-20"
    >
      {/* Background treatment: dark overlay + faint grid + glows */}
      <div className="absolute inset-0">
        <div className="bg-circuit absolute inset-0" />
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-accent-red/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
      </div>

      <ArenaGraphic />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="max-w-2xl"
        >
          <motion.a
            href="#events"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-border bg-white/5 py-1.5 pl-3 pr-4 text-xs backdrop-blur-sm sm:text-sm"
          >
            <span className="flex items-center gap-1.5 font-heading font-bold uppercase text-accent-red">
              <motion.span
                className="h-2 w-2 rounded-full bg-accent-red"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              {HERO_CONTENT.liveLabel}
            </span>
            <span className="hidden text-white/80 sm:inline">: {HERO_CONTENT.episodeText}</span>
            <span className="font-heading font-semibold uppercase tracking-wider text-accent-red">
              {HERO_CONTENT.watchLive}
            </span>
          </motion.a>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[2.6rem] font-black uppercase leading-[1.05] tracking-wide text-white sm:text-6xl lg:text-[4.2rem]"
          >
            {HERO_CONTENT.heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-lg text-base text-muted sm:text-lg"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" href="#join">
              {HERO_CONTENT.primaryCta}
            </Button>
            <Button variant="secondary" href="#events">
              {HERO_CONTENT.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
