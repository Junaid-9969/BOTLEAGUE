import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { DISCIPLINES } from "@/data/constants";

const SportsGrid = () => {
  return (
    <section id="disciplines" className="scroll-mt-20 relative overflow-hidden bg-black py-16 lg:py-[100px]">
      <div className="bg-circuit absolute inset-0" />
      <Container className="relative">
        <SectionTitle eyebrow="Sports" title="Competition Disciplines" className="mb-12" />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {DISCIPLINES.map((discipline, i) => (
            <motion.div
              key={discipline.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${discipline.gradient} transition-transform duration-500 group-hover:scale-110`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <discipline.icon size={44} className="text-white/90 drop-shadow-[0_0_18px_rgba(255,255,255,0.25)] transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-4 pb-3 pt-8">
                <p className="font-heading text-sm font-bold uppercase leading-tight tracking-wide text-white">
                  {discipline.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SportsGrid;
