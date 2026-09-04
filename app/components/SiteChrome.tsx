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

export function SiteChrome({ active, light = false }: { active?: string; light?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const railRef = useRef<HTMLSpanElement>(null);

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
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
        <nav id="main-navigation" aria-label="Main navigation" data-open={menuOpen}>
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
