import { motion } from 'framer-motion';
import { Award, Lock, Clock } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="text-lg text-muted-foreground">
            Professional certifications to validate my expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative text-left p-12 md:p-16 bg-card/60 backdrop-blur-sm rounded-3xl border border-dashed border-border hover:border-primary/30 transition-all duration-300">
            {/* Decorative Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl pointer-events-none" />
            
            <div className="relative z-10">
              {/* Animated Icon */}
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="inline-flex mb-6"
              >
                <div className="relative">
                  <div className="p-5 bg-primary/10 text-primary rounded-2xl">
                    <Award size={40} />
                  </div>
                  <div className="absolute -top-1 -right-1 p-1.5 bg-muted rounded-full border-2 border-background">
                    <Lock size={12} className="text-muted-foreground" />
                  </div>
                </div>
              </motion.div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5">
                <Clock size={14} /> Coming Soon
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3 uppercase tracking-tight">
                Certifications In Progress
              </h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                I'm currently working towards industry-recognized certifications. 
                Check back soon to see my latest achievements and credentials!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
