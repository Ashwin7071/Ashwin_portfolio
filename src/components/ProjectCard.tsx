import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState, useRef, MouseEvent } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export const ProjectCard = ({ title, description, image, tags, link, github }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10 deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="h-full perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <Card
        className="project-card h-full flex flex-col transform-style-3d transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.02 : 1})`,
        }}
      >
        <div className="relative overflow-hidden group h-48">
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
        </div>

        <CardHeader className="relative z-10">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardTitle className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-secondary/50 text-xs font-medium rounded-full border border-white/5 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary/80 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-between relative z-10">
          <CardDescription className="text-base text-muted-foreground mb-6 line-clamp-3">
            {description}
          </CardDescription>

          <div className="flex gap-4 mt-auto">
            <Button
              asChild
              size="sm"
              className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
            {github && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-white/10 hover:bg-white/5 hover:text-white transition-all duration-300"
              >
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
