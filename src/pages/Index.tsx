import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import SplashScreen from "@/components/SplashScreen";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved !== null) setIsSidebarCollapsed(JSON.parse(saved));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SplashScreen isVisible={showSplash} />
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />
      <main
        className={`transition-all duration-300 ${isSidebarCollapsed ? "sm:ml-[72px]" : "sm:ml-[220px]"} ml-[0px]`}
      >
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
      </main>
    </div>
  );
};

export default Index;
