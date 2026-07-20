"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-void overflow-x-hidden pt-20">
      {/* --- ABOUT SECTION --- */}
      <section id="about" className="flex min-h-screen flex-col items-center justify-center px-6 py-24 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl text-white">Tentang Saya</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-lg leading-relaxed text-zinc-400">
                Halo! Saya Fauzan Azhima, seorang pengembang web yang antusias dalam 
                menciptakan antarmuka yang indah dan fungsional. Saya memiliki pengalaman 
                dalam membangun aplikasi web modern menggunakan teknologi terbaru.
              </p>
              <p className="text-lg leading-relaxed text-zinc-400">
                Selain coding, saya tertarik pada desain UI/UX, karena saya percaya bahwa 
                pengalaman pengguna yang hebat berawal dari perpaduan desain yang intuitif 
                dan performa kode yang cepat.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "React", level: "Advanced" },
                  { name: "Next.js", level: "Intermediate" },
                  { name: "Tailwind CSS", level: "Advanced" },
                  { name: "TypeScript", level: "Intermediate" },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-lg bg-zinc-800 p-4 border border-zinc-700"
                  >
                    <h4 className="font-medium text-white">{skill.name}</h4>
                    <p className="text-sm text-blue-400 mt-1">{skill.level}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
