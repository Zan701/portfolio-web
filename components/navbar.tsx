"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Desktop (Desain Ignition: tanpa shadow tebal, pakai border tipis) */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        // pointer-events-none agar bagian kosong navbar tidak menghalangi klik ke halaman bawahnya
        className="fixed top-0 left-0 right-0 z-50 hidden sm:flex items-center justify-center p-6 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center gap-8 rounded-full bg-surface/80 px-8 py-3 backdrop-blur-md border border-line">
          <Link href="/" className="text-sm font-medium text-ink-muted hover:text-flame transition-colors">Home</Link>
          <Link href="#about" className="text-sm font-medium text-ink-muted hover:text-flame transition-colors">About</Link>
          <Link href="#projects" className="text-sm font-medium text-ink-muted hover:text-flame transition-colors">Projects</Link>
          <Link href="#contact" className="text-sm font-medium text-ink-muted hover:text-flame transition-colors">Contact</Link>
        </div>
      </motion.nav>

      {/* Tombol Hamburger HP */}
      <div className="fixed top-4 right-4 z-[60] sm:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-surface/90 backdrop-blur-md border border-line text-ink transition active:scale-95"
        >
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
            <div className="flex flex-col items-center gap-8 text-3xl font-bold font-sans">
              <Link href="/" className="text-ink hover:text-flame transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="#about" className="text-ink hover:text-flame transition-colors" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="#projects" className="text-ink hover:text-flame transition-colors" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link href="#contact" className="text-ink hover:text-flame transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
