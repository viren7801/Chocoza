import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo_new.png";
import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="Chocoza home">
            <Image src={logo} alt="Chocoza" width={150} height={70} />
          </Link>
          <p>Handcrafted chocolates and bakes, made to make ordinary moments a little sweeter.</p>
          <a
            className="footer-social"
            href="https://www.instagram.com/__chocoza__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={17} /> Follow along <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="footer-column">
          <p className="footer-eyebrow">EXPLORE</p>
          <Link href="/products">Our collection</Link>
          <Link href="/about">Our story</Link>
          <Link href="/contact">Get in touch</Link>
        </div>

        <div className="footer-column">
          <p className="footer-eyebrow">SAY HELLO</p>
          <a href="https://wa.me/919409664446" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={15} /> WhatsApp
          </a>
          <a href="mailto:chocoza.chocolates@gmail.com">
            <Mail size={15} /> Email us
          </a>
          <span><MapPin size={15} /> Navsari, Gujarat</span>
        </div>

        <div className="footer-note">
          <span className="footer-note-icon">✳</span>
          <p>Good things are made slowly. Every Chocoza order is prepared with care.</p>
          <span className="footer-pickup">LOCAL PICKUP ONLY</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Chocoza. Made with love.</span>
        <span>Small batch. Big joy.</span>
      </div>
    </footer>
  );
}
