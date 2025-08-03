import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

export default function GlassCard({ children, className, animated = false }: GlassCardProps) {
  return (
    <div className={cn(
      "glass rounded-2xl p-8",
      animated && "transition-all duration-500 hover:scale-105",
      className
    )}>
      {children}
    </div>
  );
}
