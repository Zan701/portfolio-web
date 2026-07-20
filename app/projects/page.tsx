"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-void overflow-x-hidden pt-20">
      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
        <div className="max-w-5xl w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center text-3xl font-bold sm:text-4xl text-white"
          >
            Proyek Terbaru
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-Commerce Dashboard",
                description: "Dashboard admin interaktif dengan chart dan tabel data real-time.",
                tags: ["Next.js", "Tailwind", "Chart.js"],
              },
              {
                title: "Aplikasi Kasir (POS)",
                description: "Sistem point-of-sale berbasis web dengan fitur manajemen stok.",
                tags: ["React", "Node.js", "MongoDB"],
              },
              {
                title: "Portfolio Website",
                description: "Website personal yang sedang kamu lihat saat ini, full animasi.",
                tags: ["Next.js", "Framer Motion"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-6 transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30"
              >
                <div className="mb-4 h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  📂
                </div>
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mb-6 text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
