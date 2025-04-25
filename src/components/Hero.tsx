
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-medium mb-3 animate-fade-in">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-4 opacity-0 animate-fade-in-delay">
              Rikin K Patel
            </h1>
            <h2 className="text-xl md:text-2xl text-foreground/70 font-medium mb-6 opacity-0 animate-fade-in-delay-2">
              Innovative Full-Stack Developer | Passionate Problem Solver | Cloud and API Enthusiast
            </h2>
            <p className="mb-8 text-foreground/80 max-w-lg opacity-0 animate-fade-in-delay-2">
              A dedicated software developer with a passion for building impactful and scalable solutions. 
              Currently pursuing a diploma in Computer Application Design and Development at Algonquin College, 
              I specialize in creating robust full-stack applications with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-2">
              <Button asChild className="group">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary to-accent/50 relative overflow-hidden">
              {/* Here you would ideally place an actual profile image */}
              <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center text-5xl font-bold text-primary">
                RP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
