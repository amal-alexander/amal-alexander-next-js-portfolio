"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

function Navigation() {
  const [location] = useLocation();
  const pathname = location || "/";
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", color: "text-primary-blue" },
    { href: "#about", label: "About", color: "text-primary-purple" },
    { href: "#projects", label: "Projects", color: "text-primary-green" },
    { href: "#skills", label: "Skills", color: "text-primary-pink" },
    { href: "/ultra-frog", label: "Ultra Frog", color: "text-teal-400" },
    { href: "#contact", label: "Contact", color: "text-primary-yellow" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // only handle hash links here
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // if not on home, navigate to home then scroll after a short delay
      if (pathname !== "/") {
        window.location.href = "/#" + sectionId;
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    // close mobile menu on route change
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg font-bold">
              AA
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`cursor-pointer ${item.color} hover:underline`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`cursor-pointer ${item.color} hover:underline`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`block py-2 ${item.color}`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;