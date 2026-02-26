import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  // {
  //   title: 'Job Board Website',
  //   description: 'A responsive job board platform featuring secure authentication, mobile-first design, employer dashboards, and intuitive search/filtering tools to streamline job listing management and discovery.',
  //   techStack: ['Next.js', 'Node.js', 'Express', 'Supabase'],
  //   imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
  //   githubUrl: '#',
  //   liveUrl: '#',
  // },
  {
    title: "Full-Stack RAG Chatbot",
    description:
      "A Retrieval-Augmented Generation application allowing users to upload and converse with multiple documents. Features real-time streaming chat with SSE and smart @mention system.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "Google Gemini API",
      "Tailwind CSS",
      "Multiple File Upload",
      "@File Mention System",
    ],
    imageUrl:
      "https://github.com/pate1355/rag-chat-bot/raw/main/site_ui_picture.png",
    githubUrl: "https://github.com/pate1355/rag-chat-bot.git",
    liveUrl: "https://rag-chats-bot.netlify.app/",
  },
  {
    title: "Smart Home Energy Monitor",
    description:
      "An AI-powered smart home energy monitoring application built with React, TypeScript, and a Node.js/MongoDB backend. This application simulates IoT device monitoring, provides real-time energy consumption visualization, and offers AI-generated recommendations for optimizing energy usage using Groq AI.",
    techStack: [
      "React",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Recharts",
      "Groq Api",
    ],
    imageUrl:
      "https://github.com/pate1355/Smart-Home-Energy-Monitor/raw/main/screencapture-smart-home-energy-monitor.png",
    githubUrl: "https://github.com/pate1355/Smart-Home-Energy-Monitor.git",
    liveUrl: "https://smart-home-energy-monitor.netlify.app/",
  },
  {
    title: "Prompt Improvise Engine",
    description:
      "Prompt Improvise is a modern, full-stack application designed to optimize and execute AI prompts using the Groq API. By leveraging powerful Large Language Models (LLMs), it assists users in refining their prompts for maximum token efficiency and effectiveness, ensuring better results from AI interactions.",
    techStack: [
      "Express.js",
      "React",
      "Groq Api",
      "Tailwind CSS",
      "Node.js",
      "Vite",
    ],
    imageUrl:
      "https://github.com/pate1355/prompt-improvisation-engine/raw/main/Screenshot_prompt_improvise.png",
    githubUrl: "https://github.com/pate1355/prompt-improvisation-engine.git",
    liveUrl: "https://prompt-improvisation-engine-plum.vercel.app/",
  },
  // {
  //   title: "GitHub User Search",
  //   description:
  //     "Android application that allows users to search and browse GitHub profiles with detailed user information.",
  //   techStack: ["Kotlin", "Retrofit", "GitHub API"],
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop",
  //   githubUrl: "#",
  // },
  // {
  //   title: "Giftr App",
  //   description:
  //     "Mobile application for managing gift ideas seamlessly, featuring robust offline storage capabilities.",
  //   techStack: ["React Native", "Context API", "AsyncStorage"],
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop",
  //   githubUrl: "#",
  // },
  // {
  //   title: "Movie Night Voting",
  //   description:
  //     "Interactive mobile app that helps groups decide on movies to watch using a swipe-based voting system.",
  //   techStack: ["Flutter", "Firebase", "TMDb API"],
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop",
  //   githubUrl: "#",
  //   liveUrl: "#",
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-secondary/10"
    >
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
              Here are some of my recent works. Each project was built to solve
              a specific problem, exploring different technologies and modern
              design patterns.
            </p>
          </div>
          <a
            href="https://github.com/pate1355?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-medium transition-colors whitespace-nowrap"
          >
            View all on GitHub <ExternalLink size={16} />
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-500"
    >
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/90 hover:bg-white text-black shadow-lg hover:scale-110 transition-all duration-200"
              aria-label="View GitHub Repository"
            >
              <Github size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:scale-110 transition-all duration-200"
              aria-label="View Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-secondary/70 hover:bg-primary/10 hover:text-primary transition-colors duration-200 text-xs font-medium px-2.5 py-1"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
