import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Generator",
    description: "AI-powered portfolio website generator with customizable themes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    tags: ["Next.js", "OpenAI", "Prisma"],
    link: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking with interactive maps and forecasts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=450&fit=crop",
    tags: ["React", "Weather API", "Charts.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Social Media Analytics",
    description: "Comprehensive analytics dashboard for social media performance tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    tags: ["React", "D3.js", "Express"],
    link: "#",
    github: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness app with workout plans and progress tracking.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=450&fit=crop",
    tags: ["React Native", "Redux", "Node.js"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/5 rounded-full blur-[80px] sm:blur-[100px] -translate-y-1/2 pointer-events-none animate-blob" />

      <div className="container mx-auto relative z-10">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
