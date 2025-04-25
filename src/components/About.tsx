
import { Card } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'C++', 'Python', 'Kotlin', 'Dart', 'JavaScript', 'C#']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Flutter', 'Tailwind CSS']
  },
  {
    title: 'Tools & Technologies',
    skills: ['Redis', 'Firebase', 'MongoDB', 'PostgreSQL', 'Render', 'Vercel', 'GitHub', 'Postman']
  },
  {
    title: 'Soft Skills',
    skills: ['Teamwork', 'Communication', 'Adaptability', 'Creative Problem-Solving']
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-4">
              I'm a passionate software developer currently pursuing a diploma in Computer Application Design and 
              Development at Algonquin College (Sep 2023 – Apr 2025). With a focus on building robust and scalable software 
              solutions, I blend creativity with technical expertise to solve complex problems.
            </p>
            <p className="text-lg mb-4">
              My experience spans full-stack development, object-oriented programming, cloud-deployed applications, 
              distributed systems, and secure API integration. I thrive in collaborative environments where I can apply my 
              technical knowledge and problem-solving abilities to create impactful applications.
            </p>
            <p className="text-lg">
              I'm constantly expanding my skills and staying updated with the latest technologies to deliver 
              cutting-edge solutions that meet modern development standards.
            </p>
          </div>
          
          <div>
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="mb-4">
                <h4 className="font-medium">Algonquin College</h4>
                <p className="text-sm text-foreground/70">Diploma in Computer Application Design and Development</p>
                <p className="text-sm text-foreground/70">Sep 2023 – Apr 2025</p>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.title} className="p-6 hover:shadow-md transition-shadow">
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
      </div>
    </section>
  );
}
