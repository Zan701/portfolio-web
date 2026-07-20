"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Loader2 } from "lucide-react"; // Kita import Loader2 untuk ikon mutar

import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundY2K from "@/components/BackgroundY2K";

export default function Home() {
  const tools = ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript", "PHP", "Laravel","Figma"];
  
  // Fitur saklar untuk mengontrol Layar Loading
  const [isLoading, setIsLoading] = useState(true);

  // Perintah agar loading selesai setelah 2.5 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
   <main className="flex min-h-screen flex-col bg-void overflow-x-hidden">

      {/* --- SPLASH SCREEN / LOADING ANIMATION --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }} // Menghilang ke atas seperti pintu garasi
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          >
            {/* Ikon berputar */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="text-flame mb-6"
            >
              <Loader2 size={48} />
            </motion.div>

            {/* Teks Loading yang berkedip estetik */}
            <motion.h2 
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-spark font-mono tracking-[0.3em] uppercase text-sm"
            >
              Loading Portfolio Fauzan...
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- KONTEN UTAMA (Hanya muncul dan mulai animasi setelah loading mati) --- */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <BackgroundY2K />

          {/* --- HERO SECTION --- */}
          <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center relative overflow-hidden">

            {/* Lingkaran Avatar / Foto (z-10 agar di depan bintang) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="z-10 mb-10 h-60 w-60 rounded-full border-2 border-line bg-surface flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(255,61,46,0.15)] relative">
              <img 
                src="/foto1.png" 
                alt="Fauzan Azhima" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>


            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="z-10 text-4xl font-bold tracking-tight sm:text-4xl font-display text-ink">
              Hi, I'm{" "}
              <span className="relative inline-block whitespace-nowrap">
                Fauzan Azhima
                
               
                <motion.svg 
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-2 left-0 w-full h-auto"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }} >
                  <motion.path 
                    d="M2 7.5C50 -1.5 150 -1.5 198 7.5"
                    stroke="url(#ignition-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="ignition-gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF3D2E" />
                      <stop offset="1" stopColor="#FFC93C" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            {/* Deskripsi */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="z-10 mt-6 flex flex-col items-center gap-3 text-center"
            >
              <h2 className="text-xl font-medium text-ink-muted">Web Developer</h2>
              <p className="max-w-2xl text-base sm:text-lg text-ink-muted/80">
                Building digital products through business understanding, thoughtful design, and modern web technologies.
              </p>
            </motion.div>

            {/* Tombol Aksi */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="z-10 mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <a href="#projects" className="group flex items-center justify-center gap-2 rounded-full bg-flame px-8 py-3 text-sm font-bold text-void transition-all hover:bg-flame-dim hover:shadow-[0_0_24px_rgba(255,61,46,0.3)]">
                Show Project <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#" className="flex items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-8 py-3 text-sm font-bold text-ink transition hover:bg-surface-2 hover:border-flame/50">
                Download CV <Download size={18} />
              </a>
            </motion.div>
            
          </section>

          {/* --- MARQUEE TOOLS SECTION --- */}
          <div className="relative overflow-hidden py-4 bg-surface border-y border-line z-10 flex">
            <motion.div
              className="flex whitespace-nowrap w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...tools, ...tools].map((t, i) => (
                <span key={i} className="flex items-center font-mono text-sm uppercase tracking-wider text-ink-muted px-8">
                  {t} <span className="ml-8 text-spark text-[10px]">●</span>
                </span>
              ))}
            </motion.div>
          </div>

          <About />
          <Projects />
          <Contact />

          {/* --- FOOTER --- */}
          <footer className="w-full bg-zinc-950 py-8 text-center border-t border-zinc-800">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Fauzan Azhima. 
            </p>
          </footer>
        </motion.div>
      )}
    </main>
  );
}
