"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    

    const element = document.getElementById(id);
    if (element) {
   
      element.scrollIntoView({ behavior: "smooth" });
      
    
      window.history.pushState(null, '', path);
    } else {
    
      window.location.href = path;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
    
        className="fixed top-0 left-0 right-0 z-50 hidden sm:flex items-center justify-center p-6 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-surface/60 px-3 py-2 backdrop-blur-xl border border-line/60 shadow-2xl shadow-void/80">
          <a href="/" onClick={(e) => handleNavClick(e, 'home', '/')} className="px-5 py-2 text-sm font-medium text-ink-muted transition-all duration-300 hover:text-ink hover:bg-surface-2/80 rounded-full cursor-pointer">Home</a>
          <a href="/about" onClick={(e) => handleNavClick(e, 'about', '/about')} className="px-5 py-2 text-sm font-medium text-ink-muted transition-all duration-300 hover:text-ink hover:bg-surface-2/80 rounded-full cursor-pointer">About</a>
          <a href="/projects" onClick={(e) => handleNavClick(e, 'projects', '/projects')} className="px-5 py-2 text-sm font-medium text-ink-muted transition-all duration-300 hover:text-ink hover:bg-surface-2/80 rounded-full cursor-pointer">Projects</a>
          <a href="/contact" onClick={(e) => handleNavClick(e, 'contact', '/contact')} className="px-5 py-2 text-sm font-medium text-ink-muted transition-all duration-300 hover:text-ink hover:bg-surface-2/80 rounded-full cursor-pointer">Contact</a>
        </div>
      </motion.nav>

      {/* Tombol Hamburger HP */}
      <div className="fixed top-4 right-4 z-[60] sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-surface/90 backdrop-blur-md border border-line text-ink transition active:scale-95">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Layar Menu Fullscreen HP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-void/95 backdrop-blur-xl sm:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-3l font-bold font-sans">
              <a href="/" onClick={(e) => handleNavClick(e, 'home', '/')} className="text-ink hover:text-flame transition-colors cursor-pointer">Home</a>
              <a href="/about" onClick={(e) => handleNavClick(e, 'about', '/about')} className="text-ink hover:text-flame transition-colors cursor-pointer">About</a>
              <a href="/projects" onClick={(e) => handleNavClick(e, 'projects', '/projects')} className="text-ink hover:text-flame transition-colors cursor-pointer">Projects</a>
              <a href="/contact" onClick={(e) => handleNavClick(e, 'contact', '/contact')} className="text-ink hover:text-flame transition-colors cursor-pointer">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
