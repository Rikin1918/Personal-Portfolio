import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Cloud, GitBranch, Users, Layout, Database, Wrench, Box, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    className: "lg:col-span-2",
    skills: ["JavaScript", "TypeScript", "Dart", "C#", "Java", "C++", "SwiftUI", "Kotlin", "C", "HTML", "CSS", "Python", "GO", "SQL"],
  },
  {
    title: "Back-End Development",
    icon: Server,
    className: "",
    skills: ["NodeJS", "ExpressJS", "Django", "Flask", "Spring Boot", ".Net", "FastAPI", "RestAPI", "GraphQL"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    className: "",
    skills: ["React Native", "Flutter", "IOS (SwiftUI)", "Android Studio (Kotlin, Java)", ".Net MAUI"],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    className: "",
    skills: ["AWS", "Azure", "Google Cloud", "Render", "Netlify", "Vercel", "GitHub"],
  },
  {
    title: "CI/CD",
    icon: GitBranch,
    className: "",
    skills: ["Jenkins", "GitHub Actions"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    className: "",
    skills: ["Problem-Solving", "Time Management", "Teamwork & Communication", "Adaptability"],
  },
  {
    title: "Front-End Development",
    icon: Layout,
    className: "",
    skills: ["ReactJS", "NextJS", "Angular", "Vue.js", "Svelte", "Tailwind CSS"],
  },
  {
    title: "Database",
    icon: Database,
    className: "",
    skills: ["AWS (RDS, Aurora, DynamoDB)", "Azure", "MongoDB", "Firebase", "Supabase", "PostgreSQL", "SQL", "Redis"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    className: "lg:col-span-2",
    skills: ["Git", "Figma", "Adobe Illustrator", "Visual Studio Code", "JetBrains Tools", "Xcode", "Android Studio", "Postman", "LM Studio", "Ollama"],
  },
  {
    title: "Containerization Technology",
    icon: Box,
    className: "",
    skills: ["Docker", "Kubernetes"],
  },
  {
    title: "AI",
    icon: Brain,
    className: "",
    skills: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Llama", "Hugging Face", "Local Models"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`flex ${category.className || ""}`}
              >
                <Card className="p-6 w-full flex flex-col border border-border/60 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 bg-card hover:-translate-y-1 group relative overflow-hidden">
                  {/* Background Icon Watermark */}
                  <Icon className="absolute -bottom-6 -right-6 w-32 h-32 text-primary/[0.03] group-hover:text-primary/[0.08] group-hover:scale-110 transition-all duration-500 z-0 pointer-events-none" />

                  <div className="flex items-center gap-3 mb-8 relative z-10">
                    <div className="p-2.5 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-sm">
                      <Icon size={22} className="stroke-[2.5px]" />
                    </div>
                    <h4 className="font-semibold text-lg tracking-tight">
                      {category.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-md bg-secondary/70 text-secondary-foreground text-sm font-medium border border-border/40 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
