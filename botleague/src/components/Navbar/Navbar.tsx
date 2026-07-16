import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { NAV_LINKS } from "@/data/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Primary">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 shrink-0" aria-label="BotLeague home">
            <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
              <path d="M32 6 L56 19 V45 L32 58 L8 45 V19 Z" fill="none" stroke="#2F49FF" strokeWidth="3" />
              <circle cx="32" cy="32" r="10" fill="#FF4D57" />
            </svg>
            <span className="font-heading text-xl font-extrabold uppercase tracking-wider">
              Bot<span className="text-accent-red">League</span>
            </span>
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className={`relative font-heading text-sm font-medium uppercase tracking-wider text-white/90 transition-colors hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-accent-red after:transition-all after:duration-300 ${
                    activeHref === link.href ? "after:w-full text-white" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="secondary" href="#login" className="px-6 py-2.5 text-xs">
              Login
            </Button>
            <Button variant="primary" href="#join" className="px-6 py-2.5 text-xs">
              Register Now
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-md border border-border text-white lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-black lg:hidden"
          >
            <Container className="flex flex-col gap-6 py-8">
              <ul className="flex flex-col gap-5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => {
                        setActiveHref(link.href);
                        setMobileOpen(false);
                      }}
                      className="font-heading text-lg font-medium uppercase tracking-wider text-white/90"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Button variant="secondary" href="#login" onClick={() => setMobileOpen(false)}>
                  Login
                </Button>
                <Button variant="primary" href="#join" onClick={() => setMobileOpen(false)}>
                  Register Now
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
