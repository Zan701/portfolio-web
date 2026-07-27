"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<{ id: number, image: string, title: string } | null>(null);

  const certificates = [
    {
      id: 1,
      image: "/serti1.png",
      title: "Digital Marketing Mini Course"
    },
    {
      id: 2,
      image: "/serti2.png",
      title: "Software Engineering Fundamental"
    },
    {
      id: 3,
      image: "/serti3.png",
      title: "The Digital Career Code Workshop"
    }
  ];

  return (
    <section id="certificates" className="flex flex-col items-center justify-center px-4 py-24 bg-transparent relative z-10 border-t border-line/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl"
      >
        <div className="text-center mb-16">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl font-display text-ink">
            My <span className="text-spark">Certificates</span>
          </h2>
          <p className="text-base text-ink-muted leading-relaxed max-w-xl mx-auto">
            A collection of certificates from various workshops and mini-courses I've completed to expand my skill set.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer flex flex-col bg-surface/30 p-3 rounded-2xl border border-line shadow-lg hover:shadow-[0_0_25px_rgba(255,201,60,0.15)] hover:border-spark/50 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Gambar Wrapper */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-void/50 border border-line/50">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay saat di-hover */}
                <div className="absolute inset-0 bg-void/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-spark text-void p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_rgba(255,201,60,0.5)]">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>

              {/* Title / Footer Card */}
              <div className="pt-4 pb-2 px-2 text-center">
                <h3 className="text-ink font-medium text-sm sm:text-base group-hover:text-spark transition-colors line-clamp-1">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox / Modal untuk gambar membesar */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-void/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            {/* Tombol Close */}
            <button 
              className="absolute top-6 right-6 p-2 bg-surface border border-line rounded-full text-ink-muted hover:text-spark hover:border-spark transition-colors z-[1000]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCert(null);
              }}
            >
              <X size={24} />
            </button>

            {/* Gambar Besar */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden border-2 border-line/50 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-void w-full">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
              <p className="text-ink mt-4 text-lg font-medium text-center bg-surface/50 px-6 py-2 rounded-full border border-line backdrop-blur-md">
                {selectedCert.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}