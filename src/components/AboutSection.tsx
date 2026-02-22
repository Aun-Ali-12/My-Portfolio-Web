const skills = [
  "ReactJS",
  "Supabase",
  "TailwindCSS",
  "REST APIs",
  "State Management",
  "Authentication Systems",
  "Admin Dashboards",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Aun Ali
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            ReactJS developer focused on scalable frontend architecture, state
            management, analytics dashboards and full-stack integration using
            Supabase. I create performant, clean-coded applications that
            deliver real business value.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill}
              className="bg-card border-glow rounded-xl px-4 py-4 text-center card-hover"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="text-sm font-medium text-foreground">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
