import { useState, FormEvent } from "react";
import { Send, Linkedin, Github, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    emailjs.send(
      "service_tagajpr",
      "template_kigoe3q",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "z_IYGEZ45p4EQfudO"
    )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Contact Me</h2>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-card border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-card border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-card border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-sm hover:glow-yellow transition-all duration-300"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>

          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://www.linkedin.com/in/aun-ali-094b002a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Aun-Ali-12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
