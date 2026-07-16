import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { CATEGORIES } from "@/data/constants";

const CategoryCards = () => {
  return (
    <section id="programs" className="scroll-mt-20 bg-black py-16 lg:py-[100px]">
      <Container>
        <SectionTitle title="Categories" className="mb-12" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.035, y: -6 }}
              className={`group flex flex-col rounded-xl border bg-card p-7 transition-[border-color,box-shadow] duration-300 ${
                category.highlighted
                  ? "border-amber-400/70 shadow-[0_0_30px_-10px_rgba(251,191,36,0.4)]"
                  : "border-border hover:border-amber-400/60 hover:shadow-[0_0_30px_-10px_rgba(251,191,36,0.35)]"
              }`}
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 transition-transform duration-300 group-hover:scale-110">
                <category.icon size={26} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold uppercase leading-snug tracking-wide text-white">
                {category.title}
              </h3>
              <p className="mb-6 flex-1 text-sm text-muted">{category.description}</p>
              <a
                href="#disciplines"
                className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-accent-red transition-transform duration-300 group-hover:translate-x-1"
              >
                Learn More <FaArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryCards;
