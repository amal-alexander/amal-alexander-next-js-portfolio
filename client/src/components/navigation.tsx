import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", color: "text-primary-blue" },
    { href: "#about", label: "About", color: "text-primary-purple" },
    { href: "#projects", label: "Projects", color: "text-primary-green" },
    { href: "#skills", label: "Skills", color: "text-primary-pink" },
    { href: "#contact", label: "Contact", color: "text-primary-yellow" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue via-primary-purple to-primary-green flex items-center justify-center font-bold text-lg text-white animate-pulse-neon">
            AA
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative group hover:${item.color} transition-colors duration-300`}
              >
                <span>{item.label}</span>
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-purple group-hover:w-full transition-all duration-300`}></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-2 hover:${item.color} transition-colors duration-300`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
