import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent section heading block: small red eyebrow label,
 * bold uppercase Orbitron heading, optional muted subtitle.
 * Fades up into view once, on scroll.
 */
const SectionTitle = ({ eyebrow, title, subtitle, align = "left", className = "" }: SectionTitleProps) => {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-3 ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className="text-sm sm:text-base font-heading font-semibold uppercase tracking-[0.25em] text-accent-red">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-extrabold uppercase leading-tight tracking-wide text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base text-muted">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
