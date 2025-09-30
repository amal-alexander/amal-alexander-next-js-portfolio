import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navigate = (path: string) => {
    setLocation(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" onClick={() => navigate("/")} className="text-xl font-bold">
            Amal Alexander
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" onClick={() => navigate("/")} className={`nav-link ${location === "/" ? "text-blue-600" : "text-gray-600"}`}>
              Home
            </Link>
            <Link href="/projects" onClick={() => navigate("/projects")} className={`nav-link ${location === "/projects" ? "text-blue-600" : "text-gray-600"}`}>
              Projects
            </Link>
            <Link href="/about" onClick={() => navigate("/about")} className={`nav-link ${location === "/about" ? "text-blue-600" : "text-gray-600"}`}>
              About
            </Link>
            <Link href="/contact" onClick={() => navigate("/contact")} className={`nav-link ${location === "/contact" ? "text-blue-600" : "text-gray-600"}`}>
              Contact
            </Link>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" onClick={() => navigate("/")} className={`nav-link ${location === "/" ? "text-blue-600" : "text-gray-600"}`}>
                Home
              </Link>
              <Link href="/projects" onClick={() => navigate("/projects")} className={`nav-link ${location === "/projects" ? "text-blue-600" : "text-gray-600"}`}>
                Projects
              </Link>
              <Link href="/about" onClick={() => navigate("/about")} className={`nav-link ${location === "/about" ? "text-blue-600" : "text-gray-600"}`}>
                About
              </Link>
              <Link href="/contact" onClick={() => navigate("/contact")} className={`nav-link ${location === "/contact" ? "text-blue-600" : "text-gray-600"}`}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}