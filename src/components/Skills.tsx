import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Dart",
      "C#",
      "Java",
      "C++",
      "SwiftUI",
      "Kotlin",
      "C",
      "HTML",
      "CSS",
      "Python",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Flutter",
      "Tailwind CSS",
    ],
  },
  {
    title: "Cloud & Development",
    skills: ["Firebase", "Render", "Vercel"],
  },
  {
    title: "Databases",
    skills: ["Redis", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "GitHub",
      "Postman",
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Visual Studio",
      "Visual Studio Code",
      "Android Studio",
      "Xcode",
      "JetBrains Tools",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Teamwork",
      "Communication",
      "Adaptability",
      "Creative Problem-Solving",
      "Time management",
      "Willingness",
    ],
  },
];

export default function Education() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold mb-3">{category.title}</h4>
              <div className="flex flex-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
