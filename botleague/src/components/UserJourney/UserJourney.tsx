import { Fragment } from "react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { JOURNEY_STEPS } from "@/data/constants";

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.25 + i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const StepNode = ({ step, title, Icon, index }: { step: number; title: string; Icon: (typeof JOURNEY_STEPS)[number]["icon"]; index: number }) => (
  <motion.div
    custom={index}
    variants={nodeVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    className="relative z-10 flex w-full flex-col items-center gap-4 text-center md:w-44"
  >
    <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full border-2 border-accent-blue bg-black shadow-[0_0_25px_-6px_rgba(47,73,255,0.6)]">
      <Icon size={30} className="text-white" />
    </div>
    <div>
      <p className="mb-1.5 font-heading text-sm font-bold uppercase tracking-widest text-accent-red">Step {step}</p>
      <p className="font-heading text-base font-bold uppercase leading-snug text-white">{title}</p>
    </div>
  </motion.div>
);

const UserJourney = () => {
  return (
    <section className="bg-black py-16 lg:py-[100px]">
      <Container>
        <SectionTitle
          eyebrow="User Journey"
          title="Your Path to the League"
          subtitle="Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          align="center"
          className="mb-20"
        />

        {/* Desktop / tablet — horizontal timeline */}
        <div className="relative hidden md:flex md:items-start md:justify-between">
          <div className="absolute left-[12%] right-[12%] top-12 h-0.5 bg-accent-blue/20" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="absolute left-[12%] right-[12%] top-12 h-0.5 bg-accent-blue"
          />
          {JOURNEY_STEPS.map((step, i) => (
            <StepNode key={step.step} step={step.step} title={step.title} Icon={step.icon} index={i} />
          ))}
        </div>

        {/* Mobile — vertical timeline */}
        <div className="flex flex-col items-center md:hidden">
          {JOURNEY_STEPS.map((step, i) => (
            <Fragment key={step.step}>
              <StepNode step={step.step} title={step.title} Icon={step.icon} index={i} />
              {i < JOURNEY_STEPS.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ transformOrigin: "top" }}
                  className="h-10 w-0.5 bg-accent-blue"
                />
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UserJourney;
