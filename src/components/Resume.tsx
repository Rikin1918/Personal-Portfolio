import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Calendar } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experienceData = [
  {
    role: "Full-Stack Developer",
    company: "Gujarat Tech Solutions",
    type: "Contract",
    duration: "January 2022 – September 2022",
    highlights: [
      "Distributed Logic: Designed secure backend services using Go and Node.js, integrating complex third-party APIs for financial and e-commerce platforms.",
      "DevOps Integration: Automated deployment workflows using Docker, reducing environment configuration time and improving consistency across development and production stages.",
    ],
    icon: Briefcase,
  },
  {
    role: "Intermediate Software Developer",
    company: "Budventure Technologies",
    type: "Permanent, Full-Time",
    duration: "January 2021 – December 2021",
    highlights: [
      "Full-Stack Delivery: Developed and maintained enterprise-scale web applications using C# and modern JavaScript frameworks, ensuring high availability for logistics and distribution clients.",
      "Architecture & Scaling: Contributed to the migration of monolithic legacy services into scalable microservices, focusing on service decoupling and high-transaction reliability.",
      "Frontend Excellence: Engineered responsive user interfaces in Angular, implementing complex state management and reactive programming patterns to improve user engagement.",
      "Collaboration: Partnered with cross-functional teams to translate business requirements into technical roadmaps, consistently meeting sprint deadlines in a fast-paced environment.",
    ],
    icon: Briefcase,
  },
  {
    role: "Software Developer Internship",
    company: "Shubham Metals",
    type: "Permanent, Full-Time",
    duration: "June 2020 – December 2020",
    highlights: [
      "Developed Python and C++ scripts to automate inventory tracking and data processing, reducing manual workload for the trading operations team.",
      "Built internal software tools that streamlined coordination between the Ahmedabad office and field teams in a hybrid work environment.",
      "Supported database optimization and reporting initiatives, helping leadership access accurate operational data for faster decision-making.",
    ],
    icon: Briefcase,
  },
];

const educationData = [
  {
    role: "Diploma in Computer Application Design and Development",
    company: "Algonquin College",
    date: "Sep 2023 - Apr 2025",
    description: [
      "Focusing on full-stack development, cloud services, AI/ML applications, and modern software architecture.",
      "Key Coursework: Web Application Development, Database Design & Implementation, Cloud Computing Solutions, Mobile Development, Software Project Management.",
    ],
    icon: GraduationCap,
  },
  {
    role: "Online Certifications",
    company: "Self-Paced Learning",
    date: "2022 - Present",
    description: [
      "AWS Cloud Practitioner",
      "MongoDB for JavaScript Developers",
      "React Advanced Patterns",
      "Modern JavaScript Development",
    ],
    icon: GraduationCap,
  },
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
    <section
      id="resume"
      className="py-24 relative overflow-hidden bg-background"
    >
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
              My professional journey and academic qualifications that have
              shaped my technical foundation.
            </p>
          </div>
          <Button
            asChild
            className="rounded-full px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <a href="/Field_Resume_updated.pdf" download={true}>
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
                <Briefcase className="mr-3 text-primary" /> Professional
                Experience
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
                <GraduationCap className="mr-3 text-primary" /> Education &
                Certs
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

function TimelineItem({
  item,
  index,
  align,
}: {
  item: any;
  index: number;
  align: "left" | "right";
}) {
  const Icon = item.icon;
  const isLeft = align === "left";

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center w-full mb-12 md:mb-24 ${isLeft ? "justify-start" : "justify-end"}`}
    >
      {/* Timeline Node (Hidden on mobile) */}
      <div className="absolute left-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-background border-4 border-primary rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary),0.5)] z-20">
        <Icon size={20} className="text-primary" />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          type: "spring",
          stiffness: 100,
        }}
        className={`w-full md:w-[45%] ${isLeft ? "md:pr-12 lg:pr-16 text-left origin-right" : "md:pl-12 lg:pl-16 text-left origin-left"}`}
      >
        <div className="group relative p-8 bg-card/60 backdrop-blur-md rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
          {/* Connecting Line from Card to Node (Hidden on mobile) */}
          <div
            className={`absolute top-1/2 -mt-px w-12 lg:w-16 h-px bg-border/50 hidden md:block ${isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`}
          />

          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium shadow-sm border border-border/30">
                <Calendar size={14} className="mr-2 text-primary" />{" "}
                {item.duration || item.date}
              </span>
              {item.type && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/30">
                  {item.type}
                </span>
              )}
            </div>

            <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight mb-2">
              {item.role}
            </h4>
            <h5 className="text-lg font-medium text-muted-foreground mb-6">
              {item.company}
            </h5>

            <ul className="space-y-3">
              {(item.highlights || item.description || []).map(
                (desc: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start text-muted-foreground/90 leading-relaxed"
                  >
                    <span className="min-w-1.5 h-1.5 rounded-full bg-primary/60 mt-2.5 mr-3 flex-shrink-0" />
                    <span>{desc}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
