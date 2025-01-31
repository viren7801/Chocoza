"use client";
import Image from "next/image";
import logo from "../images/logo_new.png";
import Link from "next/link";
import { navlinks } from "@/utils/textUtils";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#e6ccb2] sticky top-0 left-0 w-full z-50 py-4">
      <div className="flex items-center justify-between w-[90%] m-auto">
        {/* Logo */}
        <div className="justify-center flex">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src={logo}
              alt="Logo"
              className="w-[70px] h-auto cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ease-in-out transform ${
                menuOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex gap-4">
          {navlinks.map((link) => (
            <Link
              key={link._id}
              href={link.path}
              className="text-base font-bold text-[#7f5539] hover:text-[#5d3f2f] transition-colors"
              aria-label={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile NavLinks */}
      {menuOpen && (
        <div className="md:hidden absolute top-19 left-0 w-full bg-[#e6ccb2] shadow-lg">
          <div className="flex flex-col items-end gap-4 p-4">
            {navlinks.map((link) => (
              <Link
                key={link._id}
                href={link.path}
                className="text-2xl font-medium text-[#7f5539] hover:text-[#5d3f2f] transition-colors"
                aria-label={link.title}
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
