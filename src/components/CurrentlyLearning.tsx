import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';

const learningItems = [
  { name: 'Docker & Containerization', progress: 70, color: 'from-blue-500 to-cyan-400' },
  { name: 'AWS Cloud Architecture', progress: 55, color: 'from-orange-500 to-yellow-400' },
  { name: 'GraphQL & Apollo', progress: 40, color: 'from-pink-500 to-purple-400' },
  { name: 'System Design', progress: 45, color: 'from-green-500 to-emerald-400' },
  { name: 'TypeScript Advanced Patterns', progress: 65, color: 'from-blue-600 to-indigo-400' },
  { name: 'CI/CD Pipelines', progress: 50, color: 'from-red-500 to-orange-400' },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <div className="flex flex-col items-start justify-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles size={16} /> Always Growing
          </div>
          <h2 className="section-title">Currently Learning</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Technologies and concepts I'm actively exploring to expand my skill set and stay ahead of the curve.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
        >
          {learningItems.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="group p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <BookOpen size={18} />
                </div>
                <h4 className="font-semibold text-foreground">{item.name}</h4>
              </div>
              
              <div className="relative w-full h-2.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{item.progress}% progress</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
