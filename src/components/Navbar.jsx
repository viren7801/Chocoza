"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/products" },
  { label: "Our story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="announcement">
        <span>Handcrafted in small batches</span>
        <span className="announcement-dot">✦</span>
        <span>Local pickup in Navsari</span>
      </div>

      <div className="nav-shell">
        <Link href="/" className="brand-mark" aria-label="Chocoza home" onClick={() => setOpen(false)}>
          <Image src="/chocoza-logo.webp" alt="Chocoza" width={80} height={80} priority />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={"nav-link " + (pathname === link.href ? "nav-link-active" : "")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          className="nav-order"
          href="https://wa.me/919328032419?text=Hi%20Chocoza!%20I%27d%20like%20to%20know%20more%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={16} strokeWidth={1.8} />
          <span>Order on WhatsApp</span>
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <div className={"mobile-nav " + (open ? "mobile-nav-open" : "")}>
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? index * 55 + "ms" : "0ms" }}
          >
            <span>0{index + 1}</span>
            {link.label}
            <ArrowUpRight size={17} />
          </Link>
        ))}
        <a
          href="https://wa.me/919328032419?text=Hi%20Chocoza!%20I%27d%20like%20to%20know%20more%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <MessageCircle size={17} /> Order on WhatsApp
        </a>
      </div>
    </header>
  );
}
