"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export type NavLink = { href: string; label: string };

export default function Header({
  links,
  cta = { href: "/#contact", label: "Book Appointment" },
}: {
  links: NavLink[];
  cta?: NavLink;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  // In-page anchors ("#services") stay plain <a>; page links use <Link>.
  const item = (l: NavLink) =>
    l.href.startsWith("#") ? (
      <a href={l.href} onClick={close}>{l.label}</a>
    ) : (
      <Link href={l.href} onClick={close}>{l.label}</Link>
    );

  return (
    <header className="nav">
      <div className="wrap" style={{ position: "relative" }}>
        <Link href="/" className="brand" aria-label="Dr. Suraaj Clinic & Advanced Wellness Center home">
          <Logo />
          <div>
            <span className="brand-name">Dr. Suraaj Clinic</span>
            <span className="brand-sub">&amp; Advanced Wellness Center</span>
          </div>
        </Link>
        <nav aria-label="Main">
          <ul id="menu" className={open ? "open" : undefined}>
            {links.map((l) => (
              <li key={l.href}>{item(l)}</li>
            ))}
          </ul>
        </nav>
        {cta.href.startsWith("#") ? (
          <a href={cta.href} className="btn btn-primary nav-cta">{cta.label}</a>
        ) : (
          <Link href={cta.href} className="btn btn-primary nav-cta">{cta.label}</Link>
        )}
        <button className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
