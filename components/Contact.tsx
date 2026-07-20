import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-screen flex-col items-center justify-center px-6 py-24 bg-zinc-900">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-white sm:text-4xl">Mari Berkolaborasi!</h2>
        <p className="text-lg text-zinc-400 leading-relaxed mb-10">
          Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang bekerja sama. 
          Jangan ragu untuk menyapa!
        </p>
        
        <a href="mailto:ianku93@gmail.com" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-zinc-900 transition hover:bg-zinc-200 hover:scale-105 mb-16">
          Hubungi Saya via Email
        </a>
      </motion.div>
    </section>
  );
}
