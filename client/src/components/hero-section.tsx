import { Download, Rocket, Brain, Eye } from "lucide-react";
import { FaPython, FaReact } from "react-icons/fa";
import AnimatedBorder from "@/components/ui/animated-border";
import GlassCard from "@/components/ui/glass-card";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative circuit-bg pt-20">
      <div className="container mx-auto px-6 text-center z-10">
        <AnimatedBorder className="animate-float">
          <GlassCard>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse-neon">
              <span className="block">AMAL</span>
              <span className="block text-primary-purple">ALEXANDER</span>
            </h1>
            
            <div className="text-xl md:text-2xl mb-8 font-mono">
              <span className="border-r-2 border-primary-blue animate-typing">
                Automation • LLMs • Modern Tech Stacks
              </span>
            </div>
            
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technology solutions specializing in AI-powered automation, advanced computer vision systems, 
              and modern web development stacks. Transforming complex problems into elegant digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={scrollToProjects}
                className="holo-border px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-primary-blue to-primary-purple hover:from-primary-purple hover:to-primary-green transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Rocket className="inline mr-2" size={20} />
                Explore Projects
              </button>
              
              <button className="border-2 border-primary-green px-8 py-4 rounded-lg font-semibold hover:bg-primary-green hover:text-dark-bg transition-all duration-300 transform hover:scale-105 animate-border-glow">
                <Download className="inline mr-2" size={20} />
                Download CV
              </button>
            </div>
          </GlassCard>
        </AnimatedBorder>
      </div>
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 text-4xl text-primary-blue animate-float opacity-20">
          <FaPython />
        </div>
        <div className="absolute top-40 right-20 text-3xl text-primary-purple animate-float opacity-20" style={{animationDelay: "-2s"}}>
          <FaReact />
        </div>
        <div className="absolute bottom-40 left-20 text-5xl text-primary-green animate-float opacity-20" style={{animationDelay: "-4s"}}>
          <Brain />
        </div>
        <div className="absolute bottom-32 right-10 text-3xl text-primary-pink animate-float opacity-20" style={{animationDelay: "-6s"}}>
          <Eye />
        </div>
      </div>
    </section>
  );
}
