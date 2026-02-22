import {
  Code2,
  Zap,
  Database,
  BarChart3,
  Smartphone,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Clean Code Architecture",
    desc: "Well-structured, maintainable codebase following best practices.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    desc: "Fast-loading, optimized UIs with minimal bundle sizes.",
  },
  {
    icon: Database,
    title: "Scalable Backend Integration",
    desc: "Seamless Supabase integration for auth, storage & real-time data.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Dashboards",
    desc: "Data-driven dashboards with charts, filters and actionable insights.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design First",
    desc: "Mobile-first approach ensuring pixel-perfect on every device.",
  },
];

const WhyMeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Why Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Why Work With Me
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-card border-glow rounded-xl p-6 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
