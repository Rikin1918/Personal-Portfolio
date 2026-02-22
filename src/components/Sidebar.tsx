import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  GraduationCap,
  Code2,
  FolderKanban,
  BookOpen,
  Award,
  FileText,
  Mail,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Blog", href: "#blog", icon: BookOpen },
  { name: "Certifications", href: "#certifications", icon: Award },
  { name: "Resume", href: "#resume", icon: FileText },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Sidebar({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
}: {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (collapsed: boolean) => void;
}) {
  const [activeSection, setActiveSection] = useState("hero");
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id") || "";
        if (sectionTop < 100 && sectionTop > -300) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved !== null) setIsSidebarCollapsed(JSON.parse(saved));
  }, [setIsSidebarCollapsed]);

  useEffect(() => {
    localStorage.setItem(
      "sidebar-collapsed",
      JSON.stringify(isSidebarCollapsed),
    );
  }, [isSidebarCollapsed]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div
        className={cn(
          "p-4 border-b border-border/50 transition-all duration-300",
          isSidebarCollapsed ? "px-3" : "px-4",
        )}
      >
        <a
          href="#hero"
          className="text-xl font-bold font-heading text-foreground flex items-center"
        >
          {isSidebarCollapsed ? (
            <span className="text-primary text-2xl mx-auto">R</span>
          ) : (
            <>
              Rikin<span className="text-primary">.</span>
            </>
          )}
        </a>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    "hover:bg-secondary/80 group relative",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {!isSidebarCollapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                  {isSidebarCollapsed && (
                    <div
                      className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground 
                                    rounded-md text-sm whitespace-nowrap opacity-0 invisible 
                                    group-hover:opacity-100 group-hover:visible transition-all
                                    shadow-lg border border-border z-50"
                    >
                      {item.name}
                    </div>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-3 border-t border-border/50 space-y-2">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg",
              "bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-200",
              isSidebarCollapsed && "justify-center",
            )}
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            {!isSidebarCollapsed && (
              <span className="font-medium">Toggle Theme</span>
            )}
          </button>
        )}

        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className={cn(
            "hidden md:flex w-full items-center gap-3 px-3 py-2.5 rounded-lg",
            "bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-200",
            isSidebarCollapsed && "justify-center",
          )}
          aria-label="Toggle Sidebar"
        >
          {isSidebarCollapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
          {!isSidebarCollapsed && <span className="font-medium">Collapse</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <aside
        className={cn(
          "hidden md:flex fixed left-0 top-0 h-screen z-40",
          "bg-background/95 backdrop-blur-sm border-r border-border/50",
          "transition-all duration-300 ease-in-out",
          isSidebarCollapsed ? "w-[72px]" : "w-[220px]",
        )}
      >
        {sidebarContent}
      </aside>

      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-secondary/80 text-foreground"
        aria-label="Toggle Menu"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed left-0 top-0 h-screen w-[280px] z-50 
              bg-background border-r border-border/50 shadow-2xl"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
