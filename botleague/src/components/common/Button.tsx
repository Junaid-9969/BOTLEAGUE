import type { ReactNode, MouseEventHandler } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: MouseEventHandler;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-red text-white hover:bg-accent-red-dim shadow-[0_0_0_0_rgba(255,77,87,0)] hover:shadow-[0_0_28px_2px_rgba(255,77,87,0.45)]",
  secondary:
    "bg-transparent text-white border border-white/70 hover:bg-accent-red hover:border-accent-red",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-sm font-heading font-semibold uppercase tracking-wider transition-colors duration-300 cursor-pointer select-none";

/**
 * Primary (solid red) / Secondary (outline -> red on hover) button,
 * per the Figma "Buttons" spec. Renders as a link when `href` is passed,
 * otherwise as a real <button>.
 */
const Button = ({ children, variant = "primary", href, type = "button", className = "", onClick }: ButtonProps) => {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.045 },
    whileTap: { scale: 0.96 },
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (href) {
    const isAnchor = href.startsWith("#");
    return (
      <motion.a href={href} className={classes} onClick={onClick} {...motionProps}>
        {children}
        {!isAnchor && <span className="sr-only"> (opens link)</span>}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} className={classes} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
};

export default Button;
