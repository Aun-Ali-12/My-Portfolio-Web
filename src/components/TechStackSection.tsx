import {
  Code2,
  Database,
  Palette,
  FileCode,
  BarChart3,
  GitBranch,
} from "lucide-react";

const techs = [
  { name: "ReactJS", icon: Code2 },
  { name: "Supabase", icon: Database },
  { name: "TailwindCSS", icon: Palette },
  { name: "JavaScript (ES6+)", icon: FileCode },
  { name: "Recharts", icon: BarChart3 },
  { name: "Git & GitHub", icon: GitBranch },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Tools I Work With
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-4xl mx-auto">
          {techs.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group bg-card border-glow rounded-xl p-6 flex flex-col items-center gap-3 card-hover text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon size={22} className="text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
