import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[300px] sm:h-[400px] lg:h-[500px] bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] opacity-50 pointer-events-none animate-blob" />
      <div className="absolute bottom-0 right-0 w-[500px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[500px] lg:h-[600px] bg-secondary/30 rounded-full blur-[80px] sm:blur-[100px] opacity-30 pointer-events-none animate-blob" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 sm:px-6 z-10 animate-fade-in relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-10 animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <img
                src="./images/Gemini_Generated_Image_d5u6apd5u6apd5u6.png"
                alt="Ashwin_mishra"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background relative z-10 shadow-2xl animate-float"
                style={{ animationDelay: "0.05s" }}
              />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight px-4">
              Hi, I'm <span className="gradient-text">Ashwin Mishra</span>
            </h1>
          </div>

          <div className="flex justify-center mb-10 sm:mb-12 px-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-mono max-w-full overflow-hidden">
              <span className="hidden sm:inline animate-typing whitespace-nowrap border-r-4 border-primary pr-2">
                Full Stack Developer & Creative Designer
              </span>
              <span className="sm:hidden">
                Full Stack Developer & Creative Designer
              </span>
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 sm:mb-16 animate-fade-in leading-relaxed px-4" style={{ animationDelay: "0.4s" }}>
            Crafting immersive digital experiences with modern technologies.
            Passionate about clean code, beautiful interfaces, and solving complex problems.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 animate-fade-in px-4" style={{ animationDelay: "0.6s" }}>
            <Button className="btn-hero group text-base sm:text-lg h-auto py-4 sm:py-6 px-8 sm:px-10 relative overflow-hidden w-full sm:w-auto">
              <div className="absolute inset-0 animate-shimmer" />
              <span className="relative z-10 flex items-center justify-center">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button variant="outline" className="h-auto py-4 sm:py-6 px-8 sm:px-10 text-base sm:text-lg border-white/10 hover:bg-white/5 hover:text-white transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6 sm:gap-8 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300">
              <Github className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300">
              <Linkedin className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-300">
              <Mail className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
