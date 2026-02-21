
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import Skills from '@/components/Skills';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />`
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
