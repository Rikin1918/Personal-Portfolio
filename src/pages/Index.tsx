import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import SplashScreen from '@/components/SplashScreen';
import CurrentlyLearning from '@/components/CurrentlyLearning';
import Blog from '@/components/Blog';
import Certifications from '@/components/Certifications';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SplashScreen isVisible={showSplash} />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <CurrentlyLearning />
      <Blog />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

