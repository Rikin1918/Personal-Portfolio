import { motion } from "framer-motion";
import { Code2, Rocket, Globe, Zap } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

const GITHUB_USERNAME = "pate1355";
const selfHostedUrl =
  "https://github-readme-stats-rikin-patels-projects-d70ac2ef.vercel.app/";

const highlights = [
  { icon: Code2, label: "Projects Built", value: "10+" },
  { icon: Globe, label: "Technologies", value: "20+" },
  { icon: Rocket, label: "Platforms", value: "Web · Mobile · Cloud" },
  { icon: Zap, label: "Focus", value: "Full-Stack" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an enthusiastic software developer who recently completed a
              diploma in Mobile Application Design and Development at Algonquin
              College (Sep 2023 – Apr 2025). Concentrating on creating robust
              and scalable software solutions, I combine creativity with
              technical skills to address complex challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have experience in full-stack development, object-oriented
              programming, cloud applications, distributed systems, and secure
              API integration. I excel in collaborative settings, applying my
              technical skills and problem-solving abilities to develop
              impactful applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In order to provide innovative solutions that satisfy contemporary
              development standards, I'm continuously honing my craft and
              keeping up with emerging technologies.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="group p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center"
                >
                  <div className="inline-flex p-3 bg-primary/10 text-primary rounded-xl mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <p className="text-xl font-bold text-foreground mb-1">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold font-heading mb-8 text-left">
            GitHub Activity
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* GitHub Stats Card */}
            <div className="group p-5 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex items-center justify-center">
              <img
                src={`${selfHostedUrl}api?username=${GITHUB_USERNAME}&show_icons=true&theme=default&hide_border=true&bg_color=00000000&title_color=0078FF&icon_color=0078FF&text_color=6B7280&ring_color=0078FF`}
                alt="GitHub Stats"
                className="w-full h-auto max-w-sm"
                loading="lazy"
              />
            </div>

            {/* Top Languages Card */}
            <div className="group p-5 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex items-center justify-center">
              <img
                src={`${selfHostedUrl}api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&bg_color=00000000&title_color=0078FF&text_color=6B7280`}
                alt="Top Languages"
                className="w-full h-auto max-w-sm"
                loading="lazy"
              />
            </div>

            {/* Streak Stats */}
            <div className="md:col-span-2 group p-5 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex items-center justify-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&hide_border=true&background=00000000&stroke=0078FF&ring=0078FF&fire=0078FF&currStreakLabel=0078FF&sideLabels=0078FF&currStreakNum=1F2937&sideNums=1F2937&dates=6B7280`}
                alt="GitHub Streak"
                className="w-full h-auto max-w-lg"
                loading="lazy"
              />
            </div>
            {/* Contribution Graph */}
            <div className="md:col-span-2 group p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex items-center justify-center overflow-x-auto">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                colorScheme="light"
                fontSize={12}
                blockSize={12}
                blockMargin={4}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
