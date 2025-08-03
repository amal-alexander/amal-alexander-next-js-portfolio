import { Route, Bot, MessageSquare, BarChart3, ExternalLink, Github } from "lucide-react";
import AnimatedBorder from "@/components/ui/animated-border";
import GlassCard from "@/components/ui/glass-card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Redirect Mapping",
      description: "Intelligent URL redirect mapping system using machine learning algorithms to automatically detect and optimize website redirect chains for better SEO performance.",
      icon: Route,
      technologies: ["Python", "Machine Learning", "SEO"],
      colors: ["blue", "purple", "green"] as const
    },
    {
      title: "DOM vs Bot Diff Checker", 
      description: "Advanced visual comparison tool that analyzes differences between human-rendered and bot-crawled versions of web pages to identify SEO and accessibility issues.",
      icon: Bot,
      technologies: ["JavaScript", "Computer Vision", "Puppeteer"],
      colors: ["purple", "green", "pink"] as const
    },
    {
      title: "Google NLP Clone",
      description: "Comprehensive natural language processing platform replicating Google's NLP capabilities using spaCy, with sentiment analysis, entity recognition, and text classification.",
      icon: MessageSquare,
      technologies: ["Python", "spaCy", "NLP"],
      colors: ["green", "pink", "blue"] as const
    },
    {
      title: "Above-the-Fold Analyzer",
      description: "Performance optimization tool that analyzes above-the-fold content across different devices and connection speeds to improve Core Web Vitals and user experience.",
      icon: BarChart3,
      technologies: ["React", "Performance", "Analytics"],
      colors: ["pink", "blue", "purple"] as const
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-green to-primary-pink mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedBorder key={project.title} className="group hover:scale-105 transition-all duration-500">
              <GlassCard>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-primary-${project.colors[0]} to-primary-${project.colors[1]} flex items-center justify-center mr-4`}>
                    <project.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 bg-primary-${project.colors[techIndex % 3]} bg-opacity-20 text-primary-${project.colors[techIndex % 3]} rounded-full text-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex-1 border border-primary-blue text-white py-2 px-4 rounded-lg hover:bg-primary-blue hover:text-dark-bg transition-all duration-300 font-semibold">
                    <ExternalLink className="inline mr-2" size={16} />
                    Live Demo
                  </button>
                  <button className="flex-1 border border-gray-400 text-white py-2 px-4 rounded-lg hover:border-primary-blue hover:text-primary-blue transition-all duration-300 font-semibold">
                    <Github className="inline mr-2" size={16} />
                    Code
                  </button>
                </div>
              </GlassCard>
            </AnimatedBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
