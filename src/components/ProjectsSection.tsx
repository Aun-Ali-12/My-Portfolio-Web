import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";


interface Project {
  url: string
  title: string;
  description: string;
  features: string[];
  tech: string[];
  color: string;
  liveUrl: string
}

const projects: Project[] = [
  {
    url: "https://github.com/Aun-Ali-12/React-Ecommerce-Web",
    title: "Ecommerce Web App",
    description:
      "Full-stack ecommerce platform with admin analytics dashboard, product management and order tracking.",
    features: [
      "Login/Signup Authentication",
      "Cart system with Supabase",
      "Product filtering & pagination",
      "Order Management System",
      "Admin Panel (CRUD Products)",
      "Analytics Dashboard (Charts & Stats)",
      "Filter by Today, Yesterday, Month",
    ],
    tech: ["React", "Supabase", "TailwindCSS", "Recharts"],
    color: "from-primary/20 to-primary/5",
    liveUrl: "https://6998aa8b04d1237c5056f1d7--ecomwebbb.netlify.app/",
  },
  {
    url: "https://github.com/Aun-Ali-12/React-Post-App",
    title: "Blog App",
    description:
      "Full-featured blogging platform with user authentication and profile management.",
    features: [
      "User authentication",
      "Add/Edit/Delete Posts",
      "Profile & Settings page",
      "Time-based post tracking",
      "Feed page",
    ],
    tech: ["React", "Supabase", "TailwindCSS"],
    color: "from-primary/15 to-transparent",
    liveUrl: "aun-ali-12.github.io/React-Post-App/",
  },
  {
    url: "https://github.com/Aun-Ali-12/React-Weather-App",
    title: "Weather App",
    description:
      "Beautiful weather application with 3-hour forecast for the next 24 hours.",
    features: [
      "3-hour forecast (24h)",
      "Clean responsive UI",
      "API integration",
      "Location search",
    ],
    tech: ["React", "REST API", "TailwindCSS"],
    color: "from-primary/10 to-transparent",
    liveUrl: "https://aun-ali-12.github.io/React-Weather-App/",
  },
  {
    url: "https://github.com/Aun-Ali-12/Todo-App-in-React-with-supabase",
    title: "Todo App with Supabase",
    description:
      "Real-time todo application with persistent storage and live updates.",
    features: [
      "CRUD operations",
      "Real-time updates",
      "Persistent storage",
      "Clean minimal UI",
    ],
    tech: ["React", "Supabase", "TailwindCSS"],
    color: "from-primary/15 to-primary/5",
    liveUrl: "https://aun-ali-12.github.io/Todo-App-in-React-with-supabase/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border-glow rounded-2xl overflow-hidden card-hover"
            >
              {/* Image placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <span className="text-2xl font-bold text-primary/60 group-hover:text-primary transition-colors duration-300">
                  {project.title.split(" ")[0]}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {project.features.slice(0, 4).map((f) => (
                    <li
                      key={f}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                  {project.features.length > 4 && (
                    <li className="text-xs text-primary">
                      +{project.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold py-2.5 rounded-lg hover:glow-yellow-sm transition-all duration-200">
                    <ExternalLink size={13} />
                    <Link to={project.liveUrl} target="_">Live Demo</Link>
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 border border-border text-foreground text-xs font-semibold py-2.5 rounded-lg hover:border-primary/40 hover:text-primary transition-all duration-200">
                    <Github size={13} />
                    <Link to={project.url} target="_">GitHub</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
