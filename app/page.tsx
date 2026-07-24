"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Loader2 } from "lucide-react"; // Kita import Loader2 untuk ikon mutar
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiJavascript, SiPhp, SiLaravel, SiFigma } from "react-icons/si";

const CanvaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z" />
  </svg>
);

import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundY2K from "@/components/BackgroundY2K";

export default function Home() {
  const tools = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "PHP", icon: SiPhp },
    { name: "Laravel", icon: SiLaravel },
    { name: "Figma", icon: SiFigma },
    { name: "Canva", icon: CanvaIcon }
  ];

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
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="text-flame mb-6">
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
          <section id="home" className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center relative overflow-hidden">

            {/* Lingkaran Avatar / Foto (z-10 agar di depan bintang) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="z-10 mb-8 sm:mb-10 h-48 w-48 sm:h-60 sm:w-60 rounded-full border-2 border-line bg-surface flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(255,61,46,0.15)] relative">
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
                    strokeLinecap="round" />
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
              className="z-10 mt-10 mb-12 sm:mb-0 flex flex-col gap-4 sm:flex-row sm:justify-center"
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
          <div className="relative overflow-hidden py-6 bg-surface border-y border-line z-10 flex">
            <motion.div
              className="flex whitespace-nowrap w-max items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...tools, ...tools].map((t, i) => (
                <span key={i} className="flex items-center gap-3 font-mono text-base uppercase tracking-wider text-ink-muted px-10 transition-colors hover:text-ink">
                  <t.icon className="text-2xl" />
                  {t.name} <span className="ml-10 text-spark text-[10px]">●</span>
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
