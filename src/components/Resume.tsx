
import { Button } from '@/components/ui/button';
import { Download, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experienceData = [
  {
    role: "Software Developer Intern",
    company: "Tech Solutions Inc.",
    date: "May 2023 - Aug 2023",
    description: [
      "Developed and maintained RESTful APIs using Node.js and Express.",
      "Collaborated with the frontend team to integrate API endpoints with React components.",
      "Implemented automated testing using Jest to ensure code quality and reliability.",
      "Participated in daily stand-ups and sprint planning meetings within an Agile environment."
    ],
    icon: Briefcase
  },
  {
    role: "Frontend Developer",
    company: "WebCraft Studios",
    date: "Jan 2023 - Apr 2023",
    description: [
      "Designed and developed responsive UI components using React and Tailwind CSS.",
      "Improved website performance by implementing code splitting and lazy loading techniques.",
      "Collaborated with UX designers to implement user-friendly interfaces and interactions."
    ],
    icon: Briefcase
  }
];

const educationData = [
  {
    role: "Diploma in Computer Application Design and Development",
    company: "Algonquin College",
    date: "Sep 2023 - Apr 2025 (Expected)",
    description: [
      "Focusing on full-stack development, cloud services, and modern software architecture.",
      "Key Coursework: Web Application Development, Database Design & Implementation, Cloud Computing Solutions, Mobile Development, Software Project Management."
    ],
    icon: GraduationCap
  },
  {
    role: "Online Certifications",
    company: "Self-Paced Learning",
    date: "2022 - Present",
    description: [
      "AWS Cloud Practitioner",
      "MongoDB for JavaScript Developers",
      "React Advanced Patterns",
      "Modern JavaScript Development"
    ],
    icon: GraduationCap
  }
];

export default function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create an animated scroll line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between mb-20 gap-6 text-left"
        >
          <div className="w-full">
            <h2 className="section-title">Resume</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              My professional journey and academic qualifications that have shaped my technical foundation.
            </p>
          </div>
          <Button asChild className="rounded-full px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1">
            <a href="/Rikin_K_Patel_Resume.docx" download={true}>
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </Button>
        </motion.div>

        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
          {/* Central Animated Timeline Line (Hidden on mobile) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 hidden md:block -translate-x-1/2" />
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary to-transparent hidden md:block -translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-12 md:space-y-0">
            {/* Experience Section */}
            <div className="mb-12 md:mb-0">
              <h3 className="text-2xl font-bold mb-8 flex items-center md:hidden text-foreground">
                <Briefcase className="mr-3 text-primary" /> Professional Experience
              </h3>
              
              {experienceData.map((item, index) => (
                <TimelineItem 
                  key={index}
                  item={item} 
                  index={index} 
                  align="left" 
                />
              ))}
            </div>

            {/* Education Section */}
            <div className="pt-8 md:pt-32">
              <h3 className="text-2xl font-bold mb-8 flex items-center md:hidden text-foreground">
                <GraduationCap className="mr-3 text-primary" /> Education & Certs
              </h3>
              
              {educationData.map((item, index) => (
                <TimelineItem 
                  key={index}
                  item={item} 
                  index={index} 
                  align="right" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, align }: { item: any, index: number, align: 'left' | 'right' }) {
  const Icon = item.icon;
  const isLeft = align === 'left';
  
  return (
    <div className={`relative flex flex-col md:flex-row items-center w-full mb-12 md:mb-24 ${isLeft ? 'justify-start' : 'justify-end'}`}>
      
      {/* Timeline Node (Hidden on mobile) */}
      <div className="absolute left-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-background border-4 border-primary rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary),0.5)] z-20">
        <Icon size={20} className="text-primary" />
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
        className={`w-full md:w-[45%] ${isLeft ? 'md:pr-12 lg:pr-16 text-left origin-right' : 'md:pl-12 lg:pl-16 text-left origin-left'}`}
      >
        <div className="group relative p-8 bg-card/60 backdrop-blur-md rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
          
          {/* Connecting Line from Card to Node (Hidden on mobile) */}
          <div className={`absolute top-1/2 -mt-px w-12 lg:w-16 h-px bg-border/50 hidden md:block ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}`} />
          
          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4 shadow-sm border border-border/30">
              <Calendar size={14} className="mr-2 text-primary" /> {item.date}
            </span>
            
            <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight mb-2">
              {item.role}
            </h4>
            <h5 className="text-lg font-medium text-muted-foreground mb-6">
              {item.company}
            </h5>
            
            <ul className="space-y-3">
              {item.description.map((desc: string, i: number) => (
                <li key={i} className="flex items-start text-muted-foreground/90 leading-relaxed">
                  <span className="min-w-1.5 h-1.5 rounded-full bg-primary/60 mt-2.5 mr-3 flex-shrink-0" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
