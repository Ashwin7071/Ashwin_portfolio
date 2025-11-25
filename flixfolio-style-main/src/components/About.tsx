import { Code2, Palette, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Development",
    description: "Expert in React, TypeScript, Node.js, and modern web technologies.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful, intuitive interfaces with attention to detail.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed, scalability, and user experience.",
  },
];

export const About = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] sm:blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <h2 className="section-title">About Me</h2>

        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
            I'm a passionate developer with expertise in building modern web applications.
            With a keen eye for design and a love for clean code, I create digital experiences
            that users love.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed px-4">
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open source, or sharing knowledge with the dev community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="p-6 sm:p-8 text-center hover:shadow-[var(--shadow-glow)] transition-all duration-500 bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/30 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors">{skill.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
