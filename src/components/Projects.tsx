
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Full-Stack Weather & Movie App',
    description: 'A comprehensive application providing weather forecasts alongside movie recommendations based on current conditions.',
    techStack: ['Next.js', 'Redis', 'Express.js', 'TMDB API', 'Edamam API'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop', // Weather radar/cloud aesthetic
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'CRAPR Job Portal',
    description: 'A secure job portal platform with comprehensive user authentication and profile management for tech careers.',
    techStack: ['MongoDB', 'Express.js', 'React', 'OAuth'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop', // Desk/Tech aesthetic
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'GitHub User Search',
    description: 'Android application that allows users to search and browse GitHub profiles with detailed user information.',
    techStack: ['Kotlin', 'Retrofit', 'GitHub API'],
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop', // GitHub code aesthetic
    githubUrl: '#',
  },
  {
    title: 'Giftr App',
    description: 'Mobile application for managing gift ideas seamlessly, featuring robust offline storage capabilities.',
    techStack: ['React Native', 'Context API', 'AsyncStorage'],
    imageUrl: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop', // Gift/Holiday aesthetic
    githubUrl: '#',
  },
  {
    title: 'Movie Night Voting',
    description: 'Interactive mobile app that helps groups decide on movies to watch using a swipe-based voting system.',
    techStack: ['Flutter', 'Firebase', 'TMDb API'],
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop', // Cinema aesthetic
    githubUrl: '#',
    liveUrl: '#',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-secondary/10">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="section-title mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              Here are some of my recent works. Each project was built to solve a specific problem, 
              exploring different technologies and modern design patterns.
            </p>
          </div>
          <a 
            href="https://github.com/Rikin1918" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-medium transition-colors whitespace-nowrap"
          >
            View all on GitHub <ExternalLink size={16} />
          </a>
        </motion.div>
        
        {/* Bento Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[360px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              // Make the first project span 2 columns and 2 rows on large screens
              className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
            >
              <ProjectCard project={project} isFeatured={index === 0} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, isFeatured }: { project: typeof projects[0]; isFeatured: boolean }) {
  return (
    <div className="group relative w-full h-full rounded-3xl overflow-hidden bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10">
        
        {/* Top-Right Links */}
        <div className="absolute top-6 right-6 flex gap-3 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-colors"
              onClick={(e) => e.preventDefault()}
              aria-label="GitHub Repository"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-colors"
              onClick={(e) => e.preventDefault()}
              aria-label="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <div>
          <h3 className={`font-bold mb-2 text-white group-hover:text-primary-100 transition-colors ${isFeatured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
            {project.title}
          </h3>
          
          <p className={`text-white/80 mb-6 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ${isFeatured ? 'text-lg sm:max-w-xl' : 'text-sm'}`}>
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-md font-medium px-3 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
