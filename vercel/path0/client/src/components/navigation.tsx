import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Amal Alexander
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className={`nav-link ${location === "/" ? "text-blue-600" : "text-gray-600"}`}>
              Home
            </Link>
            <Link href="/projects" className={`nav-link ${location === "/projects" ? "text-blue-600" : "text-gray-600"}`}>
              Projects
            </Link>
            <Link href="/about" className={`nav-link ${location === "/about" ? "text-blue-600" : "text-gray-600"}`}>
              About
            </Link>
            <Link href="/contact" className={`nav-link ${location === "/contact" ? "text-blue-600" : "text-gray-600"}`}>
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className={`nav-link ${location === "/" ? "text-blue-600" : "text-gray-600"}`}>
                Home
              </Link>
              <Link href="/projects" className={`nav-link ${location === "/projects" ? "text-blue-600" : "text-gray-600"}`}>
                Projects
              </Link>
              <Link href="/about" className={`nav-link ${location === "/about" ? "text-blue-600" : "text-gray-600"}`}>
                About
              </Link>
              <Link href="/contact" className={`nav-link ${location === "/contact" ? "text-blue-600" : "text-gray-600"}`}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}