import { Laptop, Server, Brain } from "lucide-react";
import { FaReact, FaJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiFlask, SiPostgresql } from "react-icons/si";
import AnimatedBorder from "@/components/ui/animated-border";
import GlassCard from "@/components/ui/glass-card";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Laptop,
      color: "blue" as const,
      skills: [
        { name: "React", icon: FaReact, level: 90, color: "blue" },
        { name: "Next.js", icon: FaJs, level: 85, color: "purple" },
        { name: "Tailwind", icon: SiTailwindcss, level: 88, color: "green" },
        { name: "TypeScript", icon: FaJs, level: 82, color: "pink" }
      ]
    },
    {
      title: "Backend", 
      icon: Server,
      color: "purple" as const,
      skills: [
        { name: "Python", icon: FaPython, level: 95, color: "purple" },
        { name: "FastAPI", icon: SiFlask, level: 85, color: "green" },
        { name: "Flask", icon: SiFlask, level: 88, color: "pink" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80, color: "blue" }
      ]
    },
    {
      title: "AI/ML",
      icon: Brain,
      color: "green" as const,
      skills: [
        { name: "Computer Vision", icon: Brain, level: 92, color: "green" },
        { name: "NLP", icon: Brain, level: 88, color: "pink" },
        { name: "spaCy", icon: Brain, level: 85, color: "blue" },
        { name: "Automation", icon: Brain, level: 95, color: "purple" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            Tech Arsenal
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-pink to-primary-blue mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedBorder 
              key={category.title}
              glowColor={category.color}
              className="animate-border-glow"
              style={{animationDelay: `${categoryIndex * -1}s`}}
            >
              <GlassCard>
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-primary-${category.color} to-primary-purple flex items-center justify-center mx-auto mb-4`}>
                    <category.icon size={32} />
                  </div>
                  <h3 className={`text-2xl font-bold text-primary-${category.color}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="flex items-center">
                        <skill.icon className={`mr-2 text-primary-${skill.color}`} />
                        {skill.name}
                      </span>
                      <div className="w-20 h-2 bg-dark-tertiary rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-primary-${skill.color} to-primary-purple transition-all duration-1000`}
                          style={{width: `${skill.level}%`}}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
