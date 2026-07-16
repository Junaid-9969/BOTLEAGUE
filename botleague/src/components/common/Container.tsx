import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Centers content at the design system's 1280px container width,
 * with responsive side gutters down to 375px mobile.
 */
const Container = ({ children, className = "", as: Tag = "div" }: ContainerProps) => {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
};

export default Container;
