import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
  glowColor?: "red" | "blue" | "none";
}

const GLOW: Record<NonNullable<CardProps["glowColor"]>, string> = {
  red: "hover:border-accent-red/70 hover:shadow-[0_18px_45px_-15px_rgba(255,77,87,0.35)]",
  blue: "hover:border-accent-blue/70 hover:shadow-[0_18px_45px_-15px_rgba(47,73,255,0.35)]",
  none: "",
};

/**
 * Rounded, dark, thin-bordered surface with an optional hover-lift
 * animation and colored glow — the base card used by Competitions,
 * Categories, Sponsors, etc.
 */
const Card = ({ children, className = "", hoverLift = true, glowColor = "red" }: CardProps) => {
  return (
    <motion.div
      whileHover={hoverLift ? { y: -8 } : undefined}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-xl border border-border bg-card transition-[border-color,box-shadow] duration-300 ${GLOW[glowColor]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
