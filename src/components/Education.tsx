import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="group relative max-w-4xl mx-auto p-8 md:p-10 bg-card/60 backdrop-blur-sm rounded-3xl border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
            {/* Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              {/* College Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-border/50 group-hover:border-primary/40 transition-colors duration-300 shadow-lg">
                  <img 
                    src="/college.png" 
                    alt="Algonquin College" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4 border border-border/30">
                  <Calendar size={14} className="text-primary" />
                  Sep 2023 – Apr 2025
                </div>

                <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                  <div className="p-2 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <GraduationCap size={22} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                    Algonquin College
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Diploma in Mobile Application Design and Development
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
