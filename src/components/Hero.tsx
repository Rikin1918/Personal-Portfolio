import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-20 relative overflow-hidden">
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
              Hello, my name is
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-5">
              Rikin K{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Patel
              </span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-lg md:text-xl text-muted-foreground font-medium mb-6 max-w-lg leading-relaxed">
              Innovative Full-Stack Developer | Passionate Problem Solver | Cloud and API Enthusiast
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-10 text-muted-foreground/90 max-w-lg leading-relaxed">
              A dedicated software developer with a passion for building impactful and scalable solutions. 
              Currently pursuing a diploma in Computer Application Design and Development at Algonquin College, 
              I specialize in creating robust full-stack applications with modern technologies.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8 hover:-translate-y-0.5 transition-all duration-300">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="ghost" size="lg" asChild className="rounded-full px-8 hover:-translate-y-0.5 transition-all duration-300">
                <a href="/Rikin_K_Patel_Resume.docx" download={true}>
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl animate-pulse" />
              
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary to-accent/50 p-1 shadow-2xl shadow-primary/20">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent select-none">
                    RP
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
