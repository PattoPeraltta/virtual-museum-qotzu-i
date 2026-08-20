"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { assets } from "../../src/assets";

const navigation = [
  { id: "lake", label: "Lake Poopó", href: "/lake-poopo" },
  { id: "about", label: "About the Urus", href: "/about" },
  { id: "impact", label: "Impact", href: "/impact" },
  { id: "resources", label: "Resources", href: "/resources" },
];

export function SiteChrome({ active, light = false }: { active?: string; light?: boolean }) {
  const [showTop, setShowTop] = useState(false);
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
        setShowTop(window.scrollY > window.innerHeight * 0.65);
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
            <Link key={item.id} href={item.href} aria-current={active === item.id ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <div className={`scroll-rail ${light ? "scroll-rail--light" : ""}`} aria-hidden="true">
        <span ref={railRef} />
      </div>
      <button
        className="floating-top"
        type="button"
        data-visible={showTop}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ <span>Top</span>
      </button>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" aria-label="Uru Virtual Museum home">QOTZUÑI</Link>
      <p>Uru Virtual Museum · Lake Poopó, Bolivia</p>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑ Scroll to top</button>
    </footer>
  );
}
