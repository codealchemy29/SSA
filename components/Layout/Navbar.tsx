"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  "About",
  "Programs",
  "Facilities",
  "Professionals",
  "Events",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-white/95
        backdrop-blur-md
        border-b
        border-gray-100
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 lg:h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="SSA Academy"
              width={90}
              height={45}
              priority
              className="h-auto w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-wider
                  text-[#1A1A1A]
                  transition-colors
                  duration-300
                  hover:text-[#A7C520]
                "
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              className="
                rounded-full
                border
                border-[#A7C520]
                px-6
                py-2.5
                text-sm
                font-medium
                text-[#A7C520]
                transition-all
                duration-300
                hover:bg-[#A7C520]
                hover:text-white
              "
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black lg:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            lg:hidden
            border-t
            border-gray-100
            bg-white
          "
        >
          <div className="flex flex-col px-6 py-6">

            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="
                  py-3
                  text-base
                  font-medium
                  text-[#1A1A1A]
                  transition-colors
                  hover:text-[#A7C520]
                "
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}

            <button
              className="
                mt-4
                rounded-full
                bg-[#A7C520]
                px-6
                py-3
                text-sm
                font-medium
                text-white
              "
            >
              Register Now
            </button>

          </div>
        </div>
      )}
    </header>
  );
}