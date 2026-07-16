import Container from "@/components/common/Container";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/data/constants";

const Footer = () => {
  return (
    <footer className="bg-black pb-10 pt-14">
      <Container>
        <div className="border-t border-border pt-12">
          <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
            <div className="flex gap-16">
              {FOOTER_LINKS.map((group, i) => (
                <div key={i}>
                  {group.title && (
                    <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-white">
                      {group.title}
                    </h4>
                  )}
                  <ul className={`flex flex-col gap-3 ${!group.title ? "sm:mt-10" : ""}`}>
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-sm text-muted transition-colors hover:text-white">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-white">
                Social Media
              </h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-white/80 transition-colors duration-300 hover:border-accent-red hover:text-accent-red"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-14 text-xs text-muted">
            © {new Date().getFullYear()} BotLeague. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
