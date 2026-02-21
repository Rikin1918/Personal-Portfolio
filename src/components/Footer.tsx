import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative pt-16 pb-8 bg-secondary/50">
      {/* Gradient Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold font-heading mb-3">
              Rikin<span className="text-primary">.</span>
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Full-Stack Developer passionate about building impactful, scalable, and user-centric applications.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/pate1355" 
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rikin-k-patel-412a82301/" 
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:rikinpatel17902@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-xl bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright  */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} Rikin K Patel. All rights reserved.
          </p>
          <a 
            href="#hero" 
            className="p-2.5 rounded-xl bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
