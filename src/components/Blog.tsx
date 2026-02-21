import { motion } from 'framer-motion';
import { Calendar, ArrowRight, PenLine } from 'lucide-react';

const articles = [
  {
    title: 'Building Scalable REST APIs with Node.js and Express',
    excerpt: 'A comprehensive guide to structuring your Express.js backend for production-grade scalability with best practices.',
    date: 'Feb 2025',
    tag: 'Backend',
    readTime: '8 min read',
    href: '#',
  },
  {
    title: 'From React to React Native: What I Learned',
    excerpt: 'Key differences and lessons I picked up transitioning from web development to mobile app development.',
    date: 'Jan 2025',
    tag: 'Mobile',
    readTime: '6 min read',
    href: '#',
  },
  {
    title: 'Why I Chose Flutter for My Side Projects',
    excerpt: 'Exploring the advantages of Flutter\'s single-codebase approach for building cross-platform applications.',
    date: 'Dec 2024',
    tag: 'Flutter',
    readTime: '5 min read',
    href: '#',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
            <PenLine size={16} /> Thoughts & Insights
          </div>
          <h2 className="section-title">Blog & Articles</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            I occasionally write about technologies I'm working with, lessons learned, and development tips.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
        >
          {articles.map((article) => (
            <motion.a
              key={article.title}
              href={article.href}
              onClick={(e) => e.preventDefault()}
              variants={itemVariants}
              className="group flex flex-col p-8 bg-card/60 backdrop-blur-sm rounded-3xl border border-border/50 hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                  {article.tag}
                </span>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-5 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  {article.date}
                </div>
                <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
