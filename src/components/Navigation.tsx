import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Releases", href: "#releases" },
  { label: "Gallery", href: "#gallery" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  /* ------------------------------
     Smooth scroll + close menu
  -------------------------------*/
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  /* ------------------------------
     Scroll spy (active section)
  -------------------------------*/
  useEffect(() => {
    const sections = navItems
      .map(i => document.querySelector(i.href))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveId(`#${section.id}`);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= Hamburger ================= */}
      <button
        onClick={() => setIsOpen(v => !v)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full
          bg-background/80 backdrop-blur-md
          border border-border hover:bg-muted
          transition-all duration-300"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <Menu
            className={cn(
              "absolute inset-0 transition-all duration-300",
              isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100"
            )}
          />
          <X
            className={cn(
              "absolute inset-0 transition-all duration-300",
              isOpen ? "opacity-100" : "opacity-0 -rotate-90 scale-0"
            )}
          />
        </div>
      </button>

      {/* ================= Overlay ================= */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-opacity duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* ================= Menu ================= */}
      <nav
        className={cn(
          "fixed top-0 right-0 z-40 h-full w-full md:w-96",
          "bg-card/95 backdrop-blur-xl border-l border-border",
          "transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col justify-center h-full px-12 py-24">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <a
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "block cursor-pointer font-display text-3xl md:text-4xl py-2",
                    "transition-all duration-300",
                    activeId === item.href
                      ? "text-primary translate-x-4"
                      : "text-foreground/70 hover:text-primary hover:translate-x-4",
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  )}
                  style={{ transitionDelay: `${index * 60 + 100}ms` }}
                >
                  {item.label}
                  <span
                    className={cn(
                      "block h-px mt-1 bg-primary transition-all duration-300",
                      activeId === item.href ? "w-full" : "w-0"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* ================= Social ================= */}
          <div
            className={cn(
              "mt-auto pt-12 transition-all duration-500",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <p className="text-xs tracking-widest text-muted-foreground mb-4">
              FOLLOW ALONG
            </p>
            <div className="flex gap-6 text-foreground/60">
              {["IG", "YT", "SP", "SC"].map(s => (
                <span
                  key={s}
                  className="cursor-pointer hover:text-primary transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
