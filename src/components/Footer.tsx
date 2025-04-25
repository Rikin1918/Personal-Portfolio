
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary/50 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-bold font-heading">
              Rikin<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-foreground/70">
              © {year} Rikin K Patel. All rights reserved.
            </p>
          </div>
          
          <div>
            <div className="flex items-center space-x-3">
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()}
                className="p-2 rounded-full text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()}
                className="p-2 rounded-full text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:rikinpatel17902@gmail.com"
                className="p-2 rounded-full text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
