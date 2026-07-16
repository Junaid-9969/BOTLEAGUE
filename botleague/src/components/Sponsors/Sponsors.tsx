import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import { SPONSORS } from "@/data/constants";

/**
 * Note: institutional crests (NIT/IIT etc.) are trademarked, so this uses
 * generic monogram badges as stand-ins — swap the badge markup for real
 * logo files in src/assets/images once you have permission to use them.
 */
const Sponsors = () => {
  return (
    <section id="sponsors" className="scroll-mt-20 bg-black py-16 lg:py-[100px]">
      <Container>
        <h2 className="mb-10 font-heading text-2xl font-extrabold uppercase tracking-wide text-white">Sponsors</h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {SPONSORS.map((sponsor, i) => (
            <motion.div
              key={`${sponsor.name}-${i}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center gap-3.5 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/40 font-heading text-xs font-bold text-white/80 transition-colors duration-300 group-hover:border-accent-red group-hover:text-accent-red">
                {sponsor.initials}
              </span>
              <span className="font-heading text-sm font-bold uppercase tracking-wide text-white/80 group-hover:text-white">
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Sponsors;
