"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Nos services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Upgrade Luxembourg - accueil">
        <span className="brand-mark">U</span>
        <span className="brand-name">UPGRADE <i>LUXEMBOURG</i></span>
      </a>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navigation principale">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Parlons de votre projet <ArrowUpRight size={15} />
        </a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
