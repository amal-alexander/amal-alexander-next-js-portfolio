import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold neon-text mb-2">
              Amal Alexander
            </div>
            <p className="text-gray-400">
              Transforming ideas into digital reality
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors duration-300">
              <Linkedin size={32} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-purple transition-colors duration-300">
              <Github size={32} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-green transition-colors duration-300">
              <Mail size={32} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2024 Amal Alexander. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
