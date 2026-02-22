import { motion } from 'framer-motion';
import { Calendar, ArrowRight, PenLine } from 'lucide-react';

const articles = [
  {
    title: 'How AI is Changing App Development',
    excerpt: 'AI enables apps to simulate human intelligence by learning from user data and adapting their behaviour. This has evolved apps from static tools into dynamic, personalized experiences.',
    date: 'Nov 2025',
    tag: 'AI',
    readTime: '2 min read',
    href: 'https://medium.com/@rikinpatel17902/how-ai-is-changing-app-development-8ff6370ff433',
  },
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
          className="text-left mb-12 md:mb-16"
        >
          <div className="flex flex-col items-start justify-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <PenLine size={14} className="sm:w-4 sm:h-4" /> Thoughts & Insights
            </div>
            <h2 className="section-title">Blog & Articles</h2>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground mt-2">
            I occasionally write about technologies I'm working with, lessons learned, and development tips.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
        >
          {articles.map((article) => (
            <motion.a
              key={article.title}
              href={article.href}
              target={article.href !== '#' ? '_blank' : undefined}
              rel={article.href !== '#' ? 'noreferrer' : undefined}
              onClick={article.href === '#' ? (e) => e.preventDefault() : undefined}
              variants={itemVariants}
              className="group flex flex-col p-5 sm:p-6 bg-card/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-border/50 hover:border-primary/40 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 min-h-[280px]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 sm:px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                  {article.tag}
                </span>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{article.readTime}</span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                  <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                  {article.date}
                </div>
                <span className="text-primary text-xs sm:text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
