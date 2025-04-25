
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div className="flex justify-between items-center mb-8">
          <p className="text-lg">My professional experience and qualifications</p>
          <Button asChild>
            <a href="/Rikin_K_Patel_Resume.docx" download={true} >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>
        
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto md:grid-cols-2">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience">
            <div className="mt-8 grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Software Developer Intern</CardTitle>
                      <CardDescription>Tech Solutions Inc.</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">May 2023 - Aug 2023</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed and maintained RESTful APIs using Node.js and Express.</li>
                    <li>Collaborated with the frontend team to integrate API endpoints with React components.</li>
                    <li>Implemented automated testing using Jest to ensure code quality and reliability.</li>
                    <li>Participated in daily stand-ups and sprint planning meetings within an Agile environment.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Frontend Developer</CardTitle>
                      <CardDescription>WebCraft Studios</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">Jan 2023 - Apr 2023</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Designed and developed responsive UI components using React and Tailwind CSS.</li>
                    <li>Improved website performance by implementing code splitting and lazy loading techniques.</li>
                    <li>Collaborated with UX designers to implement user-friendly interfaces and interactions.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="mt-8 grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Diploma in Computer Application Design and Development</CardTitle>
                      <CardDescription>Algonquin College</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">Sep 2023 - Apr 2025 (Expected)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Focusing on full-stack development, cloud services, and modern software architecture.</p>
                  <p className="mt-2 font-medium">Notable Coursework:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Web Application Development</li>
                    <li>Database Design & Implementation</li>
                    <li>Cloud Computing Solutions</li>
                    <li>Mobile Application Development</li>
                    <li>Software Project Management</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Online Certifications</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>AWS Cloud Practitioner</li>
                    <li>MongoDB for JavaScript Developers</li>
                    <li>React Advanced Patterns</li>
                    <li>Modern JavaScript Development</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
