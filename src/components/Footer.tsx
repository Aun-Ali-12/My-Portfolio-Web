const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span>
        © {new Date().getFullYear()} Aun Ali. All rights reserved.
      </span>
      <span>
        Built with <span className="text-primary">React</span> &{" "}
        <span className="text-primary">TailwindCSS</span>
      </span>
    </div>
  </footer>
);

export default Footer;
