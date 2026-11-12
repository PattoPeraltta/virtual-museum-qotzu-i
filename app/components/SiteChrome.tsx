"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { assets } from "../../src/assets";

const navigation = [
  {
    id: "lake",
    label: "Lake Poopó",
    href: "/lake-poopo",
    sections: [
      ["1A", "Lake Poopó's Role in the Region", "lifeblood"],
      ["1B", "Scientific Overview", "scientific"],
      ["1C", "Mining Contamination", "mining"],
      ["1D", "Nación Originaria Uru: Overview", "people"],
      ["1E", "Qotzuñi: People of the Lake", "qotzuni"],
    ],
  },
  {
    id: "about",
    label: "About the Urus",
    href: "/about",
    sections: [
      ["2A", "Language", "language"],
      ["2B", "Ways of Life", "ways-of-life"],
      ["2C", "Resilience", "resilience"],
      ["2D", "Political and Legal Context", "political-context"],
    ],
  },
  {
    id: "impact",
    label: "Impact",
    href: "/impact",
    sections: [
      ["3A", "Documentary Project", "documentary"],
      ["3B", "Impact Initiatives", "initiatives"],
      ["3C", "Global Parallels", "global-parallels"],
      ["3D", "How to Help", "help"],
    ],
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources",
    sections: [
      ["4A", "Documentary", "documentaries"],
      ["4B", "Photography", "photographic-archive"],
      ["4C", "Thesis", "academic"],
      ["4D", "Bibliography & Publications", "bibliography"],
      ["4E", "Other Projects", "other-projects"],
    ],
  },
] as const;

const donationUrl = "https://donorbox.org/qotzuni-people-of-the-lake-1";

export function SiteChrome({ active, light = false }: { active?: string; light?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(active ?? null);
  const railRef = useRef<HTMLSpanElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const root = document.documentElement;
    const toggle = toggleRef.current;
    root.classList.add("menu-locked");
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 801px)");
    const onResize = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      root.classList.remove("menu-locked");
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
      toggle?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        if (railRef.current) railRef.current.style.transform = `scaleY(${progress})`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <header className={`site-header ${light ? "site-header--light" : "site-header--dark"}`}>
        <Link className="brand" href="/" aria-label="Uru Virtual Museum home">
          <img src={assets.home_imgGroup259} alt="" />
          <span className="brand-fallback">QOTZUÑI</span>
        </Link>
        <nav id="main-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <div className="site-nav-item" key={item.id}>
              <Link className="site-nav-link" href={item.href} aria-current={active === item.id ? "page" : undefined}>
                {item.label}
              </Link>
              <div className="site-nav-submenu" aria-label={`${item.label} sections`}>
                {item.sections.map(([number, label, id]) => (
                  <Link key={id} href={`${item.href}#${id}`}>
                    <span>{number}</span>{label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </header>
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen(true)}
      >
        <span className="menu-toggle__icon" aria-hidden="true"><i /><i /></span>
        Menu
      </button>
      <div
        className="mobile-menu"
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        data-open={menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-menu__top">
          <Link className="mobile-menu__brand" href="/" onClick={closeMenu} aria-label="Uru Virtual Museum home">
            <img src={assets.home_imgGroup259} alt="" />
          </Link>
          <button ref={closeRef} className="mobile-menu__close" type="button" onClick={closeMenu}>
            Close
            <span className="mobile-menu__close-icon" aria-hidden="true" />
          </button>
        </div>
        <p className="mobile-menu__eyebrow"><span aria-hidden="true" />Uru Virtual Museum</p>
        <nav aria-label="Mobile navigation">
          <ol className="mobile-menu__list">
            {navigation.map((item, index) => {
              const open = expanded === item.id;
              return (
                <li
                  className="mobile-menu__item"
                  key={item.id}
                  data-current={active === item.id}
                  style={{ ["--i" as string]: index }}
                >
                  <div className="mobile-menu__row">
                    <Link href={item.href} onClick={closeMenu} aria-current={active === item.id ? "page" : undefined}>
                      <span className="mobile-menu__number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="mobile-menu__label">{item.label}</span>
                    </Link>
                    <button
                      className="mobile-menu__expand"
                      type="button"
                      aria-expanded={open}
                      aria-controls={`mobile-sections-${item.id}`}
                      aria-label={`${open ? "Hide" : "Show"} ${item.label} sections`}
                      onClick={() => setExpanded(open ? null : item.id)}
                    />
                  </div>
                  <div className="mobile-menu__sections" id={`mobile-sections-${item.id}`} data-open={open} inert={!open}>
                    <div>
                      {item.sections.map(([number, label, id]) => (
                        <Link key={id} href={`${item.href}#${id}`} onClick={closeMenu}>
                          <span>{number}</span>{label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
        <div className="mobile-menu__footer">
          <a className="button button--orange" href={donationUrl} target="_blank" rel="noopener noreferrer">
            Support the Campaign <span aria-hidden="true">→</span>
          </a>
          <p>The Bolivian Altiplano · 3,700 meters above sea level</p>
        </div>
      </div>
      <div className={`scroll-rail ${light ? "scroll-rail--light" : ""}`} aria-hidden="true">
        <span ref={railRef} />
      </div>
    </>
  );
}

export function ScrollCue({ href }: { href: string }) {
  return <Link className="scroll-cue" href={href}><span aria-hidden="true">↓</span> Scroll to keep reading</Link>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span aria-hidden="true">↑</span> Scroll to Top
      </button>
    </footer>
  );
}
