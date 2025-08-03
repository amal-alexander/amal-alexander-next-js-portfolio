import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = [];
    const colors = ["hsl(195, 100%, 50%)", "hsl(258, 90%, 66%)", "hsl(158, 64%, 52%)"];
    
    for (let i = 0; i < 9; i++) {
      initialParticles.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 20,
        color: colors[i % colors.length]
      });
    }
    
    setParticles(initialParticles);

    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticle: Particle = {
          id: Date.now(),
          left: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 10 + 10,
          delay: 0,
          color: colors[Math.floor(Math.random() * colors.length)]
        };
        
        // Keep only recent particles
        const filtered = prev.filter(p => Date.now() - p.id < 25000);
        return [...filtered, newParticle];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size * 4}px`,
            height: `${particle.size * 4}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`
          }}
        />
      ))}
    </div>
  );
}
