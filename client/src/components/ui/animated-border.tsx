import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "pink";
  animation?: "glow" | "hologram" | "none";
}

export default function AnimatedBorder({ 
  children, 
  className, 
  glowColor = "blue",
  animation = "glow"
}: AnimatedBorderProps) {
  const animationClass = animation === "glow" ? "animate-border-glow" 
    : animation === "hologram" ? "animate-hologram" 
    : "";
  
  const borderColorClass = {
    blue: "border-primary-blue",
    purple: "border-primary-purple", 
    green: "border-primary-green",
    pink: "border-primary-pink"
  }[glowColor];

  return (
    <div className={cn(
      "holo-border rounded-2xl border-2",
      borderColorClass,
      animationClass,
      className
    )}>
      {children}
    </div>
  );
}
