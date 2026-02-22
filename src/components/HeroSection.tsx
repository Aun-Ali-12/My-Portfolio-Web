import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_15%/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_15%/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-6 border border-primary/20 px-4 py-1.5 rounded-full">
            ReactJS Frontend Developer
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 animate-fade-in-up [animation-delay:0.1s]">
          I Build Modern
          <br />
          <span className="text-gradient">React Applications</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up [animation-delay:0.2s]">
          Building scalable, responsive and data-driven web applications with
          React, Supabase and TailwindCSS.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:0.3s]">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:glow-yellow transition-all duration-300"
          >
            View Projects
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all duration-300"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
