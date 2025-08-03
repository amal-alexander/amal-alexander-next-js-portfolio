import { UserCheck, Cog, Eye, Layers, ChevronRight, Mail, Linkedin, Github } from "lucide-react";
import AnimatedBorder from "@/components/ui/animated-border";
import GlassCard from "@/components/ui/glass-card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedBorder>
            <GlassCard>
              <h3 className="text-2xl font-bold text-primary-blue mb-6">
                <UserCheck className="inline mr-3" />
                Tech Visionary
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate technology expert specializing in cutting-edge automation solutions, 
                advanced computer vision systems, and modern web development stacks. 
                With extensive experience in AI/ML technologies, I transform complex business 
                challenges into elegant, scalable digital solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                My expertise spans SERP data pipelines, API integrations, DOM visual diff tools, 
                and spaCy-powered NLP systems. I'm passionate about creating no-code/low-code 
                solutions that empower businesses to achieve their digital transformation goals.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary-purple" size={20} />
                  <span>amalalex95@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="text-primary-blue" size={20} />
                  <a href="https://www.linkedin.com/in/amal-alexander-305780131/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="text-primary-green" size={20} />
                  <a href="https://github.com/amal-alexander" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green transition-colors">
                    GitHub Portfolio
                  </a>
                </div>
              </div>
            </GlassCard>
          </AnimatedBorder>
          
          <div className="space-y-6">
            {/* Expertise Areas */}
            <AnimatedBorder glowColor="purple" className="animate-border-glow">
              <GlassCard>
                <h4 className="text-xl font-semibold text-primary-purple mb-4">
                  <Cog className="inline mr-2" />
                  Automation Excellence
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li><ChevronRight className="inline text-primary-blue mr-2" size={16} />SERP Data Pipelines</li>
                  <li><ChevronRight className="inline text-primary-blue mr-2" size={16} />API Integrations</li>
                  <li><ChevronRight className="inline text-primary-blue mr-2" size={16} />No-Code/Low-Code Solutions</li>
                </ul>
              </GlassCard>
            </AnimatedBorder>
            
            <AnimatedBorder glowColor="green" className="animate-border-glow" style={{animationDelay: "-1s"}}>
              <GlassCard>
                <h4 className="text-xl font-semibold text-primary-green mb-4">
                  <Eye className="inline mr-2" />
                  Computer Vision
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li><ChevronRight className="inline text-primary-green mr-2" size={16} />DOM Visual Diff Tools</li>
                  <li><ChevronRight className="inline text-primary-green mr-2" size={16} />Content Analyzers</li>
                  <li><ChevronRight className="inline text-primary-green mr-2" size={16} />Above-the-Fold Analysis</li>
                </ul>
              </GlassCard>
            </AnimatedBorder>
            
            <AnimatedBorder glowColor="pink" className="animate-border-glow" style={{animationDelay: "-2s"}}>
              <GlassCard>
                <h4 className="text-xl font-semibold text-primary-pink mb-4">
                  <Layers className="inline mr-2" />
                  Modern Tech Stacks
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li><ChevronRight className="inline text-primary-pink mr-2" size={16} />React/Vite/Next.js Frontend</li>
                  <li><ChevronRight className="inline text-primary-pink mr-2" size={16} />Python/FastAPI/Flask Backend</li>
                  <li><ChevronRight className="inline text-primary-pink mr-2" size={16} />SERP API/Puppeteer Tools</li>
                </ul>
              </GlassCard>
            </AnimatedBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
