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
          <div className="relative w-16 h-16 group cursor-pointer">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue via-primary-purple to-primary-green opacity-60 blur-md animate-pulse-neon group-hover:opacity-80 transition-all duration-500"></div>
            
            {/* Inner glow ring */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-r from-primary-green via-primary-pink to-primary-blue opacity-40 blur-sm animate-border-glow"></div>
            
            {/* Main logo container */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary-blue/20 via-primary-purple/30 to-primary-green/20 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1 left-1 w-2 h-2 bg-primary-blue rounded-full animate-float"></div>
                <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-primary-pink rounded-full animate-float" style={{animationDelay: '-1s'}}></div>
                <div className="absolute top-2 right-2 w-1 h-1 bg-primary-green rounded-full animate-float" style={{animationDelay: '-2s'}}></div>
              </div>
              
              {/* Creative AA Design */}
              <div className="relative z-10 flex items-center justify-center text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-purple drop-shadow-lg filter">A</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-pink drop-shadow-lg filter ml-0.5">A</span>
                
                {/* Glowing text shadow effect */}
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                  <span className="text-primary-blue opacity-50 blur-sm">A</span>
                  <span className="text-primary-pink opacity-50 blur-sm ml-0.5">A</span>
                </div>
              </div>
              
              {/* Holographic overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60 animate-hologram"></div>
            </div>
            
            {/* Particle effects */}
            <div className="absolute -top-1 -left-1 w-1 h-1 bg-primary-blue rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-1 -right-1 w-0.5 h-0.5 bg-primary-pink rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-0 -right-1 w-0.5 h-0.5 bg-primary-green rounded-full animate-ping opacity-75" style={{animationDelay: '2s'}}></div>
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
