import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeSwitcher />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
