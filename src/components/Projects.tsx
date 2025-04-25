
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Full-Stack Weather & Movie App',
    description: 'A comprehensive application providing weather forecasts alongside movie recommendations based on current conditions.',
    techStack: ['Next.js', 'Redis', 'Express.js', 'TMDB API', 'Edamam API', 'OpenWeather API'],
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  {
    title: 'CRAPR Job Portal',
    description: 'A secure job portal platform with comprehensive user authentication and profile management.',
    techStack: ['MongoDB', 'Express.js', 'React', 'OAuth', 'JWT'],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
  },
  {
    title: 'GitHub User Search App',
    description: 'Android application that allows users to search and browse GitHub profiles with detailed user information.',
    techStack: ['Kotlin', 'Retrofit', 'SharedPreferences', 'GitHub API'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  {
    title: 'Giftr App',
    description: 'Mobile application for managing gift ideas, featuring offline storage capabilities.',
    techStack: ['React Native', 'Context API', 'AsyncStorage'],
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1'
  },
  {
    title: 'Movie Night Voting App',
    description: 'Interactive mobile app that helps groups decide on movies to watch using a swipe-based voting system.',
    techStack: ['Flutter', 'Firebase', 'TMDb API'],
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Card className="project-card overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
        />
      </div>
      
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        <a 
          href="#" 
          className="text-sm font-medium text-primary hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          View Project
        </a>
      </CardFooter>
    </Card>
  );
}
